import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'C:/temp/pw-results',
  testMatch: ['**/*.test.ts'],
  fullyParallel: false,
  retries: 0,
  reporter: [["dot"], ["json", { outputFile: "jsonReports/jsonreport.json" }], ["html", { open: "never" }]],
  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
    //headless: false,
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'on',
    // browserName: 'chromium',
    // ...devices['Desktop Chrome'],
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
