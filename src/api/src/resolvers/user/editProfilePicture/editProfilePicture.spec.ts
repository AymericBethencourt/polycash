import { Context, Next } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { editProfilePicture } from './editProfilePicture'

let user: User
let jwt: Jwt
let next: Next

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
    next = created.next
  })

  it('can change their profile picture', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          profilePicture: 'https://b2.polycash.net/file/polycash/profpics/polycash.png',
        },
      },
    } as Context

    await editProfilePicture(ctx, next)

    expect(ctx.status).toEqual(200)

    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
