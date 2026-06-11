import { test as base } from '@playwright/test';
import { KiroAppPage } from './pages/KiroAppPage';

/**
 * Custom Playwright fixtures.
 *
 * Extends the base `test` with an `appPage` fixture that:
 * - Creates a KiroAppPage instance
 * - Navigates to the app
 * - Hands it to the test
 * - Automatically tears down after the test completes
 *
 * Usage in tests:
 *   import { test } from '../fixtures';
 *   test('example', async ({ appPage }) => { ... });
 */

type AppFixtures = {
  appPage: KiroAppPage;
};

export const test = base.extend<AppFixtures>({
  appPage: async ({ page }, use) => {
    // Setup: create page object and navigate
    const appPage = new KiroAppPage(page);
    await appPage.goto();

    // Hand the ready-to-use object to the test
    await use(appPage);

    // Teardown: runs after every test, even on failure
    // Add cleanup here if needed (e.g. clear cookies, reset state)
  },
});

export { expect } from '@playwright/test';
