export type Coin = {
  uuid: string
  ticker: string
  network: string
  address: string
  balanceCoin?: number
  balanceUsd?: number
  loadingBalance?: boolean
}
