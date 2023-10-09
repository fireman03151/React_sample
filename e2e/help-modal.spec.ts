import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/write-your-first-c-sharp-code'
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Help Modal component', () => {
  test('renders the modal correctly', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.buttons['ask-for-help'] })
      .click();

    await expect(
      page.getByRole('heading', {
        name: translations.buttons['ask-for-help'],
        exact: true
      })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', {
        name: `If you've already tried the Read-Search-Ask method, then you can ask for help on the freeCodeCamp forum.`
      })
    ).toBeVisible();
    await expect(
      page.getByText(
        `Before making a new post please see if your question has already been answered on the forum.`
      )
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: translations.buttons['create-post'] })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.cancel })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.close })
    ).toBeVisible();
  });

  test('Create Post button closes help modal and creates new page with forum url', async ({
    context,
    page
  }) => {
    await page
      .getByRole('button', { name: translations.buttons['ask-for-help'] })
      .click();

    const newPagePromise = context.waitForEvent('page');

    await page
      .getByRole('button', {
        name: translations.buttons['create-post']
      })
      .click();

    await expect(
      page.getByRole('heading', {
        name: translations.buttons['ask-for-help'],
        exact: true
      })
    ).not.toBeVisible();

    const newPage = await newPagePromise;
    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(/.*forum\.freecodecamp.org.*/);
  });

  test('Cancel button closes the modal', async ({ page }) => {
    await page
      .getByRole('button', { name: translations.buttons['ask-for-help'] })
      .click();

    await page
      .getByRole('button', { name: translations.buttons.cancel })
      .click();

    await expect(
      page.getByRole('heading', {
        name: translations.buttons['ask-for-help'],
        exact: true
      })
    ).not.toBeVisible();
  });
});
