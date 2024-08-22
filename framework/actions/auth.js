import { LoginPage } from '../pages/LoginPage.js'
import { expect } from '@playwright/test'

export async function login({ email, password, page }) {
  const loginPage = LoginPage({ page })

  await loginPage.login({
    email,
    password,
  })

  await expect(
    page.locator('html > body > div > div > div:nth-of-type(1) > div > p'),
  ).toHaveText('A place to share your knowledge.')
}

export async function loginAdmin({ page }) {
  return login({
    email: 'root@mail.net',
    password: 'E5dPkCf7bPTnfn6q',
    page,
  })
}
