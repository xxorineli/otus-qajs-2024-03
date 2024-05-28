import supertest from 'supertest'
import config from '../config/bookstoreConfig'

const addListOfBooks = async ({ userId, isbns, token }) => {
  const payload = {
    userId,
    collectionOfIsbns: isbns.map(isbn => ({ isbn })),
  }

  const response = await supertest(config.baseURL)
    .post(`/BookStore/v1/Books`)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json')
    .send(payload)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const replaceBook = async ({ userId, fromIsbn, toIsbn, token }) => {
  const response = await supertest(config.baseURL)
    .put(`/BookStore/v1/Books/${fromIsbn}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId,
      isbn: toIsbn,
    })
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const getBookInfo = async ({ isbn }) => {
  const response = await supertest(config.baseURL).get(
    `/BookStore/v1/Book?ISBN=${isbn}`,
  )
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

const deleteBook = async ({ userId, toIsbn, token }) => {
  const response = await supertest(config.baseURL)
    .delete(`/BookStore/v1/Book`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId,
      isbn: toIsbn,
    })
  return {
    headers: response.headers,
    status: response.status,
    data: response.body,
  }
}

export default {
  addListOfBooks,
  replaceBook,
  getBookInfo,
  deleteBook,
}
