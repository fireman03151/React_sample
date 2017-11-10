import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  Button,
  Col,
  Row
} from 'react-bootstrap';

import ChallengeTitle from '../../Challenge-Title.jsx';
import ChallengeDescription from '../../Challenge-Description.jsx';
import SolutionInput from '../../Solution-Input.jsx';
import TestSuite from '../../Test-Suite.jsx';
import Output from '../../Output.jsx';
import {
  submitChallenge,
  executeChallenge,
  testsSelector,
  outputSelector
} from '../../redux';
import { descriptionRegex } from '../../utils.js';

import {
  createFormValidator,
  isValidURL,
  makeRequired
} from '../../../../utils/form.js';
import { challengeSelector } from '../../../../redux';

// provided by redux form
const reduxFormPropTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  executeChallenge: PropTypes.func.isRequired,
  id: PropTypes.string,
  output: PropTypes.string,
  submitChallenge: PropTypes.func.isRequired,
  tests: PropTypes.array,
  title: PropTypes.string,
  ...reduxFormPropTypes
};

const fields = [ 'solution' ];

const fieldValidators = {
  solution: makeRequired(isValidURL)
};

const mapStateToProps = createSelector(
  challengeSelector,
  outputSelector,
  testsSelector,
  (
    {
      id,
      title,
      description
    },
    output,
    tests
  ) => ({
    id,
    title,
    tests,
    description,
    output
  })
);

const mapDispatchToActions = {
  executeChallenge,
  submitChallenge
};

export class BackEnd extends PureComponent {
  renderDescription(description) {
    if (!Array.isArray(description)) {
      return null;
    }
    return description.map((line, index) => {
      if (descriptionRegex.test(line)) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: line }}
            key={ line.slice(-6) + index }
          />
        );
      }
      return (
        <p
          className='wrappable'
          dangerouslySetInnerHTML= {{ __html: line }}
          key={ line.slice(-6) + index }
        />
      );
    });
  }

  render() {
    const {
      title,
      description,
      tests,
      output,
      // provided by redux-form
      fields: { solution },
      submitting,
      handleSubmit,
      executeChallenge
    } = this.props;

    const buttonCopy = submitting ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";
    return (
      <Row>
        <Col
          xs={ 6 }
          xsOffset={ 3 }
          >
          <Row>
            <ChallengeTitle>
              { title }
            </ChallengeTitle>
            <ChallengeDescription>
              { this.renderDescription(description) }
            </ChallengeDescription>
          </Row>
          <Row>
            <form
              name='BackEndChallenge'
              onSubmit={ handleSubmit(executeChallenge) }
              >
              <SolutionInput
                placeholder='https://your-app.com'
                solution={ solution }
              />
              <Button
                block={ true }
                bsStyle='primary'
                className='btn-big'
                onClick={ submitting ? null : null }
                type={ submitting ? null : 'submit' }
                >
                { buttonCopy } (ctrl + enter)
              </Button>
            </form>
          </Row>
          <Row>
            <br/>
            <Output
              defaultOutput={
`/**
  * Test output will go here
  */`
              }
              output={ output }
            />
          </Row>
          <Row>
            <TestSuite tests={ tests } />
          </Row>
        </Col>
      </Row>
    );
  }
}

BackEnd.displayName = 'BackEnd';
BackEnd.propTypes = propTypes;

export default reduxForm(
  {
    form: 'BackEndChallenge',
    fields,
    validate: createFormValidator(fieldValidators)
  },
  mapStateToProps,
  mapDispatchToActions
)(BackEnd);
