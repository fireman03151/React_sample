import { Row, Image, Button } from '@freecodecamp/react-bootstrap';
import { isEmpty } from 'lodash-es';
import { QRCodeSVG } from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col } from '@freecodecamp/ui';

import envData from '../../config/env.json';
import { getLangCode } from '../../../shared/config/i18n';
import FreeCodeCampLogo from '../assets/icons/freecodecamp';
import MicrosoftLogo from '../assets/icons/microsoft-logo';
import DonateForm from '../components/Donation/donate-form';

import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
import RedirectHome from '../components/redirect-home';
import { Themes } from '../components/settings/theme';
import { showCert, executeGA, fetchProfileForUser } from '../redux/actions';
import {
  showCertSelector,
  showCertFetchStateSelector,
  userFetchStateSelector,
  isDonatingSelector,
  userByNameSelector,
  usernameSelector
} from '../redux/selectors';
import { UserFetchState, User } from '../redux/prop-types';
import { liveCerts } from '../../config/cert-and-project-map';
import {
  certificateMissingErrorMessage,
  reallyWeirdErrorMessage,
  standardErrorMessage
} from '../utils/error-messages';

import { PaymentContext } from '../../../shared/config/donation-settings';
import ribbon from '../assets/images/ribbon.svg';
import {
  certTypes,
  certTypeTitleMap
} from '../../../shared/config/certification-settings';
import ShowProjectLinks from './show-project-links';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);
type Cert = {
  username: string;
  name: string;
  certName: string;
  certTitle: string;
  completionTime: number;
  date: number;
};
interface ShowCertificationProps {
  cert: Cert;
  certDashedName: string;
  certSlug: string;
  createFlashMessage: typeof createFlashMessage;
  executeGA: (payload: Record<string, unknown>) => void;
  fetchProfileForUser: (username: string) => void;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
  };
  isDonating: boolean;
  isValidCert: boolean;
  location: {
    pathname: string;
  };
  showCert: ({
    username,
    certSlug
  }: {
    username: string;
    certSlug: string;
  }) => void;
  signedInUserName: string;
  user: User;
  userFetchState: UserFetchState;
  userFullName: string;
  username: string;
}

const requestedUserSelector = (state: unknown, { username = '' }) =>
  userByNameSelector(username.toLowerCase())(state) as User;

