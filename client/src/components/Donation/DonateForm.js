import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  Button,
  Tabs,
  Tab,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton
} from '@freecodecamp/react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';

import {
  amountsConfig,
  durationsConfig,
  defaultAmount,
  defaultStateConfig
} from '../../../../config/donation-settings';
import { apiLocation } from '../../../../config/env.json';
import Spacer from '../helpers/Spacer';
import DonateFormChildViewForHOC from './DonateFormChildViewForHOC';
import {
  isSignedInSelector,
  signInLoadingSelector,
  hardGoTo as navigate
} from '../../redux';

import './Donation.css';

const numToCommas = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const propTypes = {
  handleProcessing: PropTypes.func,
  isDonating: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  })
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  (showLoading, isSignedIn) => ({
    isSignedIn,
    showLoading
  })
);

const mapDispatchToProps = {
  navigate
};

const createOnClick = navigate => e => {
  e.preventDefault();
  return navigate(`${apiLocation}/signin?returnTo=donate`);
};

class DonateForm extends Component {
  constructor(...args) {
    super(...args);

    this.durations = durationsConfig;
    this.amounts = amountsConfig;

    this.state = {
      ...defaultStateConfig,
      processing: false
    };

    this.getActiveDonationAmount = this.getActiveDonationAmount.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.handleSelectDuration = this.handleSelectDuration.bind(this);
    this.handleSelectPaymentType = this.handleSelectPaymentType.bind(this);
    this.hideAmountOptionsCB = this.hideAmountOptionsCB.bind(this);
  }

  getActiveDonationAmount(durationSelected, amountSelected) {
    return this.amounts[durationSelected].includes(amountSelected)
      ? amountSelected
      : defaultAmount[durationSelected] || this.amounts[durationSelected][0];
  }

  convertToTimeContributed(amount) {
    return `${numToCommas((amount / 100) * 50)} hours`;
  }

  getFormatedAmountLabel(amount) {
    return `$${numToCommas(amount / 100)}`;
  }

  getDonationButtonLabel() {
    const { donationAmount, donationDuration } = this.state;
    let donationBtnLabel = `Confirm your donation`;
    if (donationDuration === 'onetime') {
      donationBtnLabel = `Confirm your one-time donation of ${this.getFormatedAmountLabel(
        donationAmount
      )}`;
    } else {
      donationBtnLabel = `Confirm your donation of ${this.getFormatedAmountLabel(
        donationAmount
      )} ${donationDuration === 'month' ? 'per month' : 'per year'}`;
    }
    return donationBtnLabel;
  }

  handleSelectDuration(donationDuration) {
    const donationAmount = this.getActiveDonationAmount(donationDuration, 0);
    this.setState({ donationDuration, donationAmount });
  }

  handleSelectAmount(donationAmount) {
    this.setState({ donationAmount });
  }

  handleSelectPaymentType(e) {
    this.setState({
      paymentType: e.currentTarget.value
    });
  }

  renderAmountButtons(duration) {
    return this.amounts[duration].map(amount => (
      <ToggleButton
        className='amount-value'
        id={`${this.durations[duration]}-donation-${amount}`}
        key={`${this.durations[duration]}-donation-${amount}`}
        value={amount}
      >
        {this.getFormatedAmountLabel(amount)}
      </ToggleButton>
    ));
  }

  renderDurationAmountOptions() {
    const { donationAmount, donationDuration, processing } = this.state;
    return !processing ? (
      <div>
        <h3>Duration and amount:</h3>
        <Tabs
          activeKey={donationDuration}
          animation={false}
          bsStyle='pills'
          className='donate-tabs'
          id='Duration'
          onSelect={this.handleSelectDuration}
        >
          {Object.keys(this.durations).map(duration => (
            <Tab
              eventKey={duration}
              key={duration}
              title={this.durations[duration]}
            >
              <Spacer />
              <div>
                <ToggleButtonGroup
                  animation={`false`}
                  className='amount-values'
                  name='amounts'
                  onChange={this.handleSelectAmount}
                  type='radio'
                  value={this.getActiveDonationAmount(duration, donationAmount)}
                >
                  {this.renderAmountButtons(duration)}
                </ToggleButtonGroup>
                <Spacer />
                <p className='donation-description'>
                  {`Your `}
                  {this.getFormatedAmountLabel(donationAmount)}
                  {` donation will provide `}
                  {this.convertToTimeContributed(donationAmount)}
                  {` of learning to people around the world`}
                  {duration === 'onetime' ? `.` : ` each ${duration}.`}
                </p>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    ) : null;
  }

  hideAmountOptionsCB(hide) {
    this.setState({ processing: hide });
  }

  renderDonationOptions() {
    const { stripe, handleProcessing } = this.props;
    const { donationAmount, donationDuration, paymentType } = this.state;
    return (
      <div>
        {paymentType === 'Card' ? (
          <StripeProvider stripe={stripe}>
            <Elements>
              <DonateFormChildViewForHOC
                defaultTheme='default'
                donationAmount={donationAmount}
                donationDuration={donationDuration}
                getDonationButtonLabel={this.getDonationButtonLabel}
                handleProcessing={handleProcessing}
                hideAmountOptionsCB={this.hideAmountOptionsCB}
              />
            </Elements>
          </StripeProvider>
        ) : (
          <p>
            PayPal is currently unavailable. Please use a Credit/Debit card
            instead.
          </p>
        )}
      </div>
    );
  }

  render() {
    const { isSignedIn, navigate, showLoading } = this.props;

    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderDurationAmountOptions()}
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          {!showLoading && !isSignedIn ? (
            <Button
              bsStyle='default'
              className='btn btn-block'
              onClick={createOnClick(navigate)}
            >
              Become a supporter
            </Button>
          ) : (
            this.renderDonationOptions()
          )}
        </Col>
      </Row>
    );
  }
}

DonateForm.displayName = 'DonateForm';
DonateForm.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateForm);
