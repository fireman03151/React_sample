import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';

import ns from './ns.json';

const unlockWarning = (
  <Tooltip id='tooltip'>
    <h4>
      <strong>Careful!</strong> Only run code you trust
    </h4>
  </Tooltip>
);

const propTypes = {
  executeChallenge: PropTypes.func.isRequired,
  hint: PropTypes.string,
  isCodeLocked: PropTypes.bool,
  makeToast: PropTypes.func.isRequired,
  openBugModal: PropTypes.func.isRequired,
  openHelpModal: PropTypes.func.isRequired,
  unlockUntrustedCode: PropTypes.func.isRequired,
  updateHint: PropTypes.func.isRequired
};

export default class ToolPanel extends PureComponent {
  constructor(...props) {
    super(...props);
    this.makeHint = this.makeHint.bind(this);
    this.makeReset = this.makeReset.bind(this);
  }
  makeHint() {
    this.props.makeToast({
      message: this.props.hint,
      timeout: 4000
    });
    this.props.updateHint();
  }

  makeReset() {
    this.props.makeToast({
      message: 'This will restore your code editor to its original state.',
      action: 'clear my code',
      actionCreator: 'clickOnReset',
      timeout: 4000
    });
  }

  renderHint(hint, makeHint) {
    if (!hint) {
      return null;
    }
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ makeHint }
        >
        Hint
      </Button>
    );
  }

  renderExecute(isCodeLocked, executeChallenge, unlockUntrustedCode) {
    if (isCodeLocked) {
      return (
        <OverlayTrigger
          overlay={ unlockWarning }
          placement='right'
          >
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'
            onClick={ unlockUntrustedCode }
            >
            Code Locked. Unlock?
          </Button>
        </OverlayTrigger>
      );
    }
    return (
      <Button
        block={ true }
        bsStyle='primary'
        className='btn-big'
        onClick={ executeChallenge }
        >
        Run tests (ctrl + enter)
      </Button>
    );
  }

  render() {
    const {
      executeChallenge,
      hint,
      isCodeLocked,
      openBugModal,
      openHelpModal,
      unlockUntrustedCode
    } = this.props;
    return (
      <div>
        { this.renderHint(hint, this.makeHint) }
        {
          this.renderExecute(
            isCodeLocked,
            executeChallenge,
            unlockUntrustedCode
          )
        }
        <div className='button-spacer' />
        <ButtonGroup
          className={`input-group ${ns}-tool-panel-btn-grp`}
          justified={ true }
          >
          <Button
            bsSize='large'
            bsStyle='primary'
            onClick={ this.makeReset }
            >
            Reset
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            onClick={ openHelpModal }
            >
            Help
          </Button>
          <Button
            bsSize='large'
            bsStyle='primary'
            onClick={ openBugModal }
            >
            Bug
          </Button>
        </ButtonGroup>
        <div className='button-spacer' />
      </div>
    );
  }
}

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;
