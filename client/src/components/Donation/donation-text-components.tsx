import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Caret from '../../assets/icons/caret';

const WALLETS = (
  <>
    <code>Bitcoin: 3B4QShnJawtzBd1FFzHPpVCpxBpVbcbPRg</code>
    <br />
    <code>Ethereum: 0x1ee753faa97BE3C4b9b1dE775dB44c9Bfac0EC91</code>
    <br />
    <code>Litecoin: MVDLr18spSjd9nDyKG2Y94BFmgzbjXgfCD</code>
    <br />
    <code>Bitcoin Cash: qqw8lhpnu635za8f5c22ghynl6yz5zelp52t25lmnm</code>
    <br />
    <code>USD Coin: 0xad4f0c8363fE733DdbfEDBdAf6600E2b6dF2900d</code>
    <br />
    <code>DAI: 0xad4f0c8363fE733DdbfEDBdAf6600E2b6dF2900d</code>
    <br />
    <code>Dash: XyRp67PQVBRaZu2LJU6Ndc5kp3AaRaHnXt</code>
  </>
);

const POBOX = (
  <>
    <code>Free Code Camp, Inc.</code>
    <br />
    <code>3905 Hedgcoxe Rd</code>
    <br />
    <code>PO Box 250352</code>
    <br />
    <code>Plano, TX 75025</code>
  </>
);

export const DonationSupportText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h4>
        <b>{t('donate.need-help')}</b>
      </h4>
      <p>{t('donate.forward-receipt')}</p>
    </>
  );
};

export const DonationText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('donate.efficiency')}</p>
      <p>{t('donate.why-donate-1')}</p>
      <p>{t('donate.why-donate-2')}</p>
    </>
  );
};

export const DonationOptionsText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h4>
        <b>
          <Trans>donate.bigger-donation</Trans>
        </b>
      </h4>
      <p>
        <Trans i18nKey='donate.other-ways'>
          <a href={t('links:donate.other-ways-url')}>placeholder</a>
        </Trans>
      </p>
    </>
  );
};

export const DonationOptionsAlertText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <p>
      <Trans>donate.bigger-donation</Trans>{' '}
      <Trans i18nKey='donate.other-ways'>
        <a href={t('links:donate.other-ways-url')}>placeholder</a>
      </Trans>
    </p>
  );
};

const FaqItem = (
  title: string,
  text: JSX.Element,
  key: number
): JSX.Element => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className={`faq-item ${isExpanded ? 'open' : ''}`} key={key}>
      <button className='map-title' onClick={() => setExpanded(!isExpanded)}>
        <Caret />
        <h4>
          <b>{title}</b>
        </h4>
      </button>
      {isExpanded && (
        <>
          <div className='map-challenges-ul'>{text}</div>
        </>
      )}
    </div>
  );
};

export const DonationFaqText = (): JSX.Element => {
  const { t } = useTranslation();
  const faqItems = [
    { Q: t('donate.get-help'), A: <p>{t('donate.forward-receipt')}</p> },
    {
      Q: t('donate.how-transparent'),
      A: (
        <>
          <p>{t('donate.very-transparent')}</p>
          <p>
            <Trans i18nKey='donate.download-irs'>
              <a href={t('links:donate.download-irs-url')}>placeholder</a>
            </Trans>
          </p>
          <p>
            <Trans i18nKey='donate.download-990'>
              <a href={t('links:donate.download-990-url')}>placeholder</a>
            </Trans>
          </p>
        </>
      )
    },
    {
      Q: t('donate.how-efficient'),
      A: (
        <>
          <p>{t('donate.fcc-budget')}</p>
          <p>{t('donate.help-millions')}</p>
        </>
      )
    },
    {
      Q: t('donate.how-one-time'),
      A: (
        <>
          <p>
            <Trans i18nKey='donate.one-time'>
              <a href={t('links:donate.one-time-url')}>placeholder</a>
            </Trans>
          </p>
          <p>{t('donate.wire-transfer')}</p>
        </>
      )
    },
    {
      Q: t('donate.does-crypto'),
      A: (
        <>
          <p>{t('donate.yes-crypto')}</p>
          <p>{WALLETS}</p>
        </>
      )
    },

    {
      Q: t('donate.can-check'),
      A: (
        <>
          <p>{t('donate.yes-check')}</p>
          <p>{POBOX}</p>
        </>
      )
    },
    {
      Q: t('donate.how-matching-gift'),
      A: (
        <>
          <p>{t('donate.employers-vary')}</p>
          <p>{t('donate.some-volunteer')}</p>
          <p>{t('donate.help-matching-gift')}</p>
        </>
      )
    },
    { Q: t('donate.how-endowment'), A: <p>{t('donate.endowment')}</p> },
    {
      Q: t('donate.how-legacy'),
      A: (
        <>
          <p>{t('donate.we-honored')}</p>
          <blockquote>
            <p>{t('donate.legacy-gift-message')}</p>
          </blockquote>
          <p>{t('donate.thank-wikimedia')}</p>
          <p>{t('donate.legacy-gift-questions')}</p>
        </>
      )
    },
    { Q: t('donate.how-stock'), A: <p>{t('donate.welcome-stock')}</p> },
    { Q: t('donate.how-update'), A: <p>{t('donate.forward-receipt')}</p> },
    {
      Q: t('donate.anything-else'),
      A: (
        <>
          <p>{t('donate.other-support')}</p>
        </>
      )
    }
  ];

  return (
    <>{faqItems.map((item, iterator) => FaqItem(item.Q, item.A, iterator))}</>
  );
};
