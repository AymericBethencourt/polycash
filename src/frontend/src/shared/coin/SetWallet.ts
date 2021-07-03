import { Expose } from 'class-transformer'
import { Coin } from './Coin'

export class SetWalletInputs {
  @Expose()
  wallet!: Coin[]
}

export class SetWalletOutputs {}
