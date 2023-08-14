import { HandlerProps } from 'react-reflex';
import { SuperBlocks } from '../../../config/superblocks';
import { Themes } from '../components/settings/theme';
import { liveCerts } from '../../config/cert-and-project-map';

export type Steps = {
  isHonest?: boolean;
  currentCerts?: Array<CurrentCert>;
  isShowCerts?: boolean;
  isShowName?: boolean;
  isShowProfile?: boolean;
};

export type CurrentCert = {
  show: boolean;
  title: string;
  certSlug: string;
};

export type MarkdownRemark = {
  fields: [{ component: string; nodeIdentity: string; slug: string }];
  fileAbsolutePath: string;
  frontmatter: {
    block: string;
    isBeta: boolean;
    superBlock: SuperBlocks;
    // TODO: make enum like superBlock
    certification: string;
    title: (typeof liveCerts)[number]['title'];
  };
  headings: [
    {
      depth: number;
      value: string;
      id: string;
    }
  ];
  html: string;
  htmlAst: Record<string, unknown>;
  id: string;
  rawMarkdownBody: string;
  timeToRead: number;
  wordCount: {
    paragraphs: number;
    sentences: number;
    words: number;
  };
};

type Question = {
  text: string;
  answers: string[];
  solution: number;
};
type Fields = {
  slug: string;
  blockHashSlug: string;
  blockName: string;
  tests: Test[];
};
type Required = {
  link: string;
  raw: boolean;
  src: string;
  crossDomain?: boolean;
};
export interface BilibiliIds {
  aid: string;
  bvid: string;
  cid: string;
}

export interface VideoLocaleIds {
  espanol?: string;
  italian?: string;
  portuguese?: string;
}

export interface PrerequisiteChallenge {
  id: string;
  title: string;
}

export type ChallengeWithCompletedNode = {
  block: string;
  challengeType: number;
  dashedName: string;
  fields: {
    slug: string;
  };
  id: string;
  isCompleted: boolean;
  order: number;
  superBlock: SuperBlocks;
  title: string;
};

export type ChallengeNode = {
  challenge: {
    block: string;
    certification: string;
    challengeOrder: number;
    challengeType: number;
    dashedName: string;
    description: string;
    challengeFiles: ChallengeFiles;
    fields: Fields;
    forumTopicId: number;
    guideUrl: string;
    head: string[];
    hasEditableBoundaries: boolean;
    helpCategory: string;
    id: string;
    instructions: string;
    isComingSoon: boolean;
    internal?: {
      content: string;
      contentDigest: string;
      description: string;
      fieldOwners: string[];
      ignoreType: boolean | null;
      mediaType: string;
      owner: string;
      type: string;
    };
    notes: string;
    prerequisites: PrerequisiteChallenge[];
    removeComments: boolean;
    isLocked: boolean;
    isPrivate: boolean;
    order: number;
    question: Question;
    assignments: string[];
    required: Required[];
    solutions: {
      [T in FileKey]: FileKeyChallenge;
    };
    sourceInstanceName: string;
    superOrder: number;
    superBlock: SuperBlocks;
    tail: string[];
    template: string;
    tests: Test[];
    time: string;
    title: string;
    translationPending: boolean;
    url: string;
    usesMultifileEditor: boolean;
    videoId: string;
    videoLocaleIds?: VideoLocaleIds;
    bilibiliIds?: BilibiliIds;
    videoUrl: string;
  };
};

export type CertificateNode = {
  challenge: {
    // TODO: use enum
    certification: string;
    tests: { id: string }[];
  };
};

export type AllChallengesInfo = {
  challengeEdges: { node: ChallengeNode }[];
  certificateNodes: CertificateNode[];
};

export type AllChallengeNode = {
  edges: [
    {
      node: ChallengeNode;
    }
  ];
};

export type ResizeProps = {
  onStopResize: (arg0: HandlerProps) => void;
  onResize: () => void;
};

export type Dimensions = {
  height: number;
  width: number;
};

export type Test = {
  pass?: boolean;
  err?: string;
} & (ChallengeTest | CertTest);

export type ChallengeTest = {
  text: string;
  testString: string;
};

type CertTest = {
  id: string;
  title: string;
};

