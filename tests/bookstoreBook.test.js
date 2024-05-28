import config from '../framework/config/bookstoreConfig.js'
import authService from '../framework/services/bookstoreAuthService.js'
import bookService from '../framework/services/bookstoreBookService.js'
import { books } from '../framework/fixtures/listOfBooksFixture.json'

describe('проверка библиотеки пользователя', () => {
  const userId = config.userId
  const [book1, book2] = books
  const isbn = book1.isbn

  let token

  beforeAll(async () => {
    token = await authService.getTokenFromCache({
      userName: config.userName,
      password: config.password,
    })
  })

  test('добавление книг', async () => {
    const response = await bookService.addListOfBooks({
      userId,
      isbns: [isbn],
      token,
    })
    expect(response.status).toBe(201)
    expect(response.data).toEqual({ books: [{ isbn }] })
  })
  test('замена книги', async () => {
    const response = await bookService.replaceBook({
      userId,
      fromIsbn: isbn,
      toIsbn: book2.isbn,
      token,
    })
    expect(response.status).toBe(200)
    expect(response.data).toEqual({
      userId,
      username: config.userName,
      books: [book2, book2],
    })
  })
  test('запрос книги', async () => {
    const response = await bookService.getBookInfo({
      isbn,
    })
    expect(response.status).toBe(200)
    expect(response.data).toEqual(book1)
  })
  test('удаление книги', async () => {
    const response = await bookService.deleteBook({
      userId,
      toIsbn: book2.isbn,
      token,
    })
    expect(response.status).toBe(204)
    expect(response.data).toBeTruthy()
  })
})
