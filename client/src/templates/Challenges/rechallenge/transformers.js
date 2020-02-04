import {
  attempt,
  cond,
  flow,
  identity,
  isError,
  matchesProperty,
  overSome,
  partial,
  stubTrue
} from 'lodash';

import * as Babel from '@babel/standalone';
import presetEnv from '@babel/preset-env';
import presetReact from '@babel/preset-react';
import protect from '@freecodecamp/loop-protect';

import * as vinyl from '../utils/polyvinyl.js';
import createWorker from '../utils/worker-executor';

// the config files are created during the build, but not before linting
// eslint-disable-next-line import/no-unresolved
import { filename as sassCompile } from '../../../../config/sass-compile';

const protectTimeout = 100;
const testProtectTimeout = 1500;
const loopsPerTimeoutCheck = 2000;

function loopProtectCB(line) {
  console.log(
    `Potential infinite loop detected on line ${line}. Tests may fail if this is not changed.`
  );
}

function testLoopProtectCB(line) {
  console.log(
    `Potential infinite loop detected on line ${line}. Tests may be failing because of this.`
  );
}

Babel.registerPlugin('loopProtection', protect(protectTimeout, loopProtectCB));
Babel.registerPlugin(
  'testLoopProtection',
  protect(testProtectTimeout, testLoopProtectCB, loopsPerTimeoutCheck)
);

const babelOptionsJSBase = {
  presets: [presetEnv]
};

const babelOptionsJSX = {
  plugins: ['loopProtection'],
  presets: [presetEnv, presetReact]
};

const babelOptionsJS = {
  ...babelOptionsJSBase,
  plugins: ['testLoopProtection']
};

const babelOptionsJSPreview = {
  ...babelOptionsJSBase,
  plugins: ['loopProtection']
};

const babelTransformCode = options => code =>
  Babel.transform(code, options).code;

// const sourceReg =
//  /(<!-- fcc-start-source -->)([\s\S]*?)(?=<!-- fcc-end-source -->)/g;
const NBSPReg = new RegExp(String.fromCharCode(160), 'g');

const testJS = matchesProperty('ext', 'js');
const testJSX = matchesProperty('ext', 'jsx');
const testHTML = matchesProperty('ext', 'html');
const testHTML$JS$JSX = overSome(testHTML, testJS, testJSX);
export const testJS$JSX = overSome(testJS, testJSX);

export const replaceNBSP = cond([
  [
    testHTML$JS$JSX,
    partial(vinyl.transformContents, contents => contents.replace(NBSPReg, ' '))
  ],
  [stubTrue, identity]
]);

function tryTransform(wrap = identity) {
  return function transformWrappedPoly(source) {
    const result = attempt(wrap, source);
    if (isError(result)) {
      // note(Bouncey): Error thrown here to collapse the build pipeline
      // At the minute, it will not bubble up
      // We collapse the pipeline so the app doesn't fall over trying
      // parse bad code (syntax/type errors etc...)
      throw result;
    }
    return result;
  };
}

const babelTransformer = ({ preview = false, protect = true }) => {
  let options = babelOptionsJSBase;
  // we always protect the preview, since it evaluates as the user types and
  // they may briefly have infinite looping code accidentally
  if (protect) {
    options = preview ? babelOptionsJSPreview : babelOptionsJS;
  } else {
    options = preview ? babelOptionsJSPreview : options;
  }
  return cond([
    [
      testJS,
      flow(
        partial(
          vinyl.transformHeadTailAndContents,
          tryTransform(babelTransformCode(options))
        )
      )
    ],
    [
      testJSX,
      flow(
        partial(
          vinyl.transformHeadTailAndContents,
          tryTransform(babelTransformCode(babelOptionsJSX))
        ),
        partial(vinyl.setExt, 'js')
      )
    ],
    [stubTrue, identity]
  ]);
};

const sassWorker = createWorker(sassCompile);
async function transformSASS(element) {
  const styleTags = element.querySelectorAll('style[type="text/sass"]');
  await Promise.all(
    [].map.call(styleTags, async style => {
      style.type = 'text/css';
      style.innerHTML = await sassWorker.execute(style.innerHTML, 5000).done;
    })
  );
}

function transformScript(element) {
  const scriptTags = element.querySelectorAll('script');
  scriptTags.forEach(script => {
    script.innerHTML = tryTransform(babelTransformCode(babelOptionsJSX))(
      script.innerHTML
    );
  });
}

const transformHtml = async function(file) {
  const div = document.createElement('div');
  div.innerHTML = file.contents;
  await Promise.all([transformSASS(div), transformScript(div)]);
  return vinyl.transformContents(() => div.innerHTML, file);
};

export const composeHTML = cond([
  [
    testHTML,
    flow(
      partial(vinyl.transformHeadTailAndContents, source => {
        const div = document.createElement('div');
        div.innerHTML = source;
        return div.innerHTML;
      }),
      partial(vinyl.compileHeadTail, '')
    )
  ],
  [stubTrue, identity]
]);

export const htmlTransformer = cond([
  [testHTML, transformHtml],
  [stubTrue, identity]
]);

export const getTransformers = config => [
  replaceNBSP,
  babelTransformer(config ? config : {}),
  composeHTML,
  htmlTransformer
];
