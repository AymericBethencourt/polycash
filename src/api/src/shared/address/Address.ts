// prettier-ignore
import { IsDate, IsMongoId } from 'class-validator'
import { ObjectId } from 'mongodb'

import { getModel, Property } from '../../helpers/typegoose'

export class Address {
  @IsMongoId()
  readonly _id!: ObjectId

  @Property({ required: true, unique: true })
  username!: string

  @Property({ required: true })
  address!: string

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date
}

export const AddressModel = getModel(Address, { schemaOptions: { timestamps: true } })
