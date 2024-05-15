import deleteUnauthUserService from '../framework/services/bookstoreDeleteUnauthUserService.js'
import deleteUserService from '../framework/services/bookstoreDeleteUserService.js'
import { deleteUserConfig } from '../framework/config'

describe('bookstore.demoqa API tests with Jest - a user deletion', () => {
  test('should fail to delete unauthorized user', async () => {
    const response = await deleteUnauthUserService({
      userId: deleteUserConfig.userId,
    })

    expect(response.status).toBe(401)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('User not authorized!')
  })
  // test('should pass to delete authorized user', async () => {
  //   const response = await deleteUserService({
  //     userId: deleteUserConfig.userId,
  //   })
  //
  //   expect(response.status).toBe(200)
  // })
})