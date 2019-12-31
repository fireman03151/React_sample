/* eslint-disable react/sort-prop-types */
/* eslint-disable react/jsx-sort-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Button
} from '@freecodecamp/react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Spacer } from '../helpers';

// eslint-disable-next-line max-len
import DonateFormChildViewForHOC from '../Donation/DonateFormChildViewForHOC';

import './YearEndGift.css';
import '../Donation/Donation.css';
import { stripePublicKey } from '../../../../config/env.json';
import { stripeScriptLoader } from '../../utils/scriptLoaders';
import DonateWithPayPal from '../../assets/icons/DonateWithPayPal';

const numToCommas = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const propTypes = {
  handleProcessing: PropTypes.func,
  defaultTheme: PropTypes.string,
  isDonating: PropTypes.bool,
  executeGA: PropTypes.func,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  })
};

class YearEndDonationForm extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      donationAmount: 25000,
      showOtherAmounts: false,
      stripe: null
    };
    this.handleStripeLoad = this.handleStripeLoad.bind(this);
    this.getDonationButtonLabel = this.getDonationButtonLabel.bind(this);
    this.handleSelectAmount = this.handleSelectAmount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePaypalSubmission = this.handlePaypalSubmission.bind(this);
  }

  componentDidMount() {
    if (window.Stripe) {
      this.handleStripeLoad();
    } else if (document.querySelector('#stripe-js')) {
      document
        .querySelector('#stripe-js')
        .addEventListener('load', this.handleStripeLoad);
    } else {
      stripeScriptLoader(this.handleStripeLoad);
    }
  }

  componentWillUnmount() {
    const stripeMountPoint = document.querySelector('#stripe-js');
    if (stripeMountPoint) {
      stripeMountPoint.removeEventListener('load', this.handleStripeLoad);
    }
  }

  handleStripeLoad() {
    // Create Stripe instance once Stripe.js loads
    if (stripePublicKey) {
      this.setState(state => ({
        ...state,
        stripe: window.Stripe(stripePublicKey)
      }));
    }
  }

  getDonationButtonLabel() {
    const { donationAmount } = this.state;
    let donationBtnLabel = `Confirm your donation`;
    donationBtnLabel = `Confirm your one-time donation of $${numToCommas(
      donationAmount / 100
    )}`;
    return donationBtnLabel;
  }

  renderDonationOptions() {
    const { donationAmount, stripe } = this.state;
    const { handleProcessing, defaultTheme } = this.props;
    return (
      <div>
        <StripeProvider stripe={stripe}>
          <Elements>
            <DonateFormChildViewForHOC
              handleProcessing={handleProcessing}
              defaultTheme={defaultTheme}
              donationAmount={donationAmount}
              donationDuration='onetime'
              getDonationButtonLabel={this.getDonationButtonLabel}
              yearEndGift={true}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }

  handleSelectAmount(e) {
    this.setState({ donationAmount: Number(e.target.value) });
  }

  handleChange(e) {
    if (isNaN(e.target.value)) return;
    const amount = Math.floor(e.target.value) * 100;
    this.setState({ donationAmount: amount });
  }

  renderAmountRadio() {
    return (
      <form className='radio-container'>
        <label>Suggested gift amounts:</label>
        <ul>
          <li>
            <label>
              <input
                type='radio'
                value={100000}
                checked={this.state.donationAmount === 100000}
                onChange={this.handleSelectAmount}
              />
              $1,000
            </label>
          </li>
          <li>
            <label>
              <input
                type='radio'
                value={25000}
                checked={this.state.donationAmount === 25000}
                onChange={this.handleSelectAmount}
              />
              $250
            </label>
          </li>
          <li>
            <label>
              <input
                type='radio'
                value={10000}
                checked={this.state.donationAmount === 10000}
                onChange={this.handleSelectAmount}
              />
              $100
            </label>
          </li>
        </ul>
      </form>
    );
  }

  renderCustomAmountInput() {
    return (
      <form>
        <FormGroup controlId='formBasicText'>
          <ControlLabel>Or give a custom amount:</ControlLabel>
          <FormControl
            type='text'
            value={this.state.donationAmount / 100}
            placeholder='Enter Amount'
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }

  handlePaypalSubmission() {
    this.props.executeGA({
      type: 'event',
      data: {
        category: 'donation',
        action: 'year end gift paypal button click'
      }
    });
  }

  renderPayPalDonations() {
    return (
      <form
        action='https://www.paypal.com/cgi-bin/webscr'
        method='post'
        target='_top'
        onSubmit={this.handlePaypalSubmission}
      >
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='9C73W6CWSLNPW' />
        <button
          type='submit'
          name='submit'
          className='btn btn-block btn-cta paypal-button'
          alt='donate with paypal'
        >
          <DonateWithPayPal />
        </button>
      </form>
    );
  }

  renderForm(item) {
    return (
      <form
        action='https://www.paypal.com/cgi-bin/webscr'
        method='post'
        target='_blank'
      >
        <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
        <input
          defaultValue={item.defaultValueHash}
          name='hosted_button_id'
          type='hidden'
        />{' '}
        <input
          className='btn btn-block'
          value={item.defaultValue}
          name='submit'
          type='submit'
        />
      </form>
    );
  }

  handleClick() {
    this.setState({ showOtherAmounts: true, donationAmount: 25000 });
  }

  renderOtherPaymentButton() {
    return (
      <>
        <Button className='btn-link' onClick={this.handleClick}>
          <b>Or give a custom amount</b>
        </Button>
        <Spacer />
      </>
    );
  }

  render() {
    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          <b>
            Thank you again for supporting freeCodeCamp.org with a one-time
            year-end gift. Please enter your credit card information below.
          </b>
          <Spacer />
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderAmountRadio()}
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          {this.state.showOtherAmounts
            ? this.renderCustomAmountInput()
            : this.renderOtherPaymentButton()}
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderDonationOptions()}
          <Spacer />
        </Col>
        <Col sm={10} smOffset={1} xs={12} style={{ marginBottom: '5px' }}>
          <b>Or give using PayPal:</b>
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          {this.renderPayPalDonations()}
          <Spacer />
        </Col>
        <Col sm={10} smOffset={1} xs={12}>
          <b>
            If you need a receipt from your taxes, reply to Quincy's email he
            sent you.
          </b>
        </Col>
      </Row>
    );
  }
}

YearEndDonationForm.displayName = 'YearEndDonationForm';
YearEndDonationForm.propTypes = propTypes;

export default YearEndDonationForm;
