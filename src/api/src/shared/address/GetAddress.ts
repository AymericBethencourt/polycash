import { Expose } from 'class-transformer'

export class GetAddressInputs {
  @Expose()
  username!: string
}

export class GetAddressOutputs {
  @Expose()
  address!: string
}
