import * as jsonwebtoken from 'jsonwebtoken'
import { Context } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { JwtDecoded } from '../../../shared/user/JwtDecoded'
import { User, UserModel } from '../../../shared/user/User'

interface OptionalAuthenticate {
  (ctx: Context): Promise<User | undefined>
}

export const optionalAuthenticate: OptionalAuthenticate = async (ctx) => {
  const bearerToken = ctx.request.headers ? ctx.request.headers.authorization : undefined
  if (!bearerToken) return undefined

  const jwt: Jwt = bearerToken.replace('Bearer ', '')

  const jwtDecoded: JwtDecoded = jsonwebtoken.decode(jwt) as JwtDecoded
  if(!jwtDecoded) return undefined

  const user: User = (await UserModel.findOne({ _id: jwtDecoded._id }).lean()) as User
  if(!user) return undefined

  return user
}
