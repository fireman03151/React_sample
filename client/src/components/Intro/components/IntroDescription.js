import React from 'react';
import { Link, Spacer } from '../../helpers';
import { Col } from '@freecodecamp/react-bootstrap';
import { forumLocation } from '../../../../config/env.json';
import { Trans, useTranslation } from 'react-i18next';

import '../intro.css';

function IntroDescription() {
  const { t } = useTranslation();

  return (
    <Col
      className='intro-description'
      md={8}
      mdOffset={2}
      sm={10}
      smOffset={1}
      xs={12}
    >
      <strong>{t('learn.read-this.heading')}</strong>
      <Spacer />
      <p>{t('learn.read-this.p1')}</p>
      <p>{t('learn.read-this.p2')}</p>
      <p>{t('learn.read-this.p3')}</p>
      <p>{t('learn.read-this.p4')}</p>
      <p>{t('learn.read-this.p5')}</p>
      <p>{t('learn.read-this.p6')}</p>
      <p>{t('learn.read-this.p7')}</p>
      <p>{t('learn.read-this.p8')}</p>
      <p>
        <Trans i18nKey='learn.read-this.p9'>
          <Link className='inline' to='https://youtube.com/freecodecamp' />
        </Trans>
      </p>
      <p>{t('learn.read-this.p10')}</p>
      <p>
        <Trans i18nKey='learn.read-this.p11'>
          <Link className='inline' to={forumLocation} />
        </Trans>
      </p>
      <p>{t('learn.read-this.p12')}</p>
    </Col>
  );
}

IntroDescription.displayName = 'IntroDescription';

export default IntroDescription;
