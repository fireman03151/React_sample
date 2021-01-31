import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const propTypes = {};

function GreenNotCompleted(props) {
  const { t } = useTranslation();

  return (
    <Fragment>
      <span className='sr-only'>{t('icons.not-passed')}</span>
      <svg
        height='50'
        viewBox='0 0 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>{t('icons.not-passed')}</title>
          <circle
            cx='100'
            cy='99'
            fill='var(--primary-background)'
            r='95'
            stroke='var(--primary-color)'
            strokeDasharray='null'
            strokeLinecap='null'
            strokeLinejoin='null'
            strokeWidth='10'
          />
        </g>
      </svg>
    </Fragment>
  );
}

GreenNotCompleted.displayName = 'GreenNotCompleted';
GreenNotCompleted.propTypes = propTypes;

export default GreenNotCompleted;
