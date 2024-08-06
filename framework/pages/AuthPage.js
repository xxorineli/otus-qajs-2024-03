// ts-check
import { expect } from '@playwright/test'

export function AuthPage({ page }) {
  const visit = async () => {
    await page.goto('https://next-realworld.vercel.app/user/register')
    // await page.getByText('Sign Up')
    await expect(page.locator('h1')).toHaveText('Sign Up')
  }

  const fillUsername = async username => {
    await page.locator("//input[@type='text']").click()
    await page.locator("//input[@type='text']").fill(username)
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

  const reg = async ({ username, email, password }) => {
    await visit()
    await fillUsername(username)
    await fillEmail(email)
    await fillPassword(password)
    await submitForm()
  }

  return {
    visit,
    fillUsername,
    fillPassword,
    fillEmail,
    submitForm,
    reg,
  }
}
