import React from 'react';
import { Alert } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';
import { useTranslation } from 'react-i18next';
import { Link } from '../helpers';
import { ProgressBar } from '../Progress/progress-bar';

interface LearnAlertProps {
  onLearnDonationAlertClick: () => void;
  isDonating: boolean;
}

const LearnAlert = ({
  onLearnDonationAlertClick,
  isDonating
}: LearnAlertProps): JSX.Element | null => {
  const { t } = useTranslation();
  const seasonalAlertFlag = useFeature('seasonal-alert');
  const progressAlertFlag2024 = useFeature('progress-alert-2024');
  const progressAlertDefault = (text: string, value?: number) => (
    <Alert variant='info' className='annual-donation-alert'>
      {value && (
        <>
          <div aria-hidden='true' className='progress-wrapper'>
            <div>
              <ProgressBar now={value} />
            </div>
          </div>
          <h3 className='text-center'>{`${value}%`}</h3>
        </>
      )}
      <p>{text}</p>
      <hr />
      <p className={'text-center'}>
        <Link
          className='btn'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onLearnDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </p>
    </Alert>
  );

  const seasonalAlertFlagAlert = (
    <Alert variant='info' className='annual-donation-alert'>
      <p>
        <b>{t('learn.season-greetings-fcc')}</b>
      </p>
      <p>{t('learn.if-getting-value')}</p>
      <hr />
      <p className={'text-center'}>
        <Link
          className='btn'
          key='donate'
          sameTab={false}
          to='/donate'
          onClick={onLearnDonationAlertClick}
        >
          {t('buttons.donate')}
        </Link>
      </p>
    </Alert>
  );

  const progressAlert2024 = progressAlertDefault(
    t('donate.help-us-reach-20k'),
    Number(progressAlertFlag2024.value)
  );

  if (!isDonating) {
    if (progressAlertFlag2024.on) return progressAlert2024;
    if (seasonalAlertFlag.on) return seasonalAlertFlagAlert;
  }
  return null;
};

LearnAlert.displayName = 'LearnAlert';

export default LearnAlert;
