import {
  faAward,
  faCalendar,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import type { User } from '../../../redux/prop-types';

import envData from '../../../../../config/env.json';
import { getLangCode } from '../../../../../config/i18n';
import { AvatarRenderer } from '../../helpers';
import Link from '../../helpers/link';
import SocialIcons from './social-icons';

import './camper.css';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);

export type CamperProps = Pick<
  User,
  | 'about'
  | 'githubProfile'
  | 'isDonating'
  | 'linkedin'
  | 'username'
  | 'twitter'
  | 'yearsTopContributor'
  | 'location'
  | 'website'
  | 'picture'
  | 'name'
  | 'joinDate'
  | 'twitter'
>;

function joinArray(array: string[], t: TFunction): string {
  return array.reduce((string, item, index, array) => {
    if (string.length > 0) {
      if (index === array.length - 1) {
        return `${string} ${t('misc.and')} ${item}`;
      } else {
        return `${string}, ${item}`;
      }
    } else {
      return item;
    }
  });
}

function parseDate(joinDate: string, t: TFunction): string {
  const convertedJoinDate = new Date(joinDate);
  const date = convertedJoinDate.toLocaleString([localeCode, 'en-US'], {
    year: 'numeric',
    month: 'long'
  });
  return t('profile.joined', { date: date });
}

function Camper({
  name,
  username,
  location,
  picture,
  about,
  yearsTopContributor,
  githubProfile,
  isDonating,
  joinDate,
  linkedin,
  twitter,
  website
}: CamperProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <Row>
        <Col className='avatar-camper' xs={12}>
          <AvatarRenderer
            isDonating={isDonating}
            isTopContributor={yearsTopContributor.length > 0}
            picture={picture}
            userName={username}
          />
        </Col>
      </Row>
      <SocialIcons
        githubProfile={githubProfile}
        linkedin={linkedin}
        twitter={twitter}
        username={username}
        website={website}
      />
      <br />
      <h2 className='text-center username'>@{username}</h2>
      {name && <p className='text-center name'>{name}</p>}
      {location && <p className='text-center location'>{location}</p>}
      {isDonating && (
        <p className='text-center supporter'>
          <FontAwesomeIcon icon={faHeart} /> {t('profile.supporter')}
        </p>
      )}
      {about && <p className='bio text-center'>{about}</p>}
      {joinDate && (
        <p className='bio text-center'>
          <FontAwesomeIcon icon={faCalendar} /> {parseDate(joinDate, t)}
        </p>
      )}
      {yearsTopContributor.filter(Boolean).length > 0 && (
        <div>
          <br />
          <p className='text-center yearsTopContributor'>
            <FontAwesomeIcon icon={faAward} />{' '}
            <Link to={t('links:top-contributors')}>
              {t('profile.contributor')}
            </Link>
          </p>
          <p className='text-center'>{joinArray(yearsTopContributor, t)}</p>
        </div>
      )}
      <br />
    </div>
  );
}

Camper.displayName = 'Camper';

export default Camper;
