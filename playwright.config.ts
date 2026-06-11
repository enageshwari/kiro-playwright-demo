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
    // Desktop Chrome — full suite except mobile-specific tests
    {
      name: 'chromium',
      testIgnore: '**/mobile.spec.ts',
      use: { ...devices['Desktop Chrome'] },
    },

    // Desktop Firefox — UI and API tests (no visual snapshots, they are browser-specific)
    {
      name: 'firefox',
      testIgnore: ['**/mobile.spec.ts', '**/visual.spec.ts'],
      use: { ...devices['Desktop Firefox'] },
    },

    // Mobile emulation — runs all tests including mobile-specific ones
    // Visual snapshots excluded as mobile baselines differ from desktop
    {
      name: 'Mobile Chrome - Pixel 5',
      testIgnore: '**/visual.spec.ts',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Chrome - iPhone 12',
      testIgnore: '**/visual.spec.ts',
      use: { ...devices['iPhone 12'], defaultBrowserType: 'chromium' },
    },
  ],
  webServer: {
    command: 'node dist/server.js',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
