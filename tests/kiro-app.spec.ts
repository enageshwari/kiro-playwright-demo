import { test, expect } from '@playwright/test';
import { KiroAppPage } from './pages/KiroAppPage';

test.describe('Kiro Web App — UI Tests', () => {
  let appPage: KiroAppPage;

  test.beforeEach(async ({ page }) => {
    appPage = new KiroAppPage(page);
    await appPage.goto();
  });

  test('should display the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Kiro App');
  });

  test('should display the main heading', async () => {
    await expect(appPage.heading).toHaveText('Welcome to Kiro App');
  });

  test('should show placeholder text in the name input', async () => {
    await expect(appPage.nameInput).toHaveAttribute('placeholder', 'Enter your name');
  });

  test('should show greeting when a name is submitted via button', async () => {
    await appPage.submitName('Nageshwari');
    await expect(appPage.greetingOutput).toHaveText('Hello, Nageshwari!');
  });

  test('should show greeting when a name is submitted via Enter key', async () => {
    await appPage.submitNameWithEnter('Kiro');
    await expect(appPage.greetingOutput).toHaveText('Hello, Kiro!');
  });

  test('should not display greeting when input is empty', async () => {
    await appPage.clearAndSubmit();
    await expect(appPage.greetingOutput).toHaveText('');
  });

  test('should update greeting when a different name is submitted', async () => {
    await appPage.submitName('Alice');
    await expect(appPage.greetingOutput).toHaveText('Hello, Alice!');

    await appPage.submitName('Bob');
    await expect(appPage.greetingOutput).toHaveText('Hello, Bob!');
  });

  test('should trim whitespace and not greet for whitespace-only input', async () => {
    await appPage.submitName('   ');
    await expect(appPage.greetingOutput).toHaveText('');
  });
});
