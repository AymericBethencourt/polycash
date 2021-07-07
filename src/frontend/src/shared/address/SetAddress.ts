import { Expose } from 'class-transformer'

export class SetAddressInputs {
  @Expose()
  username!: string

  @Expose()
  url!: string
}

export class SetAddressOutputs {}
