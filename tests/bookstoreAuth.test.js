import authConfig from '../framework/config/bookstoreAuthConfig.js'
import authService from '../framework/services/bookstoreAuthService.js'

describe('bookstore.demoqa API tests with Jest - an authorization', () => {
  test('should pass to authorize with correct credentials', async () => {
    const response = await authService({
      userName: authConfig.userName,
      password: authConfig.password,
    })
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
  })
  test('should fail to authorize without credentials', async () => {
    const response = await authService({
      userName: authConfig.userNameEmpty,
      password: authConfig.passwordEmpty,
    })
    expect(response.status).toBe(400)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('UserName and Password required.')
  })
  test('should fail to authorize with incorrect credentials', async () => {
    const response = await authService({
      userName: authConfig.userNameIncorrect,
      password: authConfig.passwordIncorrect,
    })
    expect(response.status).toBe(404)
    expect(response.data.code).toBe('1207')
    expect(response.data.message).toBe('User not found!')
  })
})