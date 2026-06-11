import { test, expect } from './fixtures';

/**
 * Visual regression tests using Playwright's built-in screenshot comparison.
 *
 * First run: generates baseline screenshots in tests/snapshots/
 * Subsequent runs: compares against baseline and fails if pixels differ.
 *
 * To update baselines after intentional UI changes:
 *   npx playwright test --update-snapshots
 */
test.describe('Kiro Web App — Visual Regression Tests', () => {

  test('should match screenshot on initial page load', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('initial-load.png', {
      maxDiffPixelRatio: 0.02, // allow up to 2% pixel difference (font rendering variance)
    });
  });

  test('should match screenshot after greeting is shown', async ({ appPage, page }) => {
    await appPage.submitName('Nageshwari');
    await expect(appPage.greetingOutput).toHaveText('Hello, Nageshwari!');
    await expect(page).toHaveScreenshot('greeting-shown.png', {
      maxDiffPixelRatio: 0.02,
    });
  });

  test('should match heading element screenshot', async ({ appPage }) => {
    await expect(appPage.heading).toHaveScreenshot('heading.png');
  });
});
