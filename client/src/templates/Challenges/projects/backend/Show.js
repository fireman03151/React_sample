import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import {
  executeChallenge,
  challengeMounted,
  challengeTestsSelector,
  consoleOutputSelector,
  initConsole,
  initTests,
  updateBackendFormValues,
  updateChallengeMeta,
  updateProjectFormValues,
  backendNS
} from '../../redux';
import { getGuideUrl } from '../../utils';

import LearnLayout from '../../../../components/layouts/Learn';
import ChallengeTitle from '../../components/Challenge-Title';
import ChallengeDescription from '../../components/Challenge-Description';
import TestSuite from '../../components/Test-Suite';
import Output from '../../components/Output';
import CompletionModal from '../../components/CompletionModal';
import HelpModal from '../../components/HelpModal';
import ProjectToolPanel from '../Tool-Panel';
import ProjectForm from '../ProjectForm';
import { Form } from '../../../../components/formHelpers';
import Spacer from '../../../../components/helpers/Spacer';
import { ChallengeNode } from '../../../../redux/propTypes';
import { isSignedInSelector } from '../../../../redux';
import Hotkeys from '../../components/Hotkeys';

import { backend } from '../../../../../utils/challengeTypes';

import '../../components/test-frame.css';

const propTypes = {
  challengeMounted: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  description: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  forumTopicId: PropTypes.number,
  id: PropTypes.string,
  initConsole: PropTypes.func.isRequired,
  initTests: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
  output: PropTypes.string,
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.object
  }),
  tests: PropTypes.array,
  title: PropTypes.string,
  updateBackendFormValues: PropTypes.func.isRequired,
  updateChallengeMeta: PropTypes.func.isRequired,
  updateProjectFormValues: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  consoleOutputSelector,
  challengeTestsSelector,
  isSignedInSelector,
  (output, tests, isSignedIn) => ({
    tests,
    output,
    isSignedIn
  })
);

const mapDispatchToActions = {
  challengeMounted,
  executeChallenge,
  initConsole,
  initTests,
  updateBackendFormValues,
  updateChallengeMeta,
  updateProjectFormValues
};

const formFields = ['solution'];
const options = {
  required: ['solution'],
  types: {
    solution: 'url'
  },
  placeholders: {
    solution: 'Link to solution, ex: https://codepen.io/camperbot/full/oNvPqqo'
  }
};

export class BackEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.initializeComponent();
    window.addEventListener('resize', this.updateDimensions);
    this._container.focus();
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate(prevProps) {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
      data: {
        challengeNode: { title: currentTitle }
      }
    } = this.props;
    if (prevTitle !== currentTitle) {
      this.initializeComponent();
    }
  }

  initializeComponent() {
    const {
      challengeMounted,
      initConsole,
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: {
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    initConsole('');
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, challengeType });
    challengeMounted(challengeMeta.id);
  }

  handleSubmit(values) {
    const { updateBackendFormValues, executeChallenge } = this.props;
    updateBackendFormValues(values);
    executeChallenge();
  }

  render() {
    const {
      data: {
        challengeNode: {
          fields: { blockName },
          challengeType,
          forumTopicId,
          title,
          description,
          instructions
        }
      },
      output,
      pageContext: {
        challengeMeta: { introPath, nextChallengePath, prevChallengePath }
      },
      tests,
      isSignedIn,
      executeChallenge,
      updateProjectFormValues
    } = this.props;

    const buttonCopy = isSignedIn
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";
    const blockNameTitle = `${blockName} - ${title}`;

    return (
      <Hotkeys
        innerRef={c => (this._container = c)}
        introPath={introPath}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet title={`${blockNameTitle} | Learn | freeCodeCamp.org`} />
          <Grid>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer />
                <ChallengeTitle>{blockNameTitle}</ChallengeTitle>
                <ChallengeDescription
                  description={description}
                  instructions={instructions}
                />
                {challengeType === backend ? (
                  <Form
                    buttonText={`${buttonCopy}`}
                    formFields={formFields}
                    id={backendNS}
                    options={options}
                    submit={this.handleSubmit}
                  />
                ) : (
                  <ProjectForm
                    isFrontEnd={false}
                    onSubmit={executeChallenge}
                    updateProjectForm={updateProjectFormValues}
                  />
                )}
                <ProjectToolPanel
                  guideUrl={getGuideUrl({ forumTopicId, title })}
                />
                <br />
                <Output
                  defaultOutput={`/**
*
* Test output will go here
*
*
*/`}
                  dimensions={this.state}
                  height={150}
                  output={output}
                />
                <TestSuite tests={tests} />
                <Spacer />
              </Col>
              <CompletionModal />
              <HelpModal />
            </Row>
          </Grid>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

BackEnd.displayName = 'BackEnd';
BackEnd.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(BackEnd);

export const query = graphql`
  query BackendChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      forumTopicId
      title
      description
      instructions
      challengeType
      fields {
        blockName
        slug
        tests {
          text
          testString
        }
      }
    }
  }
`;
