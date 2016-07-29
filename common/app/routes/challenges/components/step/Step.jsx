import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import ReactTransitionReplace from 'react-css-transition-replace';

import { submitChallenge, goToStep } from '../../redux/actions';
import { challengeSelector } from '../../redux/selectors';
import { Button, Col, Image, Row } from 'react-bootstrap';

const transitionTimeout = 1000;
const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.currentStep,
  state => state.challengesApp.previousStep,
  ({ challenge }, currentStep, previousStep) => ({
    challenge,
    currentStep,
    previousStep,
    numOfSteps:
      Array.isArray(challenge.description) ?
      challenge.description.length :
      0,
    isGoingForward: currentStep > previousStep
  })
);

const dispatchActions = {
  goToStep,
  submitChallenge
};

export class StepChallenge extends PureComponent {
  constructor(...args) {
    super(...args);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  static displayName = 'StepChallenge';
  static defaultProps = {
    currentStep: 0,
    previousStep: -1
  };

  static propTypes = {
    challenge: PropTypes.object,
    currentStep: PropTypes.number,
    previousStep: PropTypes.number,
    isGoingForward: PropTypes.bool,
    goToStep: PropTypes.func,
    submitChallenge: PropTypes.func,
    numOfSteps: PropTypes.number
  };

  handleNextClick() {
    const { numOfSteps, currentStep, submitChallenge, goToStep } = this.props;
    const isLastStep = currentStep + 1 >= numOfSteps;
    if (isLastStep) {
      return submitChallenge();
    }
    return goToStep(currentStep + 1);
  }

  handleBackClick() {
    const { currentStep, goToStep } = this.props;
    goToStep(currentStep - 1);
  }

  renderActionButton(action) {
    if (!action) {
      return null;
    }
    return (
      <div>
        <Button
          block={ true }
          bsSize='large'
          bsStyle='primary'
          href={ action }
          target='_blank'
          >
          Open link in new tab (this unlocks the next step)
        </Button>
        <div className='spacer' />
      </div>
    );
  }

  renderBackButton(index) {
    if (index === 0) {
      return (
        <Col
          className='hidden-xs'
          md={ 4 }
          >
          { ' ' }
        </Col>
      );
    }
    return (
      <Button
        bsSize='large'
        bsStyle='primary'
        className='col-sm-4 col-xs-12'
        onClick={ this.handleBackClick }
        >
        Go to my previous step
      </Button>
    );
  }

  renderNextButton(hasAction, index, numOfSteps, isCompleted) {
    const isLastStep = index + 1 >= numOfSteps;
    const btnClass = classnames({
      'col-sm-4 col-xs-12': true,
      disabled: hasAction && !isCompleted
    });
    return (
      <Button
        bsSize='large'
        bsStyle='primary'
        className={ btnClass }
        onClick={ this.handleNextClick }
        >
        { isLastStep ? 'Finish challenge' : 'Go to my next step'}
      </Button>
    );
  }

  renderStep(step, currentStep, numOfSteps) {
    if (!Array.isArray(step)) {
      return null;
    }
    const [imgUrl, imgAlt, info, action] = step;
    return (
      <div
        className=''
        key={ imgUrl }
        >
        <a href={ imgUrl }>
          <Image
            alt={ imgAlt }
            responsive={ true }
            src={ imgUrl }
          />
        </a>
        <Row>
          <div className='spacer' />
          <Col
            md={ 8 }
            mdOffset={ 2 }
            sm={ 10 }
            smOffset={ 1 }
            xs={ 12 }
            >
            <p
              className='challenge-step-description'
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </Col>
        </Row>
        <div className='spacer' />
        <div className='challenge-button-block'>
          { this.renderActionButton(action) }
          { this.renderBackButton(currentStep) }
          <Col
            className='challenge-step-counter large-p text-center'
            sm={ 4 }
            xs={ 12 }
            >
            ( { currentStep + 1 } / { numOfSteps })
          </Col>
          {
            this.renderNextButton(
              !!action,
              currentStep,
              numOfSteps,
              true
            )
          }
        </div>
        <div className='clearfix' />
      </div>
    );
  }

  renderImages(steps) {
    // will preload all the image
    if (!Array.isArray(steps)) {
      return null;
    }
    return steps.map(([imgUrl, imgAlt]) => (
      <div key={ imgUrl }>
        <Image
          alt={ imgAlt }
          responsive={ true }
          src={ imgUrl }
        />
      </div>
    ));
  }

  render() {
    const {
      numOfSteps,
      challenge,
      currentStep,
      isGoingForward
    } = this.props;
    const step = challenge.description[currentStep];
    const transitionName = 'challenge-step-' +
      (isGoingForward ? 'forward' : 'backward');

    return (
      <Col
        md={ 8 }
        mdOffset={ 2 }
        >
        <ReactTransitionReplace
          transitionEnterTimeout={ transitionTimeout }
          transitionLeaveTimeout={ transitionTimeout }
          transitionName={ transitionName }
          >
          { this.renderStep(step, currentStep, numOfSteps) }
        </ReactTransitionReplace>
        <div className='hidden'>
          { this.renderImages(challenge.description) }
        </div>
        <div className='spacer' />
      </Col>
    );
  }
}

export default connect(mapStateToProps, dispatchActions)(StepChallenge);
