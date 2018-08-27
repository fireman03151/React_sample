import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { FullWidthRow } from '../../../helperComponents';
import { Form } from '../formHelpers';
import JSAlgoAndDSForm from './JSAlgoAndDSForm.jsx';
import SectionHeader from './SectionHeader.jsx';
import { projectsSelector } from '../../../entities';
import { claimCert, updateUserBackend } from '../redux';
import {
  userSelector,
  hardGoTo,
  createErrorObservable
} from '../../../redux';
import {
  buildUserProjectsMap,
  jsProjectSuperBlock
} from '../utils/buildUserProjectsMap';

const mapStateToProps = createSelector(
  userSelector,
  projectsSelector,
  (
    {
      completedChallenges,
      isRespWebDesignCert,
      is2018DataVisCert,
      isFrontEndLibsCert,
      isJsAlgoDataStructCert,
      isApisMicroservicesCert,
      isInfosecQaCert,
      isFrontEndCert,
      isBackEndCert,
      isDataVisCert,
      isFullStackCert,
      username
    },
    projects
  ) => {
    let modernProjects = projects.filter(p => !p.superBlock.includes('legacy'));
    modernProjects.push(modernProjects.shift());

    return {
      allProjects: projects,
      legacyProjects: projects.filter(p => p.superBlock.includes('legacy')),
      modernProjects: modernProjects,
      userProjects: projects
        .map(block => buildUserProjectsMap(block, completedChallenges))
        .reduce((projects, current) => ({
          ...projects,
          ...current
        }), {}),
      blockNameIsCertMap: {
        'Responsive Web Design Projects': isRespWebDesignCert,
        /* eslint-disable max-len */
        'JavaScript Algorithms and Data Structures Projects': isJsAlgoDataStructCert,
        /* eslint-enable max-len */
        'Front End Libraries Projects': isFrontEndLibsCert,
        'Data Visualization Projects': is2018DataVisCert,
        'APIs and Microservices Projects': isApisMicroservicesCert,
        'Information Security and Quality Assurance Projects': isInfosecQaCert,
        'Full Stack Certification': isFullStackCert,
        'Legacy Front End Projects': isFrontEndCert,
        'Legacy Back End Projects': isBackEndCert,
        'Legacy Data Visualization Projects': isDataVisCert
      },
      username
    };
  }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    claimCert,
    createError: createErrorObservable,
    hardGoTo,
    updateUserBackend
  }, dispatch);
}

const projectsTypes = PropTypes.arrayOf(
  PropTypes.shape({
    projectBlockName: PropTypes.string,
    challenges: PropTypes.arrayOf(
      PropTypes.shape({
        dashedName: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string
      })
    )
  }),
);

const propTypes = {
  allProjects: projectsTypes,
  blockNameIsCertMap: PropTypes.objectOf(PropTypes.bool),
  claimCert: PropTypes.func.isRequired,
  createError: PropTypes.func.isRequired,
  hardGoTo: PropTypes.func.isRequired,
  legacyProjects: projectsTypes,
  modernProjects: projectsTypes,
  superBlock: PropTypes.string,
  updateUserBackend: PropTypes.func.isRequired,
  userProjects: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        // this is really messy, it should be addressed
        // in completedChallenges migration to unify to one type
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.object
      ]
    )
  ),
  username: PropTypes.string
};

