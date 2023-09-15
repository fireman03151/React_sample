import { test, expect, type Page } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.describe('Show certification own', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/certification/certifieduser/responsive-web-design');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should display the certificate details', async () => {
    await expect(page.getByTestId('successful-completion')).toBeVisible();
    await expect(page.getByTestId('certification-title')).toBeVisible();
    await expect(page.getByTestId('issue-date')).toContainText(
      'Developer Certification on August 3, 2018'
    );
  });

  test('should render and display LinkedIn and Twitter buttons', async () => {
    await expect(page.getByTestId('linkedin-share-btn')).toBeVisible();
    await expect(page.getByTestId('twitter-share-btn')).toBeVisible();
  });
});
