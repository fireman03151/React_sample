// Package Utilities
import { Button } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row } from '@freecodecamp/ui';

// Local Utilities
import Loader from '../../../components/helpers/loader';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import Hotkeys from '../components/hotkeys';
import VideoPlayer from '../components/video-player';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';

// Styles
import '../odin/show.css';
import '../video.css';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  (isChallengeCompleted: boolean) => ({
    isChallengeCompleted
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted,
      openCompletionModal: () => openModal('completion'),
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

// Types
interface ShowDialogueProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  openHelpModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

interface ShowDialogueState {
  subtitles: string;
  downloadURL: string | null;
  assignmentsCompleted: number;
  allAssignmentsCompleted: boolean;
  videoIsLoaded: boolean;
}

// Component
class ShowDialogue extends Component<ShowDialogueProps, ShowDialogueState> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  constructor(props: ShowDialogueProps) {
    super(props);
    this.state = {
      subtitles: '',
      downloadURL: null,
      assignmentsCompleted: 0,
      allAssignmentsCompleted: false,
      videoIsLoaded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    this.container.current?.focus();
  }

  componentDidUpdate(prevProps: ShowDialogueProps): void {
    const {
      data: {
        challengeNode: {
          challenge: { title: prevTitle }
        }
      }
    } = prevProps;
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title: currentTitle, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType,
        helpCategory
      });
      challengeMounted(challengeMeta.id);
    }
  }

  handleSubmit() {
    const { openCompletionModal } = this.props;
    if (this.state.allAssignmentsCompleted) {
      openCompletionModal();
    }
  }

  handleAssignmentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    totalAssignments: number
  ): void => {
    const assignmentsCompleted = event.target.checked
      ? this.state.assignmentsCompleted + 1
      : this.state.assignmentsCompleted - 1;
    const allAssignmentsCompleted = totalAssignments === assignmentsCompleted;

    this.setState({
      assignmentsCompleted,
      allAssignmentsCompleted
    });
  };

  onVideoLoad = () => {
    this.setState({
      videoIsLoaded: true
    });
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            description,
            superBlock,
            block,
            videoId,
            fields: { blockName },
            assignments
          }
        }
      },
      openHelpModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    return (
      <Hotkeys
        executeChallenge={() => this.handleSubmit()}
        containerRef={this.container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Container>
            <Row>
              {videoId && (
                <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
                  <Spacer size='medium' />
                  <div className='video-wrapper'>
                    {!this.state.videoIsLoaded ? (
                      <div className='video-placeholder-loader'>
                        <Loader />
                      </div>
                    ) : null}
                    <VideoPlayer
                      onVideoLoad={this.onVideoLoad}
                      title={title}
                      videoId={videoId}
                      videoIsLoaded={this.state.videoIsLoaded}
                    />
                  </div>
                </Col>
              )}
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer size='medium' />
                <h2>{title}</h2>
                <PrismFormatted className={'line-numbers'} text={description} />
                <Spacer size='medium' />
                <ObserveKeys>
                  <h2>{t('learn.assignments')}</h2>
                  <div className='video-quiz-options'>
                    {assignments.map((assignment, index) => (
                      <label className='video-quiz-option-label' key={index}>
                        <input
                          name='assignment'
                          type='checkbox'
                          onChange={event =>
                            this.handleAssignmentChange(
                              event,
                              assignments.length
                            )
                          }
                        />

                        <PrismFormatted
                          className={'video-quiz-option'}
                          text={assignment}
                        />
                        <Spacer size='medium' />
                      </label>
                    ))}
                  </div>
                  <Spacer size='medium' />
                </ObserveKeys>

                <div
                  style={{
                    textAlign: 'center'
                  }}
                >
                  {!this.state.allAssignmentsCompleted &&
                    assignments.length > 0 && (
                      <>
                        <br />
                        <span>{t('learn.assignment-not-complete')}</span>
                      </>
                    )}
                </div>
                <Spacer size='medium' />
                <Button
                  block={true}
                  bsSize='large'
                  bsStyle='primary'
                  disabled={!this.state.allAssignmentsCompleted}
                  onClick={() => this.handleSubmit()}
                >
                  {t('buttons.submit')}
                </Button>
                <Button
                  block={true}
                  bsSize='large'
                  bsStyle='primary'
                  className='btn-invert'
                  onClick={openHelpModal}
                >
                  {t('buttons.ask-for-help')}
                </Button>
                <Spacer size='large' />
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowDialogue.displayName = 'ShowDialogue';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowDialogue));

export const query = graphql`
  query Dialogue($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        videoId
        title
        description
        challengeType
        helpCategory
        superBlock
        block
        fields {
          slug
          blockName
        }
        translationPending
        assignments
      }
    }
  }
`;
