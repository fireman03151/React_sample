import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';
import { availableLangs, hiddenLangs, LangNames } from '../shared/config/i18n';
import links from '../client/i18n/locales/english/links.json';

const headerComponentElements = {
  skipContent: 'header-skip-content',
  examNav: 'header-exam-nav',
  examNavLogo: 'header-exam-nav-microsoft-logo',
  universalNav: 'header-universal-nav',
  universalNavLogo: 'header-universal-nav-logo',
  toggleLangButton: 'header-toggle-lang-button',
  languageList: 'header-lang-list',
  languageButton: 'header-lang-list-option',
  menuButton: 'header-menu-button',
  menu: 'header-menu',
  signInButton: 'header-sign-in-button'
} as const;

const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header Component', () => {
  test('Should contain a skip link', async ({ page }) => {
    const skipContent = page.getByTestId(headerComponentElements.skipContent);
    await expect(skipContent).toBeVisible();
    await expect(skipContent).toHaveAttribute('href', '#content-start');
  });

  test('Renders universal nav by default', async ({ page }) => {
    const universalNavigation = page.getByTestId(
      headerComponentElements.universalNav
    );
    const universalNavigationLogo = page.getByTestId(
      headerComponentElements.universalNavLogo
    );
    await expect(universalNavigation).toBeVisible();
    await expect(universalNavigationLogo).toBeVisible();
    await expect(universalNavigationLogo).toHaveAttribute('href', '/learn');
  });

  test('Renders exam nav for Foundational C# with Microsoft exam', async ({
    page
  }) => {
    await page.goto(examUrl);
    await page
      .getByRole('button', {
        name: translations.buttons['click-start-exam']
      })
      .click();
    await expect(page).toHaveURL(examUrl);
    await expect(
      page.getByTestId(headerComponentElements.examNav)
    ).toBeVisible();
    await expect(
      page.getByTestId(headerComponentElements.examNavLogo)
    ).toBeVisible();
  });

  test('Should display search in header on desktop and in menu on mobile', async ({
    page,
    isMobile
  }) => {
    const searchInput = page.getByLabel(translations.search.label);
    const menuButton = page.getByTestId(headerComponentElements.menuButton);

    if (isMobile) {
      await expect(searchInput).toBeHidden();
      await menuButton.click();
      await expect(searchInput).toBeVisible();
    } else {
      await expect(searchInput).toBeVisible();
    }
  });

  test('Clicking the "Change Language" button should open the language list', async ({
    page
  }) => {
    const toggleLangButton = page.getByTestId(
      headerComponentElements.toggleLangButton
    );
    await expect(toggleLangButton).toBeVisible();
    await toggleLangButton.click();
    const langList = page.getByTestId(headerComponentElements.languageList);
    await expect(langList).toBeVisible();
  });

  test('The language list should contain a button for each available language', async ({
    page
  }) => {
    const locales = availableLangs.client.filter(
      lang => !hiddenLangs.includes(lang)
    );

    const toggleLangButton = page.getByTestId(
      headerComponentElements.toggleLangButton
    );
    await expect(toggleLangButton).toBeVisible();
    await toggleLangButton.click();
    const langList = page.getByTestId(headerComponentElements.languageList);
    await expect(langList).toBeVisible();

    const langButtons = page.getByTestId(
      headerComponentElements.languageButton
    );
    await expect(langButtons).toHaveCount(locales.length);

    for (let i = 0; i < locales.length; i++) {
      const btn = langButtons.nth(i);
      await expect(btn).toContainText(LangNames[locales[i]]);
    }
  });

  test('Clicking the menu button should open the menu', async ({ page }) => {
    const menuButton = page.getByTestId(headerComponentElements.menuButton);
    const menu = page.getByTestId(headerComponentElements.menu);
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(menu).toBeVisible();
  });

  test('The menu should contain links to: donate, curriculum, forum, news, radio, and contribute', async ({
    page
  }) => {
    const menuButton = page.getByTestId(headerComponentElements.menuButton);
    const menu = page.getByTestId(headerComponentElements.menu);
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(menu).toBeVisible();

    const menuLinks = [
      {
        name: translations.buttons.donate,
        href: '/donate'
      },
      {
        name: translations.buttons.curriculum,
        href: '/learn'
      },
      {
        name: translations.buttons.forum,
        href: links.nav.forum
      },
      {
        name: translations.buttons.news,
        href: links.nav.news
      },
      {
        name: translations.buttons.radio,
        href: process.env.RADIO_LOCATION || 'https://coderadio.freecodecamp.org'
      },
      {
        name: translations.buttons.contribute,
        href: links.nav.contribute
      }
    ];

    for (const menuLink of menuLinks) {
      const link = menu.getByRole('link', { name: menuLink.name });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', menuLink.href);
    }
  });

  test('The Sign In button should redirect to api/signin', async ({
    browser
  }) => {
    // Sign out user in order to test Sign In button
    const context = await browser.newContext({
      storageState: { cookies: [], origins: [] }
    });
    const page = await context.newPage();
    await page.goto('/');

    const signInButton = page.getByRole('link', {
      name: translations.buttons['sign-in']
    });

    const apiLocation = process.env.API_LOCATION || 'http://localhost:3000';

    await expect(signInButton).toHaveAttribute('href', `${apiLocation}/signin`);
  });
});
