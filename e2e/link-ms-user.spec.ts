import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/learn/foundational-c-sharp-with-microsoft/write-your-first-code-using-c-sharp/trophy-write-your-first-code-using-c-sharp'
  );
});

test.describe('Link MS user component (signed-out user)', () => {
  test('should display the page content with a signin CTA', async ({
    page
  }) => {
    await expect(
      page.getByRole('heading', {
        name: 'Trophy - Write Your First Code Using C#',
        level: 1
      })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: translations.learn.ms['link-header'],
        level: 2
      })
    ).toBeVisible();

    await expect(
      page.getByText(translations.learn.ms['link-signin'])
    ).toBeVisible();

    // There are 2 sign in button on the page: one in the navbar, and one in the page content
    const signInButtons = await page
      .getByRole('link', { name: translations.buttons['sign-in'] })
      .all();
    expect(signInButtons).toHaveLength(2);
  });
});

test.describe('Link MS user component (signed-in user)', () => {
  test.use({ storageState: 'playwright/.auth/certified-user.json' });

  test("should recognize the user's MS account", async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: 'Trophy - Write Your First Code Using C#',
        level: 1
      })
    ).toBeVisible();

    await expect(
      page.getByText(
        'The Microsoft account with username "certifieduser" is currently linked to your freeCodeCamp account. If this is not your Microsoft username, remove the link.'
      )
    ).toBeVisible();
  });

  test('should allow the user to unlink their MS account and display a form for re-link', async ({
    page
  }) => {
    // Intercept the endpoint to prevent `msUsername` from being deleted
    // as the deletion will cause subsequent tests to fail
    await page.route('*/**/user/ms-username', async route => {
      const json = { msUsername: null };
      await route.fulfill({ json });
    });

    const unlinkButton = page.getByRole('button', {
      name: translations.buttons['unlink-account']
    });
    await expect(unlinkButton).toBeVisible();
    await unlinkButton.click();

    await expect(
      page
        .getByRole('alert')
        .filter({ hasText: translations.flash.ms.transcript.unlinked })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: translations.learn.ms['link-header'],
        level: 2
      })
    ).toBeVisible();
    await expect(page.getByText(translations.learn.ms.unlinked)).toBeVisible();
    await expect(
      page.getByRole('listitem').filter({
        hasText:
          'Using a browser where you are logged into your Microsoft account, go to https://learn.microsoft.com/users/me/transcript'
      })
    ).toBeVisible();
    await expect(
      page
        .getByRole('listitem')
        .filter({ hasText: translations.learn.ms['link-li-2'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('listitem')
        .filter({ hasText: translations.learn.ms['link-li-3'] })
    ).toBeVisible();
    await expect(
      page
        .getByRole('listitem')
        .filter({ hasText: translations.learn.ms['link-li-4'] })
    ).toBeVisible();
    await expect(
      page.getByRole('listitem').filter({
        hasText:
          'Paste the URL into the input below, it should look similar to this: https://learn.microsoft.com/LOCALE/users/USERNAME/transcript/ID'
      })
    ).toBeVisible();
    await expect(
      page
        .getByRole('listitem')
        .filter({ hasText: translations.learn.ms['link-li-6'] })
    ).toBeVisible();

    const transcriptLinkInput = page.getByLabel(
      translations.learn.ms['transcript-label']
    );
    await expect(transcriptLinkInput).toBeVisible();
    await expect(transcriptLinkInput).toHaveAttribute(
      'placeholder',
      'https://learn.microsoft.com/en-us/users/username/transcript/transcriptId'
    );
  });
});
