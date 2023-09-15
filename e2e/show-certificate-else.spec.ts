import { test, expect, type Page } from '@playwright/test';

test.describe('Show certification else', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/certification/certifieduser/responsive-web-design');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('while viewing someone else, should display the certificate information', async () => {
    await expect(page.getByTestId('successful-completion')).toBeVisible();
    await expect(page.getByTestId('certification-title')).toBeVisible();
    await expect(page.getByTestId('issue-date')).toContainText(
      'Developer Certification on August 3, 2018'
    );
  });

  test('while viewing someone else, should not render a LinkedIn button and Twitter button', async () => {
    await expect(page.getByTestId('linkedin-share-btn')).toBeHidden();
    await expect(page.getByTestId('twitter-share-btn')).toBeHidden();
  });
});
