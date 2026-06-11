import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility tests using axe-core.
 * Checks the app against WCAG 2.1 AA standards automatically.
 * Any violation will fail the test with the element, rule, and impact reported.
 */
test.describe('Kiro Web App — Accessibility Tests', () => {

  test('should have no WCAG violations on initial page load', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no WCAG violations after greeting is displayed', async ({ appPage, page }) => {
    await appPage.submitName('Nageshwari');
    await expect(appPage.greetingOutput).toHaveText('Hello, Nageshwari!');

    // Re-scan after DOM update to catch any dynamic accessibility issues
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no WCAG violations when input is focused', async ({ appPage, page }) => {
    await appPage.nameInput.focus();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
