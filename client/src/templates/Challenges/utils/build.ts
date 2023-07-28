import { challengeTypes } from '../../../../../config/challenge-types';
import frameRunnerData from '../../../../../config/client/frame-runner.json';
import testEvaluatorData from '../../../../../config/client/test-evaluator.json';
import pythonRunnerData from '../../../../../config/client/python-runner.json';

import {
  ChallengeFile as PropTypesChallengeFile,
  ChallengeMeta
} from '../../../redux/prop-types';
import { concatHtml, createPythonTerminal } from '../rechallenge/builders';
import {
  getTransformers,
  embedFilesInHtml,
  getPythonTransformers
} from '../rechallenge/transformers';
import {
  createTestFramer,
  runTestInTestFrame,
  createMainPreviewFramer,
  createProjectPreviewFramer,
  ProxyLogger,
  TestRunnerConfig,
  Context,
  Source
} from './frame';
import createWorker from './worker-executor';

interface ChallengeFile extends PropTypesChallengeFile {
  source: string;
  index: string;
  editableContents: string;
}

type ChallengeFiles = ChallengeFile[];

interface BuildChallengeData extends Context {
  challengeType: number;
  challengeFiles: ChallengeFiles;
  required: { src: string }[];
  template: string;
  url: string;
}

interface BuildOptions {
  preview: boolean;
  protect: boolean;
  usesTestRunner: boolean;
}

const { filename: testEvaluator } = testEvaluatorData;

const frameRunnerSrc = `/js/${frameRunnerData.filename}.js`;

const pythonRunnerSrc = `/js/${pythonRunnerData.filename}.js`;

type ApplyFunctionProps = (file: ChallengeFile) => Promise<ChallengeFile>;

const applyFunction =
  (fn: ApplyFunctionProps) => async (file: ChallengeFile) => {
    try {
      if (file.error) {
        return file;
      }
      const newFile = await fn.call(this, file);
      if (typeof newFile !== 'undefined') {
        return newFile;
      }
      return file;
    } catch (error) {
      return { ...file, error };
    }
  };

const composeFunctions = (...fns: ApplyFunctionProps[]) =>
  fns.map(applyFunction).reduce((f, g) => x => f(x).then(g));

// TODO: split this into at least two functions. One to create 'original' i.e.
// the source and another to create the contents.
function buildSourceMap(challengeFiles: ChallengeFiles): Source | undefined {
  // TODO: rename sources.index to sources.contents.
  const source: Source | undefined = challengeFiles?.reduce(
    (sources, challengeFile) => {
      sources.index += challengeFile.source || '';
      sources.contents = sources.index;
      sources.original[challengeFile.history[0]] = challengeFile.source;
      sources.editableContents += challengeFile.editableContents || '';
      return sources;
    },
    {
      index: '',
      editableContents: '',
      original: {}
    } as Source
  );
  return source;
}

function checkFilesErrors(challengeFiles: ChallengeFiles): ChallengeFiles {
  const errors = challengeFiles
    .filter(({ error }) => error)
    .map(({ error }) => error);
  if (errors.length) {
    throw errors;
  }
  return challengeFiles;
}

const buildFunctions = {
  [challengeTypes.js]: buildJSChallenge,
  [challengeTypes.jsProject]: buildJSChallenge,
  [challengeTypes.html]: buildDOMChallenge,
  [challengeTypes.modern]: buildDOMChallenge,
  [challengeTypes.backend]: buildBackendChallenge,
  [challengeTypes.backEndProject]: buildBackendChallenge,
  [challengeTypes.pythonProject]: buildBackendChallenge,
  [challengeTypes.multifileCertProject]: buildDOMChallenge,
  [challengeTypes.colab]: buildBackendChallenge,
  [challengeTypes.python]: buildPythonChallenge
};

export function canBuildChallenge(challengeData: BuildChallengeData): boolean {
  const { challengeType } = challengeData;
  return Object.prototype.hasOwnProperty.call(buildFunctions, challengeType);
}

// TODO: Figure out and (hopefully) simplify the return type.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function buildChallenge(
  challengeData: BuildChallengeData,
  options: BuildOptions
) {
  const { challengeType } = challengeData;
  const build = buildFunctions[challengeType];
  if (build) {
    return build(challengeData, options);
  }
  throw new Error(`Cannot build challenge of type ${challengeType}`);
}

const testRunners = {
  [challengeTypes.js]: getJSTestRunner,
  [challengeTypes.html]: getDOMTestRunner,
  [challengeTypes.backend]: getDOMTestRunner,
  [challengeTypes.pythonProject]: getDOMTestRunner,
  [challengeTypes.multifileCertProject]: getDOMTestRunner
};
// TODO: Figure out and (hopefully) simplify the return type.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getTestRunner(
  buildData: BuildChallengeData,
  runnerConfig: TestRunnerConfig,
  document: Document
) {
  const { challengeType } = buildData;
  const testRunner = testRunners[challengeType];
  if (testRunner) {
    return testRunner(buildData, runnerConfig, document);
  }
  throw new Error(`Cannot get test runner for challenge type ${challengeType}`);
}

function getJSTestRunner(
  { build, sources }: BuildChallengeData,
  { proxyLogger, removeComments }: TestRunnerConfig
) {
  const code = {
    contents: sources.index,
    editableContents: sources.editableContents
  };

  const testWorker = createWorker(testEvaluator, { terminateWorker: true });

  type CreateWorker = ReturnType<typeof createWorker>;

  interface TestWorker extends CreateWorker {
    on: (event: string, listener: (...args: string[]) => void) => void;
    done: () => void;
  }

  return (testString: string, testTimeout: number, firstTest = true) => {
    const result = testWorker.execute(
      { build, testString, code, sources, firstTest, removeComments },
      testTimeout
    ) as TestWorker;

    result.on('LOG', proxyLogger);
    return result.done;
  };
}

