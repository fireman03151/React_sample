import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Button, ButtonGroup } from 'react-bootstrap';
import {
  FrontEndForm,
  BackEndForm
} from './Forms.jsx';

import { submittingSelector } from './redux';

import {
  submitChallenge,
  openBugModal,

  chatRoomSelector
} from '../../redux';

import {
  signInLoadingSelector,
  challengeSelector
} from '../../../../redux';
import {
  simpleProject,
  frontEndProject
} from '../../../../utils/challengeTypes';

const propTypes = {
  helpChatRoom: PropTypes.string.isRequired,
  isFrontEnd: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  isSimple: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  openBugModal: PropTypes.func.isRequired,
  submitChallenge: PropTypes.func.isRequired
};
const mapDispatchToProps = {
  submitChallenge,
  openBugModal
};
const mapStateToProps = createSelector(
  challengeSelector,
  signInLoadingSelector,
  submittingSelector,
  chatRoomSelector,
  (
    { challengeType = simpleProject },
    showLoading,
    isSubmitting,
    helpChatRoom,
  ) => ({
    isSignedIn: !showLoading,
    isSubmitting,
    helpChatRoom,
    isSimple: challengeType === simpleProject,
    isFrontEnd: challengeType === frontEndProject
  })
);

export class ToolPanel extends PureComponent {
  renderSubmitButton(isSignedIn, submitChallenge) {
    const buttonCopy = isSignedIn ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ submitChallenge }
        >
        { buttonCopy } (ctrl + enter)
      </Button>
    );
  }

  render() {
    const {
      isFrontEnd,
      isSimple,
      isSignedIn,
      isSubmitting,
      helpChatRoom,
      submitChallenge,
      openBugModal
    } = this.props;

    const FormElement = isFrontEnd ? FrontEndForm : BackEndForm;
    return (
      <div>
        {
          isSimple ?
            this.renderSubmitButton(isSignedIn, submitChallenge) :
            <FormElement isSubmitting={ isSubmitting }/>
        }
        <div className='button-spacer' />
        <ButtonGroup justified={ true }>
          <Button
            bsStyle='primary'
            className='btn-primary-ghost btn-big'
            componentClass='a'
            href={ `https://gitter.im/freecodecamp/${helpChatRoom}` }
            target='_blank'
            >
            Help
          </Button>
          <Button
            bsStyle='primary'
            className='btn-primary-ghost btn-big'
            componentClass='div'
            onClick={ openBugModal }
            >
            Bug
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

ToolPanel.displayName = 'ProjectToolPanel';
ToolPanel.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolPanel);
