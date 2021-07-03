import { Expose } from 'class-transformer'
import { Coin } from './Coin'

export class GetWalletInputs {}

export class GetWalletOutputs {
  @Expose()
  wallet!: Coin[]
}
