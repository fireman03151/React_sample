import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { Link } from 'gatsby';

import { stripePublicKey } from '../../config/env.json';

import Spacer from '../components/helpers/Spacer';
import DonateForm from '../components/Donation/components/DonateForm';
import DonateText from '../components/Donation/components/DonateText';
import PoweredByStripe from '../components/Donation/components/poweredByStripe';

import './index.css';

class DonatePage extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null
    };
    this.handleStripeLoad = this.handleStripeLoad.bind(this);
  }
  componentDidMount() {
    if (window.Stripe) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState(state => ({
        ...state,
        stripe: window.Stripe(stripePublicKey)
      }));
    } else {
      document
        .querySelector('#stripe-js')
        .addEventListener('load', this.handleStripeLoad);
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
    console.info('stripe has loaded');
    this.setState(state => ({
      ...state,
      stripe: window.Stripe(stripePublicKey)
    }));
  }

  render() {
    return (
      <Fragment>
        <Helmet title='Support our nonprofit | freeCodeCamp.org' />
        <Spacer />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <h2 className='text-center'>Become a Supporter</h2>
            <DonateText />
          </Col>
          <Col sm={6} smOffset={3} xs={12}>
            <hr />
            <StripeProvider stripe={this.state.stripe}>
              <Elements>
                <DonateForm />
              </Elements>
            </StripeProvider>
            <div className='text-center'>
              <Link to='/donate-other'>Other ways to donate.</Link>
              <Spacer />
              <PoweredByStripe />
            </div>
            <Spacer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

DonatePage.displayName = 'DonatePage';

export default DonatePage;
