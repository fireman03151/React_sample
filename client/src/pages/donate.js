import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';

import { stripePublicKey } from '../../config/env.json';
import { Spacer, Loader, FullWidthRow } from '../components/helpers';
import DonateForm from '../components/Donation/components/DonateForm';
import DonateText from '../components/Donation/components/DonateText';
import { signInLoadingSelector, userSelector } from '../redux';
import { stripeScriptLoader } from '../utils/scriptLoaders';

const propTypes = {
  isDonating: PropTypes.bool,
  showLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ isDonating }, showLoading) => ({
    isDonating,
    showLoading
  })
);

export class DonatePage extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null
    };

    this.handleStripeLoad = this.handleStripeLoad.bind(this);
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

  render() {
    const { stripe } = this.state;
    const { showLoading } = this.props;

    if (showLoading) {
      return <Loader fullScreen={true} />;
    }

    return (
      <Fragment>
        <Helmet title='Support our nonprofit | freeCodeCamp.org' />
        <Grid>
          <main>
            <Spacer />
            <FullWidthRow>
              <h1 className='text-center'>Become a Supporter</h1>
            </FullWidthRow>
            <Spacer />
            <Row>
              <Col md={6}>
                <DonateForm stripe={stripe} />
              </Col>
              <Col md={6}>
                <DonateText />
              </Col>
            </Row>
            <Spacer />
          </main>
        </Grid>
      </Fragment>
    );
  }
}

DonatePage.displayName = 'DonatePage';
DonatePage.propTypes = propTypes;

export default connect(mapStateToProps)(DonatePage);
