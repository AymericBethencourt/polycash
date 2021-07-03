import { Expose } from 'class-transformer'
import { Length } from 'class-validator'

export class GetTokenInputs {}

export class GetTokenOutputs {
  @Expose()
  @Length(2, 100)
  uploadUrl!: string

  @Expose()
  @Length(2, 100)
  uploadAuthorizationToken!: string
}