export type User = {
  calendar: Record<string, number>;
  about: string;
  acceptedPrivacyTerms: boolean;
  completedChallenges: CompletedChallenge[];
  currentChallengeId: string;
  email: string;
  emailVerified: boolean;
  githubProfile: string;
  isBanned: boolean;
  isCheater: boolean;
  isDonating: boolean;
  isHonest: boolean;
  joinDate: string;
  linkedin: string;
  location: string;
  name: string;
  picture: string;
  points: number;
  portfolio: PortfolioProjectData[];
  profileUI: ProfileUI;
  progressTimestamps: Array<unknown>;
  savedChallenges: SavedChallenges;
  sendQuincyEmail: boolean;
  sound: boolean;
  theme: Themes;
  keyboardShortcuts: boolean;
  twitter: string;
  username: string;
  website: string;
  yearsTopContributor: string[];
} & ClaimedCertifications;

export type ProfileUI = {
  isLocked: boolean;
  showAbout: boolean;
  showCerts: boolean;
  showDonation: boolean;
  showHeatMap: boolean;
  showLocation: boolean;
  showName: boolean;
  showPoints: boolean;
  showPortfolio: boolean;
  showTimeLine: boolean;
};

export type ClaimedCertifications = {
  is2018DataVisCert: boolean;
  isApisMicroservicesCert: boolean;
  isBackEndCert: boolean;
  isDataVisCert: boolean;
  isEmailVerified: boolean;
  isCollegeAlgebraPyCertV8: boolean;
  isFrontEndCert: boolean;
  isFrontEndLibsCert: boolean;
  isFullStackCert: boolean;
  isInfosecQaCert: boolean;
  isQaCertV7: boolean;
  isInfosecCertV7: boolean;
  isJsAlgoDataStructCert: boolean;
  isRelationalDatabaseCertV8: boolean;
  isRespWebDesignCert: boolean;
  isSciCompPyCertV7: boolean;
  isDataAnalysisPyCertV7: boolean;
  isMachineLearningPyCertV7: boolean;
};

type SavedChallenges = SavedChallenge[];

export type SavedChallenge = {
  id: string;
  challengeFiles: SavedChallengeFiles;
};

export type SavedChallengeFile = {
  fileKey: string;
  ext: Ext;
  name: string;
  history?: string[];
  contents: string;
};

export type SavedChallengeFiles = SavedChallengeFile[];

export type CompletedChallenge = {
  id: string;
  solution?: string | null;
  githubLink?: string;
  challengeType?: number;
  completedDate: number;
  challengeFiles:
    | Pick<ChallengeFile, 'contents' | 'ext' | 'fileKey' | 'name'>[]
    | null;
  examResults?: GeneratedExamResults;
};

export type Ext = 'js' | 'html' | 'css' | 'jsx';
export type FileKey = 'scriptjs' | 'indexhtml' | 'stylescss' | 'indexjsx';

export type ChallengeMeta = {
  block: string;
  id: string;
  introPath: string;
  isFirstStep: boolean;
  nextChallengePath: string | null;
  prevChallengePath: string | null;
  removeComments: boolean;
  superBlock: SuperBlocks;
  title?: string;
  challengeType?: number;
  helpCategory: string;
};

export type PortfolioProjectData = {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
};

type FileKeyChallenge = {
  contents: string;
  ext: Ext;
  head: string;
  id: string;
  key: FileKey;
  name: string;
  tail: string;
};

export type ChallengeFile = {
  fileKey: string;
  ext: Ext;
  name: string;
  editableRegionBoundaries?: number[];
  usesMultifileEditor?: boolean;
  error: null | string | unknown;
  head: string;
  tail: string;
  seed: string;
  contents: string;
  id: string;
  history: string[];
};

export type ChallengeFiles = ChallengeFile[] | null;

export interface UserFetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
  error: string | null;
}

// Exam Related Types:
interface GeneratedExamAnswer {
  id: string;
  answer: string;
}

// Generated Exam (from API)
export interface GeneratedExamQuestion {
  id: string;
  question: string;
  answers: GeneratedExamAnswer[];
}

export interface GenerateExamResponse {
  error?: string;
  generatedExam?: GeneratedExamQuestion[];
}

export interface GenerateExamResponseWithData {
  response: Response;
  data: GenerateExamResponse;
}

// User Exam (null until they answer the question)
interface UserExamAnswer {
  id: string | null;
  answer: string | null;
}

export interface UserExamQuestion {
  id: string;
  question: string;
  answer: UserExamAnswer;
}

export interface UserExam {
  examTimeInSeconds: number;
  userExamQuestions: UserExamQuestion[];
}

// Exam Results (from API)
export interface GeneratedExamResults {
  numberOfCorrectAnswers: number;
  numberOfQuestionsInExam: number;
  percentCorrect: number;
  passingPercent: number;
  passed: boolean;
  examTimeInSeconds: number;
}
