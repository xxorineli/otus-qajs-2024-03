// Определяет функцию для создания пользователя
async function createUser(userName, password) {
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  return response
}

// Определяет набор тестов
describe('bookstore.demoqa API tests with Jest - createUser', () => {
  // Тест кейс на создание пользователя с ошибкой: логин уже используется
  test('should fail to create a user with a username that already exists', async () => {
    // Определяет пользовательские данные с уже используемым логином
    // Заменить актуальным логином, который уже используется
    // Заменить желаемым паролем
    const response = await createUser('existing_user', 'Password123!')
    // Ожидает ответа со статус кодом 406 (Not Acceptable) или иным кодом ошибки,
    // обозначающим, что логин уже используется
    expect(response.status).toBe(406)
    // Определяет полученные в ответе на POST /Account/v1/User данные
    const body = await response.json()
    // Опционально, определяет тело ответа на наличие конкретного error message
    // Зависит от актуальности API и формата error message
    expect(body.code).toBe('1204')
    expect(body.message).toBe('User exists!')
  })
  // Тест кейс на создание пользователя с ошибкой: не учтены требования к созданию пароля
  test('should fail to create a user with an incorrect password', async () => {
    // Определяет пользовательские данные с новыми логином и паролем
    // Заменить валидным логином
    // Заменить невалидным паролем
    const response = await createUser('new_user', 'incorrect_password')
    // Ожидает ответа со статус кодом, который обозначает ошибку в пароле
    // Например, 400 (Bad Request) или иной код, который используется API
    // для обозначения ошибки валидации пароля
    expect(response.status).toBe(400)
    // Определяет полученные в ответе на POST /Account/v1/User данные
    const body = await response.json()
    // Опционально, определяет тело ответа на наличие конкретного error message
    // Зависит от актуальности API и формата error message
    expect(body.code).toBe('1300')
    expect(body.message).toBe(
      "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.",
    )
  })
  // Тест кейс на успешное создание пользователя
  test('should pass to create a user with a valid username and password', async () => {
    // Определяет пользовательские данные с новыми логином и паролем
    // Заменить валидным логином
    // Заменить валидным паролем
    const response = await createUser('new_user', 'Password123!')
    // Ожидает ответа со статус кодом 201 (Created),
    // обозначающим, что пользователь успешно создан
    expect(response.status).toBe(201)
    // Определяет полученные в ответе на POST /Account/v1/User данные
    const body = await response.json()
    // Опционально, определяет тело ответа на наличие конкретного error message
    // Зависит от актуальности API и формата error message
    expect(body.username).toBe('new_user')
  })
})

// Определяет функцию для генерации токена
async function generateToken(userName, password) {
  const response = await fetch(
    'https://bookstore.demoqa.com/Account/v1/GenerateToken',
    {
      method: 'POST',
      body: JSON.stringify({
        userName,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  )
  return response
}

// Определяет набор тестов
describe('bookstore.demoqa API tests with Jest - generateToken', () => {
  // Тест кейс на генерацию токена с ошибкой: неверные учетные данные
  test('should fail to generate a token with incorrect credentials', async () => {
    // Определяет пользовательские данные с неверными учетными данными
    // Заменить желаемым логином и паролем
    const response = await generateToken('incorrect_user', 'Password123!')
    // Ожидает ответа со статус кодом 200 (OK) или иным кодом ошибки,
    // обозначающим, что учетные данные неверны
    expect(response.status).toBe(200)
    // Определяет полученные в ответе на POST /Account/v1/GenerateToken данные
    const body = await response.json()
    // Опционально, определяет тело ответа на наличие конкретного error message
    // Зависит от актуальности API и формата error message
    expect(body.token).toBe(null)
    expect(body.expires).toBe(null)
    expect(body.status).toBe('Failed')
    expect(body.result).toBe('User authorization failed.')
  })
  // Тест кейс на успешную генерацию токена: верные учетные данные
  test('should pass to generate a token with correct credentials', async () => {
    // Определяет пользовательские данные с верными учетными данными
    // Заменить желаемым логином и паролем
    const response = await generateToken('correct_user', 'Password123!')
    // Ожидает ответа со статус кодом 200 (OK) или иным кодом,
    // обозначающим, что учетные данные верны
    expect(response.status).toBe(200)
    // Определяет полученные в ответе на POST /Account/v1/GenerateToken данные
    const body = await response.json()
    // Опционально, определяет тело ответа на наличие конкретного error message
    // Зависит от актуальности API и формата error message
    expect(body.token).toBe('string')
    expect(body.expires).toBe('string')
    expect(body.status).toBe('Success')
    expect(body.result).toBe('User authorized successfully.')
  })
})
