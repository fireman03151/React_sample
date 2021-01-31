import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faCheck,
  faCheckSquare,
  faHeart,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../helpers';
import { updateUserFlag } from '../../../redux/settings';
import {
  clientLocale,
  radioLocation,
  apiLocation
} from '../../../../../config/env.json';
// import createLanguageRedirect from '../../createLanguageRedirect';
import createExternalRedirect from '../../createExternalRedirects';

/* const {
  availableLangs,
  i18nextCodes,
  langDisplayNames
} = require('../../../../i18n/allLangs'); */

// const locales = availableLangs.client;

// The linter was complaining about inline comments. Add the code below above
// the sign out button when the language menu is ready to be added
/*
        <div className='nav-link nav-link-header' key='lang-header'>
          {t('footer.language')}
        </div>
        {locales.map(lang =>
          // current lang is a button that closes the menu
          i18n.language === i18nextCodes[lang] ? (
            <button
              className='nav-link nav-link-lang nav-link-flex'
              onClick={() => toggleDisplayMenu()}
            >
              <span>{langDisplayNames[lang]}</span>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          ) : (
            <Link
              className='nav-link nav-link-lang nav-link-flex'
              external={true}
              // Todo: should treat other lang client application links as external??
              key={'lang-' + lang}
              to={createLanguageRedirect({
                clientLocale,
                lang
              })}
            >
              {langDisplayNames[lang]}
            </Link>
          )
        )
*/

const propTypes = {
  displayMenu: PropTypes.bool,
  fetchState: PropTypes.shape({ pending: PropTypes.bool }),
  i18n: PropTypes.object,
  t: PropTypes.func,
  toggleDisplayMenu: PropTypes.func,
  toggleNightMode: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapDispatchToProps = {
  toggleNightMode: theme => updateUserFlag({ theme })
};

export class NavLinks extends Component {
  toggleTheme(currentTheme = 'default', toggleNightMode) {
    toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
  }

  render() {
    const {
      displayMenu,
      // i18n,
      fetchState,
      t,
      // toggleDisplayMenu,
      toggleNightMode,
      user: { isDonating = false, username, theme }
    } = this.props;

    const { pending } = fetchState;
    return pending ? (
      <div className='nav-skeleton' />
    ) : (
      <div className={'nav-list' + (displayMenu ? ' display-menu' : '')}>
        {isDonating ? (
          <div className='nav-link nav-link-flex nav-link-header' key='donate'>
            <span>{t('donate.thanks')}</span>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        ) : (
          <Link
            className='nav-link'
            external={true}
            key='donate'
            sameTab={false}
            to='/donate'
          >
            {t('buttons.donate')}
          </Link>
        )}
        {!username && (
          <a
            className='nav-link nav-link-sign-in'
            href={`${apiLocation}/signin`}
            key='signin'
          >
            {t('buttons.sign-in')}
          </a>
        )}
        <Link className='nav-link' key='learn' to='/learn'>
          {t('buttons.curriculum')}
        </Link>
        {username && (
          <>
            <Link
              className='nav-link'
              key='profile'
              sameTab={false}
              to={`/${username}`}
            >
              {t('buttons.profile')}
            </Link>
            <Link
              className='nav-link'
              key='settings'
              sameTab={false}
              to={`/settings`}
            >
              {t('buttons.settings')}
            </Link>
          </>
        )}
        <hr className='nav-line' />
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='forum'
          sameTab={false}
          to={createExternalRedirect('forum', { clientLocale })}
        >
          <span>{t('buttons.forum')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='news'
          sameTab={false}
          to={createExternalRedirect('news', { clientLocale })}
        >
          <span>{t('buttons.news')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='radio'
          sameTab={false}
          to={radioLocation}
        >
          <span>{t('buttons.radio')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <hr className='nav-line' />
        <button
          className={
            'nav-link nav-link-flex' + (!username ? ' nav-link-header' : '')
          }
          disabled={!username}
          key='theme'
          onClick={() => this.toggleTheme(theme, toggleNightMode)}
        >
          {username ? (
            <>
              <span>{t('settings.labels.night-mode')}</span>
              {theme === 'night' ? (
                <FontAwesomeIcon icon={faCheckSquare} />
              ) : (
                <FontAwesomeIcon icon={faSquare} />
              )}
            </>
          ) : (
            <span className='nav-link-dull'>{t('misc.change-theme')}</span>
          )}
        </button>
        {username && (
          <>
            <hr className='nav-line-2' />
            <a className='nav-link' href={`${apiLocation}/signout`}>
              {t('buttons.sign-out')}
            </a>
          </>
        )}
      </div>
    );
  }
}

NavLinks.propTypes = propTypes;
NavLinks.displayName = 'NavLinks';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(NavLinks));
