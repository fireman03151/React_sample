import { test, expect } from '@playwright/test';

import translations from '../client/i18n/locales/english/translations.json';

const certs = [
  {
    name: 'Responsive Web Design',
    url: '/certification/certifieduser/responsive-web-design'
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    url: '/certification/certifieduser/javascript-algorithms-and-data-structures'
  },
  {
    name: 'Front End Development Libraries',
    url: '/certification/certifieduser/front-end-development-libraries'
  },
  {
    name: 'Data Visualization',
    url: '/certification/certifieduser/data-visualization'
  },
  {
    name: 'Relational Database',
    url: '/certification/certifieduser/relational-database-v8'
  },
  {
    name: 'Back End Development and APIs',
    url: '/certification/certifieduser/back-end-development-and-apis'
  },
  {
    name: 'Quality Assurance',
    url: '/certification/certifieduser/quality-assurance-v7'
  },
  {
    name: 'Scientific Computing with Python',
    url: '/certification/certifieduser/scientific-computing-with-python-v7'
  },
  {
    name: 'Data Analysis with Python',
    url: '/certification/certifieduser/data-analysis-with-python-v7'
  },
  {
    name: 'Information Security',
    url: '/certification/certifieduser/information-security-v7'
  },
  {
    name: 'Machine Learning with Python',
    url: '/certification/certifieduser/machine-learning-with-python-v7'
  },
  {
    name: 'College Algebra with Python',
    url: '/certification/certifieduser/college-algebra-with-python-v8'
  },
  {
    name: 'Foundational C# with Microsoft',
    url: '/certification/certifieduser/foundational-c-sharp-with-microsoft'
  }
];

const legacyCerts = [
  { name: 'Front End', url: '/certification/certifieduser/legacy-front-end' },
  { name: 'Back End', url: '/certification/certifieduser/legacy-back-end' },
  {
    name: 'Data Visualization',
    url: '/certification/certifieduser/legacy-data-visualization'
  },
  {
    name: 'Information Security and Quality Assurance',
    url: '/certification/certifieduser/information-security-and-quality-assurance'
  },
  { name: 'Full Stack', url: '/certification/certifieduser/full-stack' }
];

test.use({ storageState: 'playwright/.auth/certified-user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/certifieduser');

  // The following line is required if you're running the test in local development
  // await page.getByRole('button', { name: 'Preview custom 404 page' }).click();
});

test.describe('Profile component', () => {
  test('renders the camper profile correctly', async ({ page }) => {
    // There are multiple avatars on the page, one is in the navbar, one is in the page body.
    // The avatar we are interested in is the last one in the list
    const avatar = page
      .getByRole('img', {
        name: translations.icons.avatar,
        includeHidden: true // the svg has `aria-hidden` set to true
      })
      .last();

    // "visible" as in the element is in the DOM, but it is hidden from non-sighted users
    await expect(avatar).toBeVisible();

    await expect(
      page.getByRole('heading', { name: '@certifieduser' })
    ).toBeVisible();
    await expect(page.getByText('Full Stack User')).toBeVisible();
    await expect(page.getByText('Joined November 2020')).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Top Contributor' })
    ).toBeVisible();
    await expect(page.getByText('2019')).toBeVisible();
  });

  test('renders total points correctly', async ({ page }) => {
    await expect(page.getByText('Number of points: 1')).toBeVisible();
  });

  // The date range computation in this test doesn't match the implementation code,
  // and causes the test to fail in some cases.
  // We would want to mock system time to keep the test stable,
  // but Playwright currently doesn't offer a built-in mechanism for this.
  // Ref: https://github.com/microsoft/playwright/issues/6347
  test.skip('renders the heat map correctly', async ({ page }) => {
    const today = new Date();
    const currentMonth = today.toLocaleString('en-US', { month: 'short' });
    const sixMonthsAgo = new Date(today.setMonth(today.getMonth() - 6));
    const sixMonthsAgoMonth = sixMonthsAgo.toLocaleString('en-US', {
      month: 'short'
    });
    const dateRange = `${sixMonthsAgoMonth} ${sixMonthsAgo.getFullYear()} - ${currentMonth} ${today.getFullYear()}`;

    await expect(page.getByText(dateRange)).toBeVisible();
    await expect(page.locator('.react-calendar-heatmap')).toBeVisible();
    // Streak should be a non-negative integer
    await expect(page.getByText(/Longest Streak: [0-9]\d*$/)).toBeVisible();
    await expect(page.getByText(/Current Streak: [0-9]\d*$/)).toBeVisible();
  });

  test('displays certifications correctly', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'freeCodeCamp Certifications' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Legacy Certifications' })
    ).toBeVisible();

    for (const cert of certs) {
      const link = page
        .getByRole('link', {
          name: `View ${cert.name} Certification`
        })
        .first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', cert.url);
    }

    for (const cert of legacyCerts) {
      const link = page
        .getByRole('link', {
          name: `View ${cert.name} Certification`
        })
        .last();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', cert.url);
    }
  });

  test('should not show portfolio when empty', async ({ page }) => {
    // @certifieduser doesn't have portfolio information
    await expect(
      page.getByText(translations.profile.portfolio)
    ).not.toBeVisible();
  });

  test('displays the timeline correctly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Timeline' })).toBeVisible();
    await expect(page.getByRole('table')).toBeVisible();
    await expect(
      page.getByRole('navigation', { name: 'Timeline Pagination' })
    ).toBeVisible();
  });
});
