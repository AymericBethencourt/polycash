import { Length } from 'class-validator'
import { Expose } from 'class-transformer'
import { Address } from './Address'

export class CompareAssetsInputs {
  @Expose()
  @Length(2, 100)
  payId!: string
}

export class CompareAssetsOutputs {
  @Expose()
  addresses!: Address[]
}
