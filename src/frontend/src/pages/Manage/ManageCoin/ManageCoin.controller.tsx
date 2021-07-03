import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import { ManageCoinView } from './ManageCoin.view'
import { useSelector } from 'react-redux'
import { State } from 'reducers'
import { Jwt } from 'shared/user/Jwt'
import { Coin } from 'shared/coin/Coin'

type ManageCoinProps = {
  coin: Coin
  coinIndex: number
  walletSize: number
  addRemoveCallback: (coinIndex: number) => void
  editCallback: (coinIndex: number, coin: Coin) => void
}

export const ManageCoin = ({ coin, coinIndex, walletSize, addRemoveCallback, editCallback }: ManageCoinProps) => {
  const jwt: Jwt | undefined = useSelector((state: State) => state.auth.jwt)

  async function getBalance() {
    editCallback(coinIndex, {
      ...coin,
      loadingBalance: true,
      balanceCoin: 0,
    })

    try {
      const response: any = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URL}/coin/get-balance`,
        headers: {
          authorization: 'Bearer ' + jwt,
          'Content-Type': 'application/json',
        },
        data: {
          ticker: coin.ticker,
          network: coin.network,
          address: coin.address,
        },
      })
      if (response && response?.data)
        editCallback(coinIndex, {
          ...coin,
          balanceCoin: response?.data?.balanceCoin,
          balanceUsd: response?.data?.balanceUsd,
          loadingBalance: false,
        })
    } catch (e) {
      editCallback(coinIndex, {
        ...coin,
        balanceCoin: 0,
        balanceUsd: 0,
        loadingBalance: false,
      })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (coin.ticker && coin.network && coin.address && !coin.balanceCoin && !coin.loadingBalance) getBalance()
    }, coinIndex * 1000)
  }, [])

  return (
    <ManageCoinView
      coin={coin}
      coinIndex={coinIndex}
      walletSize={walletSize}
      addRemoveCallback={addRemoveCallback}
      editCallback={editCallback}
      getBalance={getBalance}
    />
  )
}

ManageCoin.propTypes = {
  coin: PropTypes.object,
  coinIndex: PropTypes.number,
  walletSize: PropTypes.number,
}

ManageCoin.defaultProps = {}
