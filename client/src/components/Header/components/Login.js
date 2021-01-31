import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import { isSignedInSelector } from '../../../redux';
import { apiLocation, homeLocation } from '../../../../config/env.json';

import { gtagReportConversion } from '../../../analytics/gtag';

import './login.css';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isSignedIn => ({
    isSignedIn
  })
);

function Login(props) {
  const { t } = useTranslation();
  const {
    block,
    'data-test-label': dataTestLabel,
    children,
    isSignedIn
  } = props;
  const href = isSignedIn
    ? `${homeLocation}/learn`
    : `${apiLocation}/signin?returnTo=${homeLocation}/learn`;
  return (
    <Button
      bsStyle='default'
      className={(block ? 'btn-cta-big btn-block' : '') + ' signup-btn btn-cta'}
      data-test-label={dataTestLabel}
      href={href}
      onClick={() => gtagReportConversion()}
    >
      {children || t('buttons.sign-in')}
    </Button>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.any,
  'data-test-label': PropTypes.string,
  isSignedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Login);
