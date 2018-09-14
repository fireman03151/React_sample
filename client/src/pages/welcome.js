import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col, Button } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { Loader, Spacer } from '../components/helpers';
import Layout from '../components/Layout';
import { userSelector, userFetchStateSelector } from '../redux';
import { randomQuote } from '../utils/get-words';

import './welcome.css';

const propTypes = {
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  user: PropTypes.shape({
    acceptedPrivacyTerms: PropTypes.bool,
    username: PropTypes.string,
    completedChallengeCount: PropTypes.number,
    completedProjectCount: PropTypes.number,
    completedCertCount: PropTypes.number,
    completedLegacyCertCount: PropTypes.number
  })
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  userSelector,
  (fetchState, user) => ({ fetchState, user })
);
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

function Welcome({
  fetchState: { pending, complete },
  user: {
    acceptedPrivacyTerms,
    name = '',
    completedChallengeCount = 0,
    completedProjectCount = 0,
    completedCertCount = 0,
    completedLegacyCertCount = 0
  }
}) {
  if (pending && !complete) {
    return (
      <Layout>
        <div className='loader-wrapper'>
          <Loader />
        </div>
      </Layout>
    );
  }

  if (!acceptedPrivacyTerms) {
    navigate('/accept-privacy-terms');
    return null;
  }

  const { quote, author } = randomQuote();
  return (
    <Layout>
      <Helmet>
        <title>Welcome {name ? name : 'Camper'} | freeCodeCamp.org</title>
      </Helmet>
      <Grid className='text-center'>
        <Row>
          <Col xs={12}>
            <Spacer />
            <h1 className='big-heading'>Welcome {name ? name : 'Camper'}!</h1>
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <a
              className='update-link'
              href='/n/7gR5pBM-K?refsource=userhome'
              target='_blank'
              >
              We're building a massive open dataset about new coders. Take the
              2018 New Coder Survey. It only takes 5 minutes.
            </a>
          </Col>
        </Row>
        <Spacer />
        <Row className='quote-partial'>
          <Col sm={10} smOffset={1} xs={12}>
            <blockquote className='blockquote'>
              <span>
                <q>{quote}</q>
                <footer className='quote-author blockquote-footer'>
                  <cite>{author}</cite>
                </footer>
              </span>
            </blockquote>
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <p className='stats'>
              You have completed <span>{completedChallengeCount}</span> of{' '}
              <span>1408</span> coding challenges.
            </p>
            <p className='stats'>
              You have built <span>{completedProjectCount}</span> of{' '}
              <span>30</span> projects.
            </p>
            {completedLegacyCertCount ? (
              <p className='stats'>
                You have earned <span>{completedLegacyCertCount}</span> of{' '}
                <span>4</span> legacy certifications.
              </p>
            ) : null}
            <p className='stats'>
              You have earned <span>{completedCertCount}</span> of{' '}
              <span>6</span> certifications.
            </p>
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <Button block={true} bsStyle='primary' className='btn-cta-big'>
              Go to my next challenge
            </Button>
          </Col>
        </Row>
        <Spacer size={4} />
      </Grid>
    </Layout>
  );
}

Welcome.displayName = 'Welcome';
Welcome.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
