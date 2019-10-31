import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEmail from 'validator/lib/isEmail';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Row,
  Col
} from '@freecodecamp/react-bootstrap';
import { injectStripe } from 'react-stripe-elements';

import Spacer from '../../../components/helpers/Spacer';
import StripeCardForm from './StripeCardForm';
import DonateCompletion from './DonateCompletion';
import { postChargeStripe } from '../../../utils/ajax';
import { userSelector, isSignedInSelector } from '../../../redux';

const propTypes = {
  email: PropTypes.string,
  isSignedIn: PropTypes.bool,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }),
  theme: PropTypes.string
};
const initialState = {
  donationAmount: 500,
  donationState: {
    processing: false,
    success: false,
    error: ''
  }
};

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  ({ email, theme }, isSignedIn) => ({ email, theme, isSignedIn })
);

class DonateForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ...initialState,
      email: null,
      isFormValid: false
    };

    this.getUserEmail = this.getUserEmail.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postDonation = this.postDonation.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
  }

  getUserEmail() {
    const { email: stateEmail } = this.state;
    const { email: propsEmail } = this.props;
    return stateEmail || propsEmail || '';
  }

  getValidationState(isFormValid) {
    this.setState(state => ({
      ...state,
      isFormValid
    }));
  }

  handleEmailChange(e) {
    const newValue = e.target.value;
    return this.setState(state => ({
      ...state,
      email: newValue
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.getUserEmail();
    if (!email || !isEmail(email)) {
      return this.setState(state => ({
        ...state,
        donationState: {
          ...state.donationState,
          error:
            'We need a valid email address to which we can send your' +
            ' donation tax receipt.'
        }
      }));
    }
    return this.props.stripe.createToken({ email }).then(({ error, token }) => {
      if (error) {
        return this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            error:
              'Something went wrong processing your donation. Your card' +
              ' has not been charged.'
          }
        }));
      }
      return this.postDonation(token);
    });
  }

  postDonation(token) {
    const { donationAmount: amount } = this.state;
    const { isSignedIn } = this.props;
    this.setState(state => ({
      ...state,
      donationState: {
        ...state.donationState,
        processing: true
      }
    }));

    return postChargeStripe(isSignedIn, {
      token,
      amount
    })
      .then(response => {
        const data = response && response.data;
        this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            processing: false,
            success: true,
            error: data.error ? data.error : null
          }
        }));
      })
      .catch(error => {
        const data =
          error.response && error.response.data
            ? error.response.data
            : {
                error:
                  'Something is not right. Please contact team@freecodecamp.org'
              };
        this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            processing: false,
            success: false,
            error: data.error
          }
        }));
      });
  }

  resetDonation() {
    return this.setState({ ...initialState });
  }

  renderCompletion(props) {
    return <DonateCompletion {...props} />;
  }

  renderDonateForm() {
    const { isFormValid } = this.state;
    const { theme } = this.props;
    return (
      <Row>
        <Col sm={10} smOffset={1} xs={12}>
          <Form className='donation-form' onSubmit={this.handleSubmit}>
            <FormGroup className='donation-email-container'>
              <ControlLabel>
                Email (we'll send you a tax-deductible donation receipt):
              </ControlLabel>
              <FormControl
                onChange={this.handleEmailChange}
                placeholder='me@example.com'
                required={true}
                type='text'
                value={this.getUserEmail()}
              />
            </FormGroup>
            <StripeCardForm
              getValidationState={this.getValidationState}
              theme={theme}
            />
            <Button
              block={true}
              bsStyle='primary'
              disabled={!isFormValid}
              id='confirm-donation-btn'
              type='submit'
            >
              Confirm your donation of $5 / month
            </Button>
            <Spacer />
          </Form>
        </Col>
      </Row>
    );
  }

  render() {
    const {
      donationState: { processing, success, error }
    } = this.state;
    if (processing || success || error) {
      return this.renderCompletion({
        processing,
        success,
        error,
        reset: this.resetDonation
      });
    }
    return this.renderDonateForm();
  }
}

DonateForm.displayName = 'DonateForm';
DonateForm.propTypes = propTypes;

export default injectStripe(connect(mapStateToProps)(DonateForm));
