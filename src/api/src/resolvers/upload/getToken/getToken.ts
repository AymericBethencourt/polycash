import { Context, Next } from 'koa'

import { getUploadToken } from '../../../helpers/getUploadToken'
import { GetTokenOutputs } from '../../../shared/upload/GetToken'
import { User } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../../user/helpers/authenticate'

export const getToken = async (ctx: Context, next: Next): Promise<void> => {
  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  const reponse: GetTokenOutputs = await getUploadToken()

  ctx.status = 200
  ctx.body = reponse

  await next()
}
