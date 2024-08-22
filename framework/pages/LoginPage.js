import { expect } from '@playwright/test'

export function LoginPage({ page }) {
  const visit = async () => {
    await page.goto('https://next-realworld.vercel.app/user/login')
    await expect(page.locator('h1')).toHaveText('Sign in')
  }

  const fillEmail = async email => {
    await page.locator("//input[@type='email']").click()
    await page.locator("//input[@type='email']").fill(email)
  }

  const fillPassword = async password => {
    await page.locator("//input[@type='password']").click()
    await page.locator("//input[@type='password']").fill(password)
  }

  const submitForm = async () => {
    await page.locator("//button[@type='submit']").click()
  }

  const login = async ({ email, password }) => {
    await visit()
    await fillEmail(email)
    await fillPassword(password)
    await submitForm()
  }

  return {
    visit,
    fillPassword,
    fillEmail,
    submitForm,
    login,
  }
}