async function getDOMTestRunner(
  buildData: BuildChallengeData,
  { proxyLogger }: TestRunnerConfig,
  document: Document
) {
  await new Promise<void>(resolve =>
    createTestFramer(document, proxyLogger, resolve)(buildData)
  );
  return (testString: string, testTimeout: number) =>
    runTestInTestFrame(document, testString, testTimeout);
}

type BuildResult = {
  challengeType: number;
  build: string;
  sources: Source | undefined;
};

// TODO: All the buildXChallenge files have a similar structure, so make that
// abstraction (function, class, whatever) and then create the various functions
// out of it.
export function buildDOMChallenge(
  { challengeFiles, required = [], template = '' }: BuildChallengeData,
  { usesTestRunner } = { usesTestRunner: false }
): Promise<BuildResult> | undefined {
  const loadEnzyme = challengeFiles?.some(
    challengeFile => challengeFile.ext === 'jsx'
  );

  const pipeLine = composeFunctions(...getTransformers());
  const finalFiles = challengeFiles?.map(pipeLine);

  if (finalFiles) {
    return Promise.all(finalFiles)
      .then(checkFilesErrors)
      .then(
        embedFilesInHtml as (
          x: ChallengeFiles
        ) => Promise<[ChallengeFiles, string]>
      )
      .then(([challengeFiles, contents]) => ({
        // TODO: Stop overwriting challengeType with 'html'. Figure out why it's
        // necessary at the moment.
        challengeType: challengeTypes.html,
        build: concatHtml({
          required,
          template,
          contents,
          ...(usesTestRunner && { testRunner: frameRunnerSrc })
        }),
        sources: buildSourceMap(challengeFiles),
        loadEnzyme
      }));
  }
}

export function buildJSChallenge(
  { challengeFiles }: { challengeFiles: ChallengeFiles },
  options: BuildOptions
): Promise<BuildResult> | undefined {
  const pipeLine = composeFunctions(...getTransformers(options));

  const finalFiles = challengeFiles?.map(pipeLine);
  if (finalFiles) {
    return Promise.all(finalFiles)
      .then(checkFilesErrors)
      .then(challengeFiles => ({
        challengeType: challengeTypes.js,
        build: challengeFiles
          .reduce(
            (body, challengeFile) => [
              ...body,
              challengeFile.head,
              challengeFile.contents,
              challengeFile.tail
            ],
            [] as string[]
          )
          .join('\n'),
        sources: buildSourceMap(challengeFiles)
      }));
  }
}

function buildBackendChallenge({ url }: BuildChallengeData) {
  return {
    challengeType: challengeTypes.backend,
    build: concatHtml({ testRunner: frameRunnerSrc }),
    sources: { url }
  };
}

function getTransformedPython(challengeFiles: ChallengeFiles) {
  return challengeFiles[0].contents;
}

export function buildPythonChallenge({
  challengeFiles
}: BuildChallengeData): Promise<BuildResult> | undefined {
  const pipeLine = composeFunctions(...getPythonTransformers());
  const finalFiles = challengeFiles.map(pipeLine);

  if (finalFiles) {
    return (
      Promise.all(finalFiles)
        .then(checkFilesErrors)
        // Unlike the DOM challenges, there's no need to embed the files in HTML
        .then(challengeFiles => ({
          // TODO: Stop overwriting challengeType with 'html'. Figure out why it's
          // necessary at the moment.
          challengeType: challengeTypes.html,
          // Both the terminal and pyodide are loaded into the browser, so we
          // still need to build the HTML.
          build: createPythonTerminal(pythonRunnerSrc),
          sources: buildSourceMap(challengeFiles),
          transformedPython: getTransformedPython(challengeFiles)
        }))
    );
  }
}

export function updatePreview(
  buildData: BuildChallengeData,
  document: Document,
  proxyLogger: ProxyLogger
): Promise<void> {
  // TODO: either create a 'buildType' or use the real challengeType here
  // (buildData.challengeType is set to 'html' for challenges that can be
  // previewed, hence this being true for python challenges, multifile steps and
  // so on).

  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multifileCertProject
  ) {
    return new Promise<void>(resolve =>
      createMainPreviewFramer(
        document,
        proxyLogger,
        getDocumentTitle(buildData),
        resolve
      )(buildData)
    );
  } else {
    throw new Error(
      `Cannot show preview for challenge type ${buildData.challengeType}`
    );
  }
}

function getDocumentTitle(buildData: BuildChallengeData) {
  // Give iframe a title attribute for accessibility using the preview
  // document's <title>.

  const parser = new DOMParser();
  const doc = parser.parseFromString(buildData?.sources?.index, 'text/html');
  const title = doc.querySelector('title');

  return title?.innerText ?? 'challenge';
}

export function updateProjectPreview(
  buildData: BuildChallengeData,
  document: Document
): void {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multifileCertProject
  ) {
    createProjectPreviewFramer(
      document,
      getDocumentTitle(buildData)
    )(buildData);
  } else {
    throw new Error(
      `Cannot show preview for challenge type ${buildData.challengeType}`
    );
  }
}

export function challengeHasPreview({ challengeType }: ChallengeMeta): boolean {
  return (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multifileCertProject ||
    challengeType === challengeTypes.python
  );
}

export function isJavaScriptChallenge({
  challengeType
}: ChallengeMeta): boolean {
  return (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.jsProject
  );
}

export function isLoopProtected(challengeMeta: ChallengeMeta): boolean {
  return challengeMeta.superBlock !== 'coding-interview-prep';
}
