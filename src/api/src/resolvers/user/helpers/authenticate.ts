import { Context } from 'koa'

import { ResponseError } from '../../../shared/mongo/ResponseError'
import { Jwt } from '../../../shared/user/Jwt'
import { JwtPayload } from '../../../shared/user/JwtPayload'
import { User, UserModel } from '../../../shared/user/User'
import { UserRole } from '../../../shared/user/UserRole'
import { verifySignedJwt } from './verifySignedJwt'

interface Authenticate {
  (ctx: Context, accessLevel?: UserRole): Promise<User>
}

export const authenticate: Authenticate = async (ctx, accessLevel) => {
  const bearerToken = ctx.request.headers ? ctx.request.headers.authorization : undefined
  if (!bearerToken) throw new ResponseError(401, 'No bearer token present in request')

  const jwt: Jwt = bearerToken.replace('Bearer ', '')

  const jwtPayload: JwtPayload = verifySignedJwt(jwt)

  const user: User = (await UserModel.findOne({ _id: jwtPayload._id }).lean()) as User
  if (!user) throw new ResponseError(404, 'User not found')

  if (accessLevel === UserRole.ADMIN && user.userRole !== UserRole.ADMIN)
    throw new ResponseError(401, 'You need admin access for this')
    
  if (accessLevel === UserRole.MODERATOR && !(user.userRole === UserRole.ADMIN || user.userRole === UserRole.MODERATOR))
    throw new ResponseError(401, 'You need moderator access for this')

  return user
}
