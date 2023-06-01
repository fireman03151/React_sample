import { Row, Col, Button, Grid } from '@freecodecamp/react-bootstrap';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation, Trans } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import IntroDescription from '../components/Intro/components/intro-description';
import createRedirect from '../components/create-redirect';
import { Spacer, Loader, Link } from '../components/helpers';
import { apiLocation } from '../../../config/env.json';

import { acceptTerms } from '../redux/actions';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../redux/selectors';

import './email-sign-up.css';
interface AcceptPrivacyTermsProps {
  acceptTerms: (accept: boolean | null) => void;
  acceptedPrivacyTerms: boolean;
  isSignedIn: boolean;
  t: TFunction;
  showLoading: boolean;
  completedChallengeCount?: number;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  signInLoadingSelector,
  (
    {
      acceptedPrivacyTerms,
      completedChallengeCount
    }: { acceptedPrivacyTerms: boolean; completedChallengeCount: number },
    isSignedIn: boolean,
    showLoading: boolean
  ) => ({
    acceptedPrivacyTerms,
    isSignedIn,
    showLoading,
    completedChallengeCount
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

function AcceptPrivacyTerms({
  acceptTerms,
  acceptedPrivacyTerms,
  isSignedIn,
  t,
  showLoading,
  completedChallengeCount = 0
}: AcceptPrivacyTermsProps) {
  const acceptedPrivacyRef = useRef(acceptedPrivacyTerms);
  const acceptTermsRef = useRef(acceptTerms);

  useEffect(() => {
    acceptedPrivacyRef.current = acceptedPrivacyTerms;
    acceptTermsRef.current = acceptTerms;
  });

  function onClick(isWeeklyEmailAccepted: boolean) {
    acceptTerms(isWeeklyEmailAccepted);
  }

  function renderEmailListOptIn(isSignedIn: boolean, showLoading: boolean) {
    if (showLoading) {
      return <Loader fullScreen={true} />;
    }
    if (isSignedIn) {
      return (
        <Row>
          <Col md={4} mdOffset={2} sm={5} smOffset={1} xs={12}>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='big-cta-btn'
              onClick={() => onClick(true)}
            >
              {t('buttons.yes-please')}
            </Button>
            <Spacer size='small' />
          </Col>
          <Col md={4} sm={5} xs={12}>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='big-cta-btn'
              onClick={() => onClick(false)}
            >
              {t('buttons.no-thanks')}
            </Button>
            <Spacer size='small' />
          </Col>
        </Row>
      );
    } else {
      return (
        <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
          <Spacer size='small' />
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            className='big-cta-btn'
            href={`${apiLocation}/signin`}
          >
            {t('buttons.sign-up-email-list')}
          </Button>
          <Spacer size='small' />
        </Col>
      );
    }
  }

  return acceptedPrivacyTerms ? (
    <RedirectToLearn />
  ) : (
    <>
      <Helmet>
        <title>{t('misc.email-signup')} | freeCodeCamp.org</title>
      </Helmet>
      <Grid>
        {isSignedIn && completedChallengeCount < 1 ? (
          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='large' />
              <h1 className='text-center'>{t('misc.brand-new-account')}</h1>
              <Spacer size='small' />
              <p>
                <Trans i18nKey='misc.duplicate-account-warning'>
                  <Link className='inline' to='/settings#danger-zone' />
                </Trans>
              </p>
            </Col>
          </Row>
        ) : (
          ''
        )}
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size='small' />
            <IntroDescription />
            <hr />
          </Col>
        </Row>
        <Row className='email-sign-up' data-cy='email-sign-up'>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size='small' />
            <p>{t('misc.email-blast')}</p>
            <Spacer size='small' />
          </Col>
          {renderEmailListOptIn(isSignedIn, showLoading)}
          <Col xs={12}>
            <Spacer size='medium' />
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AcceptPrivacyTerms));
