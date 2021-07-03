import { Length, Matches, IsUrl } from 'class-validator'
import { Expose } from 'class-transformer'
import { PublicUser } from './PublicUser'

export class EditProfilePictureInputs {
  @Expose()
  @Length(8, 100)
  @IsUrl()
  @Matches(/^https:\/\/b2.polycash.net\/file\/[a-zA-Z0-9_.\/-]*/, {
    message: 'Image URL must be from polycash.net',
  })
  profilePicture!: string
}

export class EditProfilePictureOutputs {
  @Expose()
  user!: PublicUser
}
