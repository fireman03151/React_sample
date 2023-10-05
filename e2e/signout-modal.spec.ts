import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Signout Modal component', () => {
  test('renders the modal correctly', async ({ page }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();
    await page
      .getByRole('button', { name: translations.buttons['sign-out'] })
      .click();

    await expect(page.getByText(translations.signout.heading)).toBeVisible();
    await expect(page.getByText(translations.signout.p1)).toBeVisible();
    await expect(page.getByText(translations.signout.p2)).toBeVisible();

    await expect(
      page.getByRole('button', { name: translations.signout.nevermind })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.signout.certain })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: translations.buttons.close })
    ).toBeVisible();
  });

  test('signs out and redirects to /learn after user confirms they want to sign out', async ({
    page
  }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();
    await page
      .getByRole('button', { name: translations.buttons['sign-out'] })
      .click();

    await page
      .getByRole('button', { name: translations.signout.certain })
      .click();

    await expect(page).toHaveURL(/.*\/learn\/?$/);
  });

  test('closes modal after user cancels signing out', async ({ page }) => {
    await page.getByRole('button', { name: translations.buttons.menu }).click();
    await page
      .getByRole('button', { name: translations.buttons['sign-out'] })
      .click();

    await page
      .getByRole('button', { name: translations.signout.nevermind })
      .click();

    await expect(page).toHaveURL('/');
    await expect(
      page.getByText(translations.signout.heading)
    ).not.toBeVisible();
  });
});
