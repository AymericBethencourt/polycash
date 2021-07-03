import { Context, Next } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { getToken } from './getToken'

let user: User
let jwt: Jwt
let next: Next

describe('Upload token', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
    next = created.next
  })

  it('can be fetched from B2', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {},
      },
    } as Context

    await getToken(ctx, next)

    expect(ctx.status).toEqual(200)
    expect(ctx.body.uploadUrl).toBeDefined()
    expect(ctx.body.uploadAuthorizationToken).toBeDefined()

    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
