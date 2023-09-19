import React from 'react';
import { useTranslation } from 'react-i18next';
import FreeCodeCampLogo from '../../../assets/icons/freecodecamp';
import MicrosoftLogo from '../../../assets/icons/microsoft-logo';

import './exam-nav.css';

const ExamNav = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('aria.primary-nav')} className='exam-nav' id='exam-nav'>
      <FreeCodeCampLogo aria-hidden='true' />
      <MicrosoftLogo aria-hidden='true' />
    </nav>
  );
};

ExamNav.displayName = 'ExamNav';
export default ExamNav;
