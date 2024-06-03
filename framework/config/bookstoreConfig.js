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
  userId: '897d4291-9b5d-4d29-bc71-3dd13b83be33',
}

export default bookstoreConfig
