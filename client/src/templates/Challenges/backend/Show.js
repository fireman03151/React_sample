import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { graphql } from 'gatsby';

import {
  executeChallenge,
  challengeMounted,
  challengeTestsSelector,
  consoleOutputSelector,
  initTests,
  updateBackendFormValues,
  updateChallengeMeta,
  updateProjectFormValues,
  backendNS
} from '../redux';
import { createGuideUrl } from '../utils';

import LearnLayout from '../../../components/layouts/Learn';
import ChallengeTitle from '../components/Challenge-Title';
import ChallengeDescription from '../components/Challenge-Description';
import TestSuite from '../components/Test-Suite';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import ProjectToolPanel from '../project/Tool-Panel';
import ProjectForm from '../project/ProjectForm';
import { Form } from '../../../components/formHelpers';
import Spacer from '../../../components/helpers/Spacer';
import { ChallengeNode } from '../../../redux/propTypes';
import { isSignedInSelector } from '../../../redux';

import { backend } from '../../../../utils/challengeTypes';

import '../components/test-frame.css';

const propTypes = {
  challengeMounted: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  description: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  id: PropTypes.string,
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
    const {
      challengeMounted,
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
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, challengeType });
    challengeMounted(challengeMeta.id);
    window.addEventListener('resize', this.updateDimensions);
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
      challengeMounted,
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: {
          title: currentTitle,
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    if (prevTitle !== currentTitle) {
      initTests(tests);
      updateChallengeMeta({ ...challengeMeta, challengeType });
      challengeMounted(challengeMeta.id);
    }
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
          fields: { blockName, slug },
          challengeType,
          title,
          description,
          instructions
        }
      },
      output,
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
      <LearnLayout>
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
              <ProjectToolPanel guideUrl={createGuideUrl(slug)} />
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
