import { Length } from 'class-validator'
import { Expose } from 'class-transformer'

export class GetBalanceInputs {
  @Expose()
  @Length(2, 5)
  ticker!: string

  @Expose()
  @Length(2, 50)
  network!: string

  @Expose()
  @Length(2, 100)
  address!: string
}

export class GetBalanceOutputs {
  @Expose()
  balanceCoin!: number | string

  @Expose()
  balanceUsd!: number | string
}
