import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { EditProfilePictureInputs } from '../../../shared/user/EditProfilePicture'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../helpers/authenticate'
import { PublicUser } from '../../../shared/user/PublicUser'
import { toPublicUser } from '../../../helpers/toPublicUser'

export const editProfilePicture = async (ctx: Context, next: Next): Promise<void> => {
  const editProfilePictureArgs = plainToClass(EditProfilePictureInputs, ctx.request.body, {
    excludeExtraneousValues: true,
  })
  await validateOrReject(editProfilePictureArgs, { forbidUnknownValues: true }).catch(firstError)
  const { profilePicture } = editProfilePictureArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  const updatedUser: User = (await UserModel.findOneAndUpdate(
    { _id: user._id },
    { $set: { profilePicture } },
    { new: true },
  ).exec()) as User
  const publicUser: PublicUser = toPublicUser(updatedUser)

  ctx.status = 200
  ctx.body = { user: publicUser }

  await next()
}