const mapStateToProps = (state: unknown, props: ShowCertificationProps) => {
  const isValidCert = liveCerts.some(
    ({ certSlug }) => certSlug === props.certSlug
  );
  return createSelector(
    showCertSelector,
    showCertFetchStateSelector,
    usernameSelector,
    userFetchStateSelector,
    isDonatingSelector,
    requestedUserSelector,
    (
      cert: Cert,
      fetchState: ShowCertificationProps['fetchState'],
      signedInUserName: string,
      userFetchState: UserFetchState,
      isDonating: boolean,
      user
    ) => ({
      cert,
      fetchState,
      isValidCert,
      signedInUserName,
      userFetchState,
      isDonating,
      user
    })
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { createFlashMessage, showCert, fetchProfileForUser, executeGA },
    dispatch
  );

const ShowCertification = (props: ShowCertificationProps): JSX.Element => {
  const { t } = useTranslation();
  const [isDonationSubmitted, setIsDonationSubmitted] = useState(false);
  const [isDonationDisplayed, setIsDonationDisplayed] = useState(false);
  const [isDonationClosed, setIsDonationClosed] = useState(false);

  useEffect(() => {
    const { username, certSlug, isValidCert, showCert } = props;
    if (isValidCert) {
      showCert({ username, certSlug });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const {
      userFetchState: { complete: userComplete },
      signedInUserName,
      isDonating,
      cert: { username = '' },
      fetchProfileForUser,
      user,
      executeGA
    } = props;

    if (!signedInUserName || signedInUserName !== username) {
      if (isEmpty(user) && username) {
        fetchProfileForUser(username);
      }
    }

    if (
      !isDonationDisplayed &&
      userComplete &&
      signedInUserName &&
      signedInUserName === username &&
      !isDonating
    ) {
      setIsDonationDisplayed(true);
      executeGA({
        event: 'donation_view',
        action: 'Displayed Certificate Donation'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isDonationDisplayed,
    props.userFetchState,
    props.signedInUserName,
    props.isDonating,
    props.cert,
    props.executeGA
  ]);

  const hideDonationSection = () => {
    setIsDonationDisplayed(false);
    setIsDonationClosed(true);
  };

  const handleProcessing = () => {
    setIsDonationSubmitted(true);
  };

  const {
    cert,
    fetchState,
    isValidCert,
    createFlashMessage,
    signedInUserName,
    location: { pathname }
  } = props;

  if (!isValidCert) {
    createFlashMessage(certificateMissingErrorMessage);
    return <RedirectHome />;
  }

  const { pending, complete, errored } = fetchState;

  if (pending) {
    return <Loader fullScreen={true} />;
  }

  if (!pending && errored) {
    createFlashMessage(standardErrorMessage);
    return <RedirectHome />;
  }

  if (!pending && !complete && !errored) {
    createFlashMessage(reallyWeirdErrorMessage);
    return <RedirectHome />;
  }

  const {
    date,
    name: userFullName = null,
    username,
    certTitle,
    completionTime
  } = cert;

  const { user } = props;

  const displayName = userFullName ?? username;

  const certDate = new Date(date);
  const certYear = certDate.getFullYear();
  const certMonth = certDate.getMonth();
  const certURL = `https://freecodecamp.org${pathname}`;

  const donationCloseBtn = (
    <div>
      <Button
        block={true}
        bsSize='sm'
        bsStyle='primary'
        onClick={hideDonationSection}
      >
        {t('buttons.close')}
      </Button>
    </div>
  );

  const donationSection = (
    <div
      className='donation-section'
      data-playwright-test-label='donation-section'
    >
      <Spacer size='large' />
      {!isDonationSubmitted && (
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <p data-playwright-test-label='donation-text'>
              {t('donate.only-you')}
            </p>
          </Col>
        </Row>
      )}
      <Row>
        <Col
          lg={8}
          lgOffset={2}
          sm={10}
          smOffset={1}
          xs={12}
          data-playwright-test-label='donation-form'
        >
          <DonateForm
            defaultTheme={Themes.Default}
            handleProcessing={handleProcessing}
            isMinimalForm={true}
            paymentContext={PaymentContext.Certificate}
          />
        </Col>
      </Row>
      <Spacer size='medium' />
      <Row>
        <Col sm={4} smOffset={4} xs={6} xsOffset={3}>
          {isDonationSubmitted && donationCloseBtn}
        </Col>
      </Row>
      <Spacer size='large' />
    </div>
  );

  const urlFriendlyCertTitle = encodeURIComponent(certTitle);

  const shareCertBtns = (
    <Row className='text-center'>
      <Col xs={12}>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${urlFriendlyCertTitle}&organizationId=4831032&issueYear=${certYear}&issueMonth=${
            certMonth + 1
          }&certUrl=${certURL}`}
          target='_blank'
          data-playwright-test-label='linkedin-share-btn'
        >
          {t('profile.add-linkedin')}
        </Button>
        <Spacer size='medium' />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          href={`https://twitter.com/intent/tweet?text=${t('profile.tweet', {
            certTitle: urlFriendlyCertTitle,
            certURL: certURL
          })}`}
          target='_blank'
          data-playwright-test-label='twitter-share-btn'
        >
          {t('profile.add-twitter')}
        </Button>
      </Col>
      <Spacer size='large' />
    </Row>
  );

  const isMicrosoftCert =
    certTitle === certTypeTitleMap[certTypes.foundationalCSharpV8];

  return (
    <Container className='certificate-outer-wrapper'>
      {isDonationDisplayed && !isDonationClosed ? donationSection : ''}
      <div
        className='certificate-wrapper'
        data-playwright-test-label='cert-wrapper'
      >
        <div className='certification-namespace'>
          <header data-playwright-test-label='cert-header'>
            <Col sm={12}>
              {isMicrosoftCert ? (
                <>
                  <div
                    className='dual-logo fcc-logo'
                    data-playwright-test-label='cert-fcc-logo'
                  >
                    <FreeCodeCampLogo aria-hidden='true' />
                  </div>
                  <div
                    className='dual-logo ms-logo'
                    data-playwright-test-label='cert-microsoft-logo'
                  >
                    <MicrosoftLogo aria-hidden='true' />
                  </div>
                </>
              ) : (
                <div
                  className='logo'
                  data-playwright-test-label='cert-fcc-logo'
                >
                  <FreeCodeCampLogo aria-hidden='true' />
                </div>
              )}
            </Col>
          </header>
          <main className='information'>
            <div
              className='information-container'
              data-playwright-test-label='cert-info-container'
            >
              <Trans
                i18nKey={
                  isMicrosoftCert
                    ? 'certification.fulltextNoHours'
                    : 'certification.fulltext'
                }
                title={certTitle}
              >
                <h3>placeholder</h3>
                <h1>
                  <strong>{{ user: displayName }}</strong>
                </h1>
                <h3 data-playwright-test-label='successful-completion'>
                  placeholder
                </h3>
                <h1 data-playwright-test-label='certification-title'>
                  <strong>
                    {{
                      title: t(`certification.title.${certTitle}`, certTitle)
                    }}
                  </strong>
                </h1>
                <h4
                  data-cy={'issue-date'}
                  data-playwright-test-label='issue-date'
                >
                  {{
                    time: certDate.toLocaleString([localeCode, 'en-US'], {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  }}
                </h4>
                <h5 style={{ marginTop: '15px' }}>{{ completionTime }}</h5>
              </Trans>
            </div>
          </main>
          <footer data-playwright-test-label='cert-footer'>
            <div className='signatures'>
              {isMicrosoftCert ? (
                <>
                  <div>
                    <Image
                      data-cy='quincy-signature'
                      data-playwright-test-label='quincy-signature'
                      alt="Quincy Larson's Signature"
                      src={
                        'https://cdn.freecodecamp.org' +
                        '/platform/english/images/quincy-larson-signature.svg'
                      }
                    />
                    <p className='signee-name'>
                      <strong>Quincy Larson</strong>
                    </p>
                    <p className='signee-role'>
                      {t('certification.executive')}
                    </p>
                  </div>
                  <div className='microsoft-signature'>
                    <Image
                      data-cy='microsoft-signature'
                      data-playwright-test-label='microsoft-signature'
                      alt="Julia Liusons's Signature"
                      src={
                        'https://cdn.freecodecamp.org' +
                        '/platform/english/images/microsoft-signature.png'
                      }
                    />
                    <div className='signature-underline'></div>
                    <p className='signee-name'>
                      <strong>Julia Liuson</strong>
                    </p>
                    <p className='signee-role'>
                      {t('certification.ms-president')}
                    </p>
                  </div>
                </>
              ) : (
                <div>
                  <Image
                    data-cy='quincy-signature'
                    data-playwright-test-label='quincy-signature'
                    alt="Quincy Larson's Signature"
                    src={
                      'https://cdn.freecodecamp.org' +
                      '/platform/english/images/quincy-larson-signature.svg'
                    }
                  />
                  <p className='signee-name'>
                    <strong>Quincy Larson</strong>
                  </p>
                  <p className='signee-role'>{t('certification.executive')}</p>
                </div>
              )}
            </div>
            {!isMicrosoftCert && (
              <>
                <span className='ribbon-wrap'>
                  <Image className='ribbon' src={ribbon} />
                </span>
                <span className='qr-wrap'>
                  <QRCodeSVG className='qr-code' value={certURL} />
                </span>
              </>
            )}
            <Row>
              <p className='verify'>
                {t('certification.verify')}
                <br />
                {certURL}
              </p>
            </Row>
          </footer>
        </div>
      </div>
      <div
        className='row certificate-links'
        data-playwright-test-label='cert-links'
      >
        <Spacer size='large' />
        {signedInUserName === username ? shareCertBtns : ''}
        <Spacer size='large' />
        <ShowProjectLinks certName={certTitle} name={displayName} user={user} />
        <Spacer size='large' />
      </div>
    </Container>
  );
};

ShowCertification.displayName = 'ShowCertification';

export default connect(mapStateToProps, mapDispatchToProps)(ShowCertification);
