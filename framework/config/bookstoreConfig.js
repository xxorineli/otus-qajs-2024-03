// // Конфиг только для чтения
// // Определяет тестовые данные
// // Object.freeze используется, чтобы запретить изменения конфига
// // Чтобы задать значения по-умолчанию используется оператор ??
// export default Object.freeze({
//   baseURL: process.env.TEST_BOOKSTORE_BASE_API_URL ?? 'https://bookstore.demoqa.com',
//   userName: process.env.TEST_BOOKSTORE_USERNAME,
//   password: process.env.TEST_BOOKSTORE_PASSWORD,
//   userID: process.env.TEST_BOOKSTORE_USER_ID,
// })

const bookstoreConfig = {
  baseURL: 'https://bookstore.demoqa.com',
  userName: 'otus-qajs-zorin',
  password: 'Password123!',
  userID: 'f7781367-df56-4545-81d6-8337399e27df',
}

export default bookstoreConfig
