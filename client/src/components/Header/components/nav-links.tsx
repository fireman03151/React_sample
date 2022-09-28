/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  faCheckSquare,
  faHeart,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment, createRef } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import envData from '../../../../../config/env.json';
import {
  availableLangs,
  LangNames,
  LangCodes,
  hiddenLangs
} from '../../../../../config/i18n/all-langs';
import { hardGoTo as navigate } from '../../../redux';
import { updateUserFlag } from '../../../redux/settings';
import createLanguageRedirect from '../../create-language-redirect';
import { Link } from '../../helpers';
import { Themes } from '../../settings/theme';
import LanguageGlobe from '../../../assets/icons/language-globe';

interface NavigationLocationApi {
  clientLocale: string;
  radioLocation: string;
  apiLocation: string;
}

const { clientLocale, radioLocation, apiLocation } =
  envData as NavigationLocationApi;

const locales = availableLangs.client.filter(
  lang => !hiddenLangs.includes(lang)
);

interface NavlinkStates {
  arg: Record<string, unknown>;
}

export interface NavLinksProps {
  displayMenu: boolean;
  isLanguageMenuDisplayed: boolean;
  fetchState: { pending: boolean };
  i18n: Record<string, unknown>;
  t: TFunction;
  hideMenu: () => void;
  toggleNightMode: (theme: Themes) => Themes;
  user?: {
    isDonating: boolean;
    username: string;
    theme: Themes;
  };
  navigate?: (location: string) => void;
  showLanguageMenu: (elementToFocus: HTMLButtonElement) => void;
  hideLanguageMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
}

const mapDispatchToProps = {
  navigate,
  toggleNightMode: (theme: Themes) => updateUserFlag({ theme })
};

export class NavLinks extends Component<NavLinksProps, NavlinkStates> {
  static displayName: string;
  langButtonRef: React.RefObject<HTMLButtonElement>;
  firstLangOptionRef: React.RefObject<HTMLButtonElement>;
  lastLangOptionRef: React.RefObject<HTMLButtonElement>;

  constructor(props: NavLinksProps) {
    super(props);
    this.langButtonRef = createRef();
    this.firstLangOptionRef = createRef();
    this.lastLangOptionRef = createRef();
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleLanguageMenuKeyDown = this.handleLanguageMenuKeyDown.bind(this);
    this.handleLanguageButtonClick = this.handleLanguageButtonClick.bind(this);
    this.handleLanguageButtonKeyDown =
      this.handleLanguageButtonKeyDown.bind(this);
    this.handleMenuKeyDown = this.handleMenuKeyDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  toggleTheme(
    currentTheme = Themes.Default,
    toggleNightMode: (theme: Themes) => Themes
  ) {
    toggleNightMode(
      currentTheme === Themes.Night ? Themes.Default : Themes.Night
    );
  }

  getPreviousMenuItem(target: HTMLButtonElement): HTMLButtonElement {
    const { menuButtonRef } = this.props;
    const previousSibling =
      target?.closest('.nav-list > li')?.previousElementSibling;
    return previousSibling?.querySelector('a, button') ?? menuButtonRef.current;
  }

  handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    interface LanguageChange {
      hideMenu: (() => void) | undefined;
      hideLanguageMenu: (() => void) | undefined;
      menuButtonRef: React.RefObject<HTMLButtonElement>;
      navigate?: (pathProp: string) => void;
    }

    const {
      hideMenu,
      hideLanguageMenu,
      menuButtonRef,
      navigate
    }: LanguageChange = this.props;

    const newLanguage = event.currentTarget.dataset.value as string;
    // If user selected cancel then close menu and put focus on button
    if (newLanguage === 'exit-lang-menu') {
      // Set focus to language button first so we don't lose focus
      // for screen readers.
      this.langButtonRef.current?.focus();
      hideLanguageMenu();
      return;
    }
    // Put focus on menu button first so we don't lose focus
    // for screen readers.
    menuButtonRef.current?.focus();
    hideMenu();
    // If user selected the current language then we just close the menu
    if (newLanguage === clientLocale) {
      return;
    }
    const path = createLanguageRedirect({
      clientLocale,
      lang: newLanguage
    });
    if (typeof navigate !== 'undefined') {
      return navigate(path);
    }
  };

  handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    const { menuButtonRef, hideMenu } = this.props;
    if (event.key === 'Escape') {
      menuButtonRef.current?.focus();
      hideMenu();
      event.preventDefault();
    }
  };

  handleLanguageButtonClick = (): void => {
    const { isLanguageMenuDisplayed, hideLanguageMenu, showLanguageMenu } =
      this.props;
    if (isLanguageMenuDisplayed) {
      hideLanguageMenu();
    } else {
      showLanguageMenu(this.firstLangOptionRef.current);
    }
  };

  handleLanguageButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const { menuButtonRef, showLanguageMenu, hideMenu } = this.props;

    interface DoKeyPressProp {
      Escape: () => void;
      ArrowDown: () => void;
      ArrowUp: () => void;
    }

    // eslint naming convention should be ignored in key press function, because following the name convention harms accessiblity.

    const DoKeyPress: DoKeyPressProp = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Escape: () => {
        menuButtonRef.current?.focus();
        hideMenu();
        event.preventDefault();
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ArrowDown: () => {
        showLanguageMenu(this.firstLangOptionRef.current);
        event.preventDefault();
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ArrowUp: () => {
        showLanguageMenu(this.lastLangOptionRef.current);
        event.preventDefault();
      }
    };
    DoKeyPress[event.key]?.();
  };

  handleLanguageMenuKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    const { hideLanguageMenu, hideMenu } = this.props;
    const focusFirstLanguageMenuItem = () => {
      this.firstLangOptionRef.current?.focus();
      event.preventDefault();
    };
    const focusLastLanguageMenuItem = () => {
      this.lastLangOptionRef.current?.focus();
      event.preventDefault();
    };
    const DoKeyPress = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Tab: () => {
        if (!event.shiftKey) {
          // Let the Tab work as normal.
          hideLanguageMenu();
          // Close the menu if focus is now outside of the menu. This will
          // happen when there is no Sign Out menu item.
          setTimeout(() => {
            const currentlyFocusedElement = document.activeElement;
            if (
              currentlyFocusedElement &&
              !currentlyFocusedElement.closest('.nav-list')
            ) {
              hideMenu();
            }
          }, 200);
          return;
        }
        // Because FF adds an extra Tab stop to the lang menu (because it
        // is scrollable) we need to manually focus the previous menu item.
        this.getPreviousMenuItem(this.langButtonRef.current).focus();
        hideLanguageMenu();
        event.preventDefault();
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ArrowUp: () => {
        const ArrowUpItemToFocus =
          event.target === this.firstLangOptionRef.current
            ? this.lastLangOptionRef.current
            : (event.currentTarget.parentNode?.previousSibling
                ?.firstChild as HTMLElement);
        ArrowUpItemToFocus?.focus();
        event.preventDefault();
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ArrowDown: () => {
        const ArrowDownItemToFocus =
          event.target === this.lastLangOptionRef.current
            ? this.firstLangOptionRef.current
            : (event.currentTarget.parentNode?.nextSibling
                ?.firstChild as HTMLElement);
        ArrowDownItemToFocus?.focus();
        event.preventDefault();
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Escape: () => {
        // Set focus to language button first so we don't lose focus
        // for screen readers.
        this.langButtonRef.current?.focus();
        hideLanguageMenu();
        event.preventDefault();
      },
      Home: focusFirstLanguageMenuItem,
      PageUp: focusFirstLanguageMenuItem,
      End: focusLastLanguageMenuItem,
      PageDown: focusLastLanguageMenuItem
    };
    DoKeyPress[event.key]?.();
  };

  // Added to the last item in the nav menu. Will close the menu if
  // the user Tabs out of the menu.
  handleBlur = (event: React.FocusEvent<HTMLButtonElement>): void => {
    const { hideMenu, menuButtonRef } = this.props;
    if (
      event.relatedTarget &&
      !event.relatedTarget.closest('.nav-list') &&
      event.relatedTarget !== menuButtonRef.current
    ) {
      hideMenu();
    }
  };

  render() {
    const {
      displayMenu,
      isLanguageMenuDisplayed,
      fetchState,
      t,
      toggleNightMode,
      user: { isDonating = false, username, theme }
    }: NavLinksProps = this.props;

    const { pending } = fetchState;

    return pending ? (
      <div className='nav-skeleton' />
    ) : (
      <ul
        aria-labelledby='toggle-button-nav'
        className={`nav-list${displayMenu ? ' display-menu' : ''}${
          isLanguageMenuDisplayed ? ' display-lang-menu' : ''
        }`}
      >
        {isDonating ? (
          <li key='donate'>
            <div className='nav-link nav-link-flex nav-link-header'>
              <span>{t('donate.thanks')}</span>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </li>
        ) : (
          <li key='donate'>
            <Link
              className='nav-link'
              onKeyDown={this.handleMenuKeyDown}
              sameTab={false}
              to='/donate'
            >
              {t('buttons.donate')}
            </Link>
          </li>
        )}
        <li key='learn'>
          <Link
            className='nav-link'
            onKeyDown={this.handleMenuKeyDown}
            to='/learn'
          >
            {t('buttons.curriculum')}
          </Link>
        </li>
        {username && (
          <Fragment key='profile-settings'>
            <li key='profile'>
              <Link
                className='nav-link'
                onKeyDown={this.handleMenuKeyDown}
                sameTab={false}
                to={`/${username as string}`}
              >
                {t('buttons.profile')}
              </Link>
            </li>
            <li key='settings'>
              <Link
                className='nav-link'
                onKeyDown={this.handleMenuKeyDown}
                sameTab={false}
                to={`/settings`}
              >
                {t('buttons.settings')}
              </Link>
            </li>
          </Fragment>
        )}
        <li key='forum' className='nav-line'>
          <Link
            className='nav-link nav-link-flex'
            external={true}
            onKeyDown={this.handleMenuKeyDown}
            sameTab={false}
            to={t('links:nav.forum')}
          >
            <span>{t('buttons.forum')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </li>
        <li key='news'>
          <Link
            className='nav-link nav-link-flex'
            external={true}
            onKeyDown={this.handleMenuKeyDown}
            sameTab={false}
            to={t('links:nav.news')}
          >
            <span>{t('buttons.news')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </li>
        <li key='radio'>
          <Link
            className='nav-link nav-link-flex'
            external={true}
            onKeyDown={this.handleMenuKeyDown}
            sameTab={false}
            to={radioLocation}
          >
            <span>{t('buttons.radio')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
        </li>
        <li className='nav-line' key='theme'>
          <button
            {...(!username && { 'aria-describedby': 'theme-sign-in' })}
            aria-disabled={!username}
            aria-pressed={theme === Themes.Night ? 'true' : 'false'}
            className={
              'nav-link nav-link-flex' + (!username ? ' nav-link-header' : '')
            }
            onClick={() => {
              if (username) {
                this.toggleTheme(String(theme) as Themes, toggleNightMode);
              }
            }}
            onKeyDown={this.handleMenuKeyDown}
          >
            {username ? (
              <>
                <span>{t('settings.labels.night-mode')}</span>
                {theme === Themes.Night ? (
                  <FontAwesomeIcon icon={faCheckSquare} />
                ) : (
                  <FontAwesomeIcon icon={faSquare} />
                )}
              </>
            ) : (
              <Fragment key='night-mode'>
                <span className='sr-only'>
                  {t('settings.labels.night-mode')}
                </span>
                <span
                  aria-hidden='true'
                  className='nav-link-dull'
                  id='theme-sign-in'
                >
                  {t('misc.change-theme')}
                </span>
              </Fragment>
            )}
          </button>
        </li>
        <li key='lang-menu'>
          <div className='nav-lang' key='language-dropdown'>
            <button
              aria-controls='nav-lang-menu'
              {...(isLanguageMenuDisplayed && { 'aria-expanded': true })}
              aria-haspopup='true'
              className='nav-link nav-lang-button'
              id='nav-lang-button'
              onBlur={this.handleBlur}
              onClick={this.handleLanguageButtonClick}
              onKeyDown={this.handleLanguageButtonKeyDown}
              ref={this.langButtonRef}
            >
              <span>{t('buttons.change-language')}</span>
              <LanguageGlobe />
            </button>
            <ul
              aria-labelledby='nav-lang-button'
              className={'nav-lang-menu' + (username ? ' logged-in' : '')}
              id='nav-lang-menu'
              role='menu'
            >
              <li key='lang-menu-exit' role='none'>
                <button
                  className='nav-link nav-lang-menu-option'
                  data-value='exit-lang-menu'
                  onClick={this.handleLanguageChange}
                  onKeyDown={this.handleLanguageMenuKeyDown}
                  ref={this.firstLangOptionRef}
                  role='menuitem'
                  tabIndex='-1'
                >
                  {t('buttons.cancel-change')}
                </button>
              </li>
              {locales.map((lang, index) => (
                <li key={'lang-' + lang} role='none'>
                  <button
                    {...(clientLocale === lang && { 'aria-current': true })}
                    className='nav-link nav-lang-menu-option'
                    data-value={lang}
                    {...(LangCodes[lang] && {
                      lang: LangCodes[lang] as string
                    })}
                    onClick={this.handleLanguageChange}
                    onKeyDown={this.handleLanguageMenuKeyDown}
                    {...(index === locales.length - 1 && {
                      ref: this.lastLangOptionRef
                    })}
                    role='menuitem'
                    tabIndex='-1'
                  >
                    {LangNames[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {username && (
          <Fragment key='signout-frag'>
            <li className='nav-line' key='sign-out'>
              <a
                className='nav-link nav-link-signout'
                href={`${apiLocation}/signout`}
                onBlur={this.handleBlur}
                onKeyDown={this.handleMenuKeyDown}
              >
                {t('buttons.sign-out')}
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    );
  }
}

NavLinks.displayName = 'NavLinks';

export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
