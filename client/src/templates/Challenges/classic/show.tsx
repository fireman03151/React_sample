import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { HandlerProps } from 'react-reflex';
import Media from 'react-responsive';
import { bindActionCreators, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import store from 'store';
import { challengeTypes } from '../../../../utils/challenge-types';
import LearnLayout from '../../../components/layouts/learn';

import {
  ChallengeFile,
  ChallengeFiles,
  ChallengeMeta,
  ChallengeNode,
  ResizeProps,
  Test
} from '../../../redux/prop-types';
import { isContained } from '../../../utils/is-contained';
import ChallengeDescription from '../components/Challenge-Description';
import Hotkeys from '../components/Hotkeys';
import ResetModal from '../components/ResetModal';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import Notes from '../components/notes';
import Output from '../components/output';
import Preview from '../components/preview';
import ProjectPreviewModal, {
  PreviewConfig
} from '../components/project-preview-modal';
import SidePanel from '../components/side-panel';
import VideoModal from '../components/video-modal';
import {
  cancelTests,
  challengeFilesSelector,
  challengeMounted,
  challengeTestsSelector,
  consoleOutputSelector,
  createFiles,
  executeChallenge,
  initConsole,
  initTests,
  isChallengeCompletedSelector,
  previewMounted,
  updateChallengeMeta,
  openModal,
  setEditorFocusability
} from '../redux';
import { getGuideUrl } from '../utils';
import MultifileEditor from './MultifileEditor';
import DesktopLayout from './desktop-layout';
import MobileLayout from './mobile-layout';

import './classic.css';
import '../components/test-frame.css';

// Redux Setup
const mapStateToProps = createStructuredSelector({
  challengeFiles: challengeFilesSelector,
  tests: challengeTestsSelector,
  output: consoleOutputSelector,
  isChallengeCompleted: isChallengeCompletedSelector
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createFiles,
      initConsole,
      initTests,
      updateChallengeMeta,
      challengeMounted,
      executeChallenge,
      cancelTests,
      previewMounted,
      openModal,
      setEditorFocusability
    },
    dispatch
  );

// Types
interface ShowClassicProps {
  cancelTests: () => void;
  challengeMounted: (arg0: string) => void;
  createFiles: (arg0: ChallengeFile[]) => void;
  data: { challengeNode: ChallengeNode };
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  challengeFiles: ChallengeFiles;
  initConsole: (arg0: string) => void;
  initTests: (tests: Test[]) => void;
  isChallengeCompleted: boolean;
  output: string[];
  pageContext: {
    challengeMeta: ChallengeMeta;
    projectPreview: PreviewConfig & { showProjectPreview: boolean };
  };
  t: TFunction;
  tests: Test[];
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  openModal: (modal: string) => void;
  setEditorFocusability: (canFocus: boolean) => void;
  previewMounted: () => void;
}

interface ShowClassicState {
  layout: ReflexLayout;
  resizing: boolean;
}

interface ReflexLayout {
  codePane: { flex: number };
  editorPane: { flex: number };
  instructionPane: { flex: number };
  notesPane: { flex: number };
  previewPane: { flex: number };
  testsPane: { flex: number };
}

const MAX_MOBILE_WIDTH = 767;
const REFLEX_LAYOUT = 'challenge-layout';
const BASE_LAYOUT = {
  codePane: { flex: 1 },
  editorPane: { flex: 1 },
  instructionPane: { flex: 1 },
  previewPane: { flex: 0.7 },
  notesPane: { flex: 0.7 },
  testsPane: { flex: 0.3 }
};

// Component
class ShowClassic extends Component<ShowClassicProps, ShowClassicState> {
  static displayName: string;
  containerRef: React.RefObject<unknown>;
  editorRef: React.RefObject<unknown>;
  instructionsPanelRef: React.RefObject<HTMLDivElement>;
  resizeProps: ResizeProps;

  constructor(props: ShowClassicProps) {
    super(props);

    this.resizeProps = {
      onStopResize: this.onStopResize.bind(this),
      onResize: this.onResize.bind(this)
    };

    // layout: Holds the information of the panes sizes for desktop view
    this.state = {
      layout: this.getLayoutState(),
      resizing: false
    };

    this.containerRef = React.createRef();
    this.editorRef = React.createRef();
    this.instructionsPanelRef = React.createRef();
  }

  getLayoutState(): ReflexLayout {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const reflexLayout: ReflexLayout = store.get(REFLEX_LAYOUT);

    // Validate if user has not done any resize of the panes
    if (!reflexLayout) return BASE_LAYOUT;

    // Check that the layout values stored are valid (exist in base layout). If
    // not valid, it will fallback to the base layout values and be set on next
    // user resize.
    const isValidLayout = isContained(
      Object.keys(BASE_LAYOUT),
      Object.keys(reflexLayout)
    );

    return isValidLayout ? reflexLayout : BASE_LAYOUT;
  }

  onResize() {
    this.setState(state => ({ ...state, resizing: true }));
  }

  onStopResize(event: HandlerProps) {
    // @ts-expect-error TODO: Apparently, name does not exist on type
    const { name, flex } = event.component.props;

    // Only interested in tracking layout updates for ReflexElement's
    if (!name) {
      this.setState(state => ({ ...state, resizing: false }));
      return;
    }

    // Forcing a state update with the value of each panel since on stop resize
    // is executed per each panel.
    const newLayout =
      typeof this.state.layout === 'object'
        ? {
            ...this.state.layout,
            [name]: { flex }
          }
        : this.state.layout;

    this.setState({
      layout: newLayout,
      resizing: false
    });

    store.set(REFLEX_LAYOUT, this.state.layout);
  }

  componentDidMount() {
    const {
      data: {
        challengeNode: {
          challenge: { title }
        }
      }
    } = this.props;
    this.initializeComponent(title);
  }

  componentDidUpdate(prevProps: ShowClassicProps) {
    const {
      data: {
        challengeNode: {
          challenge: {
            title: prevTitle,
            fields: { tests: prevTests }
          }
        }
      }
    } = prevProps;
    const {
      data: {
        challengeNode: {
          challenge: {
            title: currentTitle,
            fields: { tests: currTests }
          }
        }
      }
    } = this.props;
    if (prevTitle !== currentTitle || prevTests !== currTests) {
      this.initializeComponent(currentTitle);
    }
  }

  initializeComponent(title: string) {
    const {
      challengeMounted,
      createFiles,
      initConsole,
      initTests,
      updateChallengeMeta,
      openModal,
      data: {
        challengeNode: {
          challenge: {
            challengeFiles,
            fields: { tests },
            challengeType,
            removeComments,
            helpCategory
          }
        }
      },
      pageContext: {
        challengeMeta,
        projectPreview: { showProjectPreview }
      }
    } = this.props;
    initConsole('');
    createFiles(challengeFiles ?? []);
    initTests(tests);
    if (showProjectPreview) openModal('projectPreview');
    updateChallengeMeta({
      ...challengeMeta,
      title,
      removeComments: removeComments !== false,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
  }

  componentWillUnmount() {
    const { createFiles, cancelTests } = this.props;
    createFiles([]);
    cancelTests();
  }

  getChallenge = () => this.props.data.challengeNode.challenge;

  getBlockNameTitle(t: TFunction) {
    const { block, superBlock, title } = this.getChallenge();
    return `${t(`intro:${superBlock}.blocks.${block}.title`)}: ${title}`;
  }

  getVideoUrl = () => this.getChallenge().videoUrl;

  hasPreview() {
    const { challengeType } = this.getChallenge();
    return (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern ||
      challengeType === challengeTypes.multiFileCertProject
    );
  }

  renderInstructionsPanel({ showToolPanel }: { showToolPanel: boolean }) {
    const {
      block,
      challengeType,
      description,
      forumTopicId,
      instructions,
      superBlock,
      title,
      translationPending
    } = this.getChallenge();

    const showBreadCrumbs =
      challengeType !== challengeTypes.multiFileCertProject;
    return (
      <SidePanel
        block={block}
        challengeDescription={
          <ChallengeDescription
            block={block}
            description={description}
            instructions={instructions}
          />
        }
        challengeTitle={
          <ChallengeTitle
            block={block}
            isCompleted={this.props.isChallengeCompleted}
            showBreadCrumbs={showBreadCrumbs}
            superBlock={superBlock}
            translationPending={translationPending}
          >
            {title}
          </ChallengeTitle>
        }
        guideUrl={getGuideUrl({ forumTopicId, title })}
        instructionsPanelRef={this.instructionsPanelRef}
        showToolPanel={showToolPanel}
        videoUrl={this.getVideoUrl()}
      />
    );
  }

  renderEditor() {
    const {
      pageContext: {
        projectPreview: { showProjectPreview }
      },
      challengeFiles,
      data: {
        challengeNode: {
          challenge: {
            fields: { tests },
            usesMultifileEditor
          }
        }
      }
    } = this.props;
    const { description, title } = this.getChallenge();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (
      challengeFiles && (
        <MultifileEditor
          challengeFiles={challengeFiles}
          containerRef={this.containerRef}
          description={description}
          editorRef={this.editorRef}
          initialTests={tests}
          resizeProps={this.resizeProps}
          title={title}
          usesMultifileEditor={usesMultifileEditor}
          showProjectPreview={showProjectPreview}
        />
      )
    );
  }

  renderTestOutput() {
    const { output, t } = this.props;
    return (
      <Output
        defaultOutput={`
/**
* ${t('learn.test-output')}
*/
`}
        output={output}
      />
    );
  }

  renderNotes(notes?: string) {
    return <Notes notes={notes} />;
  }

  renderPreview() {
    return (
      <Preview
        className='full-height'
        disableIframe={this.state.resizing}
        previewMounted={this.props.previewMounted}
      />
    );
  }

  render() {
    const {
      block,
      challengeType,
      fields: { blockName },
      forumTopicId,
      hasEditableBoundaries,
      superBlock,
      certification,
      title,
      usesMultifileEditor,
      notes
    } = this.getChallenge();
    const {
      executeChallenge,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath },
        projectPreview
      },
      challengeFiles,
      t
    } = this.props;

    return (
      <Hotkeys
        editorRef={this.editorRef}
        executeChallenge={executeChallenge}
        innerRef={this.containerRef}
        instructionsPanelRef={this.instructionsPanelRef}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
        usesMultifileEditor={usesMultifileEditor}
      >
        <LearnLayout>
          <Helmet title={`${this.getBlockNameTitle(t)} | freeCodeCamp.org`} />
          <Media maxWidth={MAX_MOBILE_WIDTH}>
            <MobileLayout
              editor={this.renderEditor()}
              guideUrl={getGuideUrl({ forumTopicId, title })}
              hasEditableBoundaries={hasEditableBoundaries}
              hasNotes={!!notes}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: false
              })}
              notes={this.renderNotes(notes)}
              preview={this.renderPreview()}
              testOutput={this.renderTestOutput()}
              usesMultifileEditor={usesMultifileEditor}
              videoUrl={this.getVideoUrl()}
            />
          </Media>
          <Media minWidth={MAX_MOBILE_WIDTH + 1}>
            <DesktopLayout
              block={block}
              challengeFiles={challengeFiles}
              challengeType={challengeType}
              editor={this.renderEditor()}
              hasEditableBoundaries={hasEditableBoundaries}
              hasNotes={!!notes}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: true
              })}
              layoutState={this.state.layout}
              notes={this.renderNotes(notes)}
              preview={this.renderPreview()}
              resizeProps={this.resizeProps}
              superBlock={superBlock}
              testOutput={this.renderTestOutput()}
            />
          </Media>
          <CompletionModal
            block={block}
            blockName={blockName}
            certification={certification}
            superBlock={superBlock}
          />
          <HelpModal />
          <VideoModal videoUrl={this.getVideoUrl()} />
          <ResetModal />
          <ProjectPreviewModal previewConfig={projectPreview} />
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowClassic.displayName = 'ShowClassic';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowClassic));

export const query = graphql`
  query ClassicChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        block
        title
        description
        hasEditableBoundaries
        instructions
        notes
        removeComments
        challengeType
        helpCategory
        videoUrl
        superBlock
        certification
        translationPending
        forumTopicId
        fields {
          blockName
          slug
          tests {
            text
            testString
          }
        }
        required {
          link
          src
        }
        usesMultifileEditor
        challengeFiles {
          fileKey
          ext
          name
          contents
          head
          tail
          editableRegionBoundaries
          history
        }
      }
    }
  }
`;
