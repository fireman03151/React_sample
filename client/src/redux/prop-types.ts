import PropTypes from 'prop-types';
import { HandlerProps } from 'react-reflex';
import { SuperBlocks } from '../../../config/certification-settings';
import { Themes } from '../components/settings/theme';
import { certMap } from '../resources/cert-and-project-map';

export const UserPropType = PropTypes.shape({
  about: PropTypes.string,
  completedChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      solution: PropTypes.string,
      githubLink: PropTypes.string,
      challengeType: PropTypes.number,
      completedDate: PropTypes.number,
      challengeFiles: PropTypes.array
    })
  ),
  email: PropTypes.string,
  githubProfile: PropTypes.string,
  is2018DataVisCert: PropTypes.bool,
  isApisMicroservicesCert: PropTypes.bool,
  isBackEndCert: PropTypes.bool,
  isDataVisCert: PropTypes.bool,
  isEmailVerified: PropTypes.bool,
  isFrontEndCert: PropTypes.bool,
  isFrontEndLibsCert: PropTypes.bool,
  isFullStackCert: PropTypes.bool,
  isHonest: PropTypes.bool,
  isInfosecQaCert: PropTypes.bool,
  isQaCertV7: PropTypes.bool,
  isInfosecCertV7: PropTypes.bool,
  isJsAlgoDataStructCert: PropTypes.bool,
  isRespWebDesignCert: PropTypes.bool,
  isSciCompPyCertV7: PropTypes.bool,
  isDataAnalysisPyCertV7: PropTypes.bool,
  isMachineLearningPyCertV7: PropTypes.bool,
  linkedin: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string
    })
  ),
  sendQuincyEmail: PropTypes.bool,
  sound: PropTypes.bool,
  theme: PropTypes.string,
  twitter: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string
});

export const CurrentCertsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    show: PropTypes.bool,
    title: PropTypes.string,
    certSlug: PropTypes.string
  })
);

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
    title: typeof certMap[number]['title'];
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

type Question = { text: string; answers: string[]; solution: number };
type Fields = { slug: string; blockName: string; tests: Test[] };
export type Required = {
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
    removeComments: boolean;
    isLocked: boolean;
    isPrivate: boolean;
    order: number;
    question: Question;
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

export type AllChallengeNode = {
  edges: [
    {
      node: ChallengeNode;
    }
  ];
};

export type AllMarkdownRemark = {
  edges: [
    {
      node: MarkdownRemark;
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

export type CertTest = {
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
  isGithub: boolean;
  isLinkedIn: boolean;
  isTwitter: boolean;
  isWebsite: boolean;
  joinDate: string;
  linkedin: string;
  location: string;
  name: string;
  picture: string;
  points: number;
  portfolio: Portfolio[];
  profileUI: ProfileUI;
  progressTimestamps: Array<unknown>;
  sendQuincyEmail: boolean;
  sound: boolean;
  theme: Themes;
  twitter: string;
  username: string;
  website: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yearsTopContributor: any[];
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
  isFrontEndCert: boolean;
  isFrontEndLibsCert: boolean;
  isFullStackCert: boolean;
  isInfosecQaCert: boolean;
  isQaCertV7: boolean;
  isInfosecCertV7: boolean;
  isJsAlgoDataStructCert: boolean;
  isRespWebDesignCert: boolean;
  isSciCompPyCertV7: boolean;
  isDataAnalysisPyCertV7: boolean;
  isMachineLearningPyCertV7: boolean;
};

export type CompletedChallenge = {
  id: string;
  solution?: string | null;
  githubLink?: string;
  challengeType?: number;
  completedDate: number;
  challengeFiles: ChallengeFiles;
};

export type Ext = 'js' | 'html' | 'css' | 'jsx';
export type FileKey = 'scriptjs' | 'indexhtml' | 'stylescss';

export type ChallengeMeta = {
  block: string;
  id: string;
  introPath: string;
  nextChallengePath: string;
  prevChallengePath: string;
  removeComments: boolean;
  superBlock: SuperBlocks;
  title?: string;
  challengeType?: number;
  helpCategory: string;
};

export type Portfolio = {
  id: string;
  title?: string;
  url?: string;
  image?: string;
  description?: string;
};

export type FileKeyChallenge = {
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
  editableRegionBoundaries: number[];
  usesMultifileEditor: boolean;
  path: string;
  error: null | string;
  head: string;
  tail: string;
  seed: string;
  contents: string;
  id: string;
  history: [[string], string];
};

export type ChallengeFiles = ChallengeFile[] | null;

export interface UserFetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
  error: string | null;
}
