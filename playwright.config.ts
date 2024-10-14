import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/playwright',
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    baseURL: 'http://localhost:8989',
    trace: 'on-first-retry',
  },
})
