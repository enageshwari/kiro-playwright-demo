import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on',
  },
  projects: [
    // Desktop — runs UI and API tests only
    {
      name: 'chromium',
      testIgnore: '**/mobile.spec.ts',
      use: { ...devices['Desktop Chrome'] },
    },

    // Mobile emulation — runs all tests including mobile-specific ones
    {
      name: 'Mobile Chrome - Pixel 5',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Chrome - iPhone 12',
      use: { ...devices['iPhone 12'], defaultBrowserType: 'chromium' },
    },
  ],
  webServer: {
    command: 'node dist/server.js',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
