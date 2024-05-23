import config from '../framework/config/bookstoreConfig.js'
import authService from '../framework/services/bookstoreAuthService.js'

describe('проверка генерации токена', () => {
  test('успех при наличии верных учетных данных', async () => {
    const response = await authService.generateToken({
      userName: config.userName,
      password: config.password,
    })
    expect(response.status).toBe(200)
    expect(response.data.result).toBe('User authorized successfully.')
    expect(response.data.token).toBeDefined()
  })
  test('ошибка при отсутствии пароля', async () => {
    const response = await authService.generateToken({
      userName: config.userName,
      password: '',
    })
    expect(response.status).toBe(400)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('UserName and Password required.')
  })
})

describe('проверка авторизации', () => {
  test('успех при наличии верных учетных данных', async () => {
    const response = await authService.authorized({
      userName: config.userName,
      password: config.password,
    })
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
  })
  test('ошибка при отсутствии учетных данных', async () => {
    const response = await authService.authorized({
      userName: '',
      password: '',
    })
    expect(response.status).toBe(400)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('UserName and Password required.')
  })
})
