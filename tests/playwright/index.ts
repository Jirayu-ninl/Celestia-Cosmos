import { test, expect } from '@playwright/test'

test.describe('Full Playwright Test Suite', () => {
  // Set up any test data or configuration
  const baseURL = 'http://localhost:8989'
  const credentials = { email: 'test@theiceji.com', password: 'test_pass' }

  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseURL}/portal`)
  })

  test('User Login and Dashboard Navigation', async ({ page }) => {
    // 1. Login test
    await test.step('Enter credentials and submit login form', async () => {
      await page.fill('input[name="email"]', credentials.email)
      await page.fill('input[name="password"]', credentials.password)
      await page.click('button[type="submit"]')
    })

    // 2. Verify login success and navigate to the dashboard
    await test.step('Verify successful login and redirect to dashboard', async () => {
      await expect(page).toHaveURL(`${baseURL}/dashboard`)
      await expect(page.locator('text=Welcome')).toBeVisible()
    })

    // 3. Interact with dashboard elements
    await test.step('Navigate and interact with dashboard features', async () => {
      await page.click('text=Settings')
      await expect(page).toHaveURL(`${baseURL}/dashboard/settings`)

      // Fill out a settings form
      await page.fill('input[name="username"]', 'NewUsername')
      await page.fill('input[name="bio"]', 'This is a sample bio')
      await page.click('button[type="submit"]')

      // Verify settings were updated
      await expect(
        page.locator('text=Settings updated successfully'),
      ).toBeVisible()
    })

    // 4. API call validation within the test (if needed)
    const response = await page.request.get(`${baseURL}/api/user/profile`)
    expect(response.ok()).toBeTruthy()
    const profileData = await response.json()
    expect(profileData.email).toBe(credentials.email)
  })

  test('UI Interaction and Logout', async ({ page }) => {
    // Assuming the user is already logged in
    await page.goto(`${baseURL}/dashboard`)

    // Interact with the profile dropdown and logout
    await test.step('Navigate to profile dropdown and logout', async () => {
      await page.click('button[aria-label="Profile menu"]')
      await page.click('text=Logout')
      await expect(page).toHaveURL(`${baseURL}/login`)
    })
  })

  test.afterEach(async ({ page }) => {
    // Cleanup steps if necessary, like clearing cookies
    await page.context().clearCookies()
  })
})
