// ts-check
import { expect } from '@playwright/test'
import { BasicPage } from './BasicPage'

// export function AuthPage({ page }) {
//   const visit = async () => {
//     await page.goto('https://next-realworld.vercel.app/user/register'),
//     // await page.getByText('Sign Up')
//     await expect(page.locator('h1')).toHaveText('Sign Up')
//   }

export class AuthPage extends BasicPage {
  url = 'https://next-realworld.vercel.app/user/register'

  // constructor({ page }) {
  //   super({ page })
  // }

  constructor(params) {
    // если параметры страницы не меняются и наследуемся от BasicPage
    super(params)

    this.fillUsername = this.page.locator("//input[@type='text']")
  }

  async visit() {
    await super.visit()
    await expect(this.page.locator('h1')).toHaveText('Sign Up')
  }

  // const fillUsername = async username => {
  //   await page.locator("//input[@type='text']").click()
  //   await page.locator("//input[@type='text']").fill(username)
  // }

  async fillUsername(username) {
    // await this.page.locator("//input[@type='text']").click()
    // await this.page.locator("//input[@type='text']").fill(username)
    await this.fillUsername.click()
    await this.fillUsername.fill(username) // вариант с конструктором, если локатор переиспользуется
  }

  // const fillEmail = async email => {
  //   await page.locator("//input[@type='email']").click()
  //   await page.locator("//input[@type='email']").fill(email)
  // }

  async fillEmail(email) {
    await this.page.locator("//input[@type='email']").click()
    await this.page.locator("//input[@type='email']").fill(email)
  }

  // const fillPassword = async password => {
  //   await page.locator("//input[@type='password']").click()
  //   await page.locator("//input[@type='password']").fill(password)
  // }

  async fillPassword(password) {
    await this.page.locator("//input[@type='password']").click()
    await this.page.locator("//input[@type='password']").fill(password)
  }

  // const submitForm = async () => {
  //   await page.locator("//button[@type='submit']").click()
  // }

  async submitForm() {
    await this.page.locator("//button[@type='submit']").click()
  }

  // const reg = async ({ username, email, password }) => {
  //   await visit()
  //   await fillUsername(username)
  //   await fillEmail(email)
  //   await fillPassword(password)
  //   await submitForm()
  // }

  async reg({ username, email, password }) {
    await this.visit()
    await this.fillUsername(username)
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.submitForm()
  }

  // return {
  //   visit,
  //   fillUsername,
  //   fillPassword,
  //   fillEmail,
  //   submitForm,
  //   reg,
  // }
}
