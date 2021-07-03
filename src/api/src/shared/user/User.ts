import { IsBoolean, IsDate, IsEmail, IsEnum, IsMongoId, IsOptional, Length, Matches } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Index, Property } from '../../helpers/typegoose'
import { UserRole } from './UserRole'

@Index({ moderationStatus: 1 })
export class User {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, unique: true, index: true })
  @Length(2, 20)
  @Matches(/^[a-zA-Z0-9_]*$/, { message: 'Username can only contain letters, numbers and underscores' })
  username!: string

  @Property({ required: true, unique: true, index: true })
  @IsEmail()
  email!: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsBoolean()
  emailVerified?: boolean

  @Property({ required: true })
  hashedPassword!: string

  @Property({ nullable: true, optional: true })
  @IsOptional()
  @IsEnum(UserRole)
  userRole?: UserRole

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const UserModel = getModel(User, { schemaOptions: { timestamps: true } })
