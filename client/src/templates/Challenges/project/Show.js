import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { randomCompliment } from '../utils/get-words';
import { ChallengeNode } from '../../../redux/propTypes';
import {
  updateChallengeMeta,
  createFiles,
  updateSuccessMessage,
  openModal,
  updateProjectFormValues
} from '../redux';
import { frontEndProject } from '../../../../utils/challengeTypes';
import { createGuideUrl } from '../utils';

import LearnLayout from '../../../components/layouts/Learn';
import Spacer from '../../../components/helpers/Spacer';
import ProjectForm from './ProjectForm';
import SidePanel from './Side-Panel';
import ToolPanel from './Tool-Panel';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';

import './project.css';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateChallengeMeta,
      createFiles,
      updateProjectFormValues,
      updateSuccessMessage,
      openCompletionModal: () => openModal('completion')
    },
    dispatch
  );

const propTypes = {
  createFiles: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  openCompletionModal: PropTypes.func.isRequired,
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.object
  }),
  updateChallengeMeta: PropTypes.func.isRequired,
  updateProjectFormValues: PropTypes.func.isRequired,
  updateSuccessMessage: PropTypes.func.isRequired
};

export class Project extends Component {
  componentDidMount() {
    const {
      createFiles,
      data: { challengeNode: { title, challengeType } },
      pageContext: { challengeMeta },
      updateChallengeMeta,
      updateSuccessMessage
    } = this.props;
    createFiles({});
    updateSuccessMessage(randomCompliment());
    return updateChallengeMeta({ ...challengeMeta, title, challengeType });
  }

  componentDidUpdate(prevProps) {
    const { data: { challengeNode: { title: prevTitle } } } = prevProps;
    const {
      createFiles,
      data: { challengeNode: { title: currentTitle, challengeType } },
      pageContext: { challengeMeta },
      updateChallengeMeta,
      updateSuccessMessage
    } = this.props;
    updateSuccessMessage(randomCompliment());
    if (prevTitle !== currentTitle) {
      createFiles({});
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType
      });
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          challengeType,
          fields: { blockName, slug },
          title,
          description,
          guideUrl
        }
      },
      openCompletionModal,
      updateProjectFormValues
    } = this.props;
    const isFrontEnd = challengeType === frontEndProject;

    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <LearnLayout>
        <Helmet title={`${blockNameTitle} | Learn freeCodeCamp}`} />
        <div className='project-show-wrapper'>
          <SidePanel
            className='full-height'
            description={description}
            guideUrl={guideUrl}
            title={blockNameTitle}
          />
          <ProjectForm
            isFrontEnd={isFrontEnd}
            openModal={openCompletionModal}
            updateProjectForm={updateProjectFormValues}
          />
          <ToolPanel guideUrl={createGuideUrl(slug)} />
          <Spacer />
        </div>
        <CompletionModal />
        <HelpModal />
      </LearnLayout>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Project);

export const query = graphql`
  query ProjectChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      description
      challengeType
      fields {
        blockName
        slug
      }
    }
  }
`;