class CertificationSettings extends PureComponent {
  constructor(props) {
    super(props);
    this.buildProjectForms = this.buildProjectForms.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildProjectForms({
    projectBlockName,
    challenges,
    superBlock
  }) {
    const {
      blockNameIsCertMap,
      claimCert,
      hardGoTo,
      userProjects,
      username
    } = this.props;
    const isCertClaimed = blockNameIsCertMap[projectBlockName];
    const challengeTitles = challenges
      .map(challenge => challenge.title || 'Unknown Challenge');
    if (superBlock === jsProjectSuperBlock) {
      return (
        <JSAlgoAndDSForm
          challenges={ challengeTitles }
          claimCert={ claimCert }
          hardGoTo={ hardGoTo }
          isCertClaimed={ isCertClaimed }
          jsProjects={ userProjects[superBlock] }
          key={ superBlock }
          projectBlockName={ projectBlockName }
          superBlock={ superBlock }
          username={ username }
        />
      );
    }
    const options = challengeTitles
      .reduce((options, current) => {
        options.types[current] = 'url';
        return options;
      }, { types: {} });

    options.types.id = 'hidden';
    options.placeholder = false;

    const userValues = userProjects[superBlock] || {};

    if (!userValues.id) {
      userValues.id = superBlock;
    }

    const initialValues = challengeTitles
      .reduce((accu, current) => ({
        ...accu,
        [current]: ''
      }), {});

    const completedProjects = _.values(userValues)
      .filter(Boolean)
      .filter(_.isString)
      // minus 1 to account for the id
      .length - 1;

    const fullForm = completedProjects === challengeTitles.length;

    let isFullStack = superBlock === 'full-stack';
    let isFullStackClaimable = false;
    let description = '';
    if (isFullStack) {
      isFullStackClaimable = Object.keys(blockNameIsCertMap).every(function(e) {
        if (e.indexOf('Full Stack') !== -1 || e.indexOf('Legacy') !== -1) {
          return true;
        }
        return blockNameIsCertMap[e];
      });

      description = (<div>
        Once you've earned the following freeCodeCamp certifications,
         you'll be able to claim The Full Stack Developer Certification:
        <ul>
          <li>Responsive Web Design</li>
          <li>Algorithms and Data Structures</li>
          <li>Front End Libraries</li>
          <li>Data Visualization</li>
          <li>APIs and Microservices</li>
          <li>Information Security and Quality Assurance</li>
        </ul>
      </div>);
    }

    return (
      <FullWidthRow key={superBlock}>
        <h3 className='project-heading'>{ projectBlockName }</h3>
        {description}
        <Form
          buttonText={ fullForm || isFullStack
            ? 'Claim Certification' : 'Save Progress' }
          enableSubmit={ isFullStack ? isFullStackClaimable : fullForm }
          formFields={ challengeTitles.concat([ 'id' ]) }
          hideButton={isCertClaimed}
          id={ superBlock }
          initialValues={{
            ...initialValues,
            ...userValues
          }}
          options={ options }
          submit={ this.handleSubmit }
        />
        {
          isCertClaimed ?
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              href={ `/certification/${username}/${superBlock}`}
              target='_blank'
              >
              Show Certification
            </Button> :
            null
        }
        <hr />
      </FullWidthRow>
    );
  }

  handleSubmit(values) {
    const { id } = values;
    const { allProjects } = this.props;
    let project = _.find(allProjects, { superBlock: id });
    if (!project) {
      // the submitted projects do not belong to current/legacy certifications
      return this.props.createError(
        new Error(
          'Submitted projects do not belong to either current or ' +
          'legacy certifications'
        )
      );
    }
    const valuesSaved = _.values(this.props.userProjects[id])
      .filter(Boolean)
      .filter(_.isString);

    // minus 1 due to the form id being in values
    const isProjectSectionComplete =
      (valuesSaved.length - 1) === project.challenges.length;

    if (isProjectSectionComplete) {
      return this.props.claimCert(id);
    }
    const valuesToIds = project.challenges
      .reduce((valuesMap, current) => {
        const solution = values[current.title];
        if (solution) {
          return {
            ...valuesMap,
            [current.id]: solution
          };
        }
        return valuesMap;
      }, {});
    return this.props.updateUserBackend({
      projects: {
        [id]: valuesToIds
      }
    });
  }

  render() {
    const {
      modernProjects,
      legacyProjects
    } = this.props;
    if (!modernProjects.length) {
      return null;
    }
    return (
      <div>
        <SectionHeader>
          Certification Settings
        </SectionHeader>
        <FullWidthRow>
        <p>
          Add links to the live demos of your projects as you finish them.
          Then, once you have added all 5 projects required for a certification,
          you can claim it.
        </p>
        </FullWidthRow>
        {
          modernProjects.map(this.buildProjectForms)
        }
        <SectionHeader>
          Legacy Certification Settings
        </SectionHeader>
        {
          legacyProjects.map(this.buildProjectForms)
        }
      </div>
    );
  }
}

CertificationSettings.displayName = 'CertificationSettings';
CertificationSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificationSettings);
