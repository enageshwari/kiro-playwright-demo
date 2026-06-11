import { test, expect, devices } from '@playwright/test';
import { KiroAppPage } from './pages/KiroAppPage';

/**
 * Mobile emulation tests for the Kiro App.
 * These run on Pixel 5 and iPhone 12 viewports to verify
 * the app is fully functional on mobile devices.
 */
test.describe('Kiro Web App — Mobile Tests', () => {
  let appPage: KiroAppPage;

  test.beforeEach(async ({ page }) => {
    appPage = new KiroAppPage(page);
    await appPage.goto();
  });

  test('should display heading on mobile viewport', async () => {
    await expect(appPage.heading).toBeVisible();
    await expect(appPage.heading).toHaveText('Welcome to Kiro App');
  });

  test('should display input and button on mobile viewport', async () => {
    await expect(appPage.nameInput).toBeVisible();
    await expect(appPage.submitBtn).toBeVisible();
  });

  test('should show greeting after tap on submit button', async () => {
    await appPage.nameInput.tap();
    await appPage.nameInput.fill('Nageshwari');
    await appPage.submitBtn.tap();
    await expect(appPage.greetingOutput).toHaveText('Hello, Nageshwari!');
  });

  test('should not show greeting when input is empty on mobile', async () => {
    await appPage.submitBtn.tap();
    await expect(appPage.greetingOutput).toHaveText('');
  });

  test('should update greeting on re-submission on mobile', async () => {
    await appPage.nameInput.tap();
    await appPage.nameInput.fill('Alice');
    await appPage.submitBtn.tap();
    await expect(appPage.greetingOutput).toHaveText('Hello, Alice!');

    await appPage.nameInput.fill('Bob');
    await appPage.submitBtn.tap();
    await expect(appPage.greetingOutput).toHaveText('Hello, Bob!');
  });

  test('should have input field focused and keyboard-ready on tap', async ({ page }) => {
    await appPage.nameInput.tap();
    await expect(appPage.nameInput).toBeFocused();
  });

  test('should fit content within mobile viewport without horizontal scroll', async ({ page }) => {
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = page.viewportSize()?.width ?? 0;
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });
});
