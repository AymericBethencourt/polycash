import { ButtonLoadingIcon } from 'app/App.components/Button/Button.style'
import { Input } from 'app/App.components/Input/Input.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Coin } from 'shared/coin/Coin'

//prettier-ignore
import { ManageCoinAddRemove, ManageCoinAddress, ManageCoinBalance, ManageCoinLoadingBalance, ManageCoinNetwork, ManageCoinStyled, ManageCoinTicker } from './ManageCoin.style'

type ManageCoinViewProps = {
  coin: Coin
  coinIndex: number
  walletSize: number
  addRemoveCallback: (coinIndex: number) => void
  editCallback: (coinIndex: number, coin: Coin) => void
  getBalance: () => void
}

export const ManageCoinView = ({
  coin,
  coinIndex,
  walletSize,
  addRemoveCallback,
  editCallback,
  getBalance,
}: ManageCoinViewProps) => {
  return (
    <ManageCoinStyled>
      <ManageCoinAddRemove onClick={() => addRemoveCallback(coinIndex)}>
        {coinIndex === walletSize - 1 ? (
          <svg>
            <use xlinkHref="/icons/sprites.svg#plus" />
          </svg>
        ) : (
          <svg>
            <use xlinkHref="/icons/sprites.svg#cross" />
          </svg>
        )}
      </ManageCoinAddRemove>
      <ManageCoinTicker>
        <Input
          icon="coin"
          name="ticker"
          placeholder="Coin"
          type="text"
          onChange={(e) =>
            editCallback(coinIndex, {
              ...coin,
              ticker: e.target.value,
            })
          }
          value={coin.ticker}
          onBlur={() => {}}
          inputStatus={undefined}
          errorMessage={undefined}
        />
      </ManageCoinTicker>
      <ManageCoinNetwork>
        <Input
          icon="network"
          name="network"
          placeholder="Network"
          type="text"
          onChange={(e) =>
            editCallback(coinIndex, {
              ...coin,
              network: e.target.value,
            })
          }
          value={coin.network}
          onBlur={() => {}}
          inputStatus={undefined}
          errorMessage={undefined}
        />
      </ManageCoinNetwork>
      <ManageCoinAddress>
        <Input
          icon="home"
          name="address"
          placeholder="Address"
          type="text"
          onChange={(e) =>
            editCallback(coinIndex, {
              ...coin,
              address: e.target.value,
            })
          }
          value={coin.address}
          onBlur={() => getBalance()}
          inputStatus={undefined}
          errorMessage={undefined}
        />
      </ManageCoinAddress>
      {!coin.loadingBalance ? (
        <ManageCoinBalance>
          <div>{`${coin.balanceCoin?.toFixed(7) || '0.0000000'} ${coin.ticker || '---'}`}&nbsp;≈&nbsp;</div>
          <div>{`$${coin.balanceUsd?.toFixed(2) || '0.00'}`}</div>
        </ManageCoinBalance>
      ) : (
        <ManageCoinLoadingBalance>
          <ButtonLoadingIcon>
            <use xlinkHref="/icons/sprites.svg#circle" />
          </ButtonLoadingIcon>
        </ManageCoinLoadingBalance>
      )}
    </ManageCoinStyled>
  )
}

ManageCoinView.propTypes = {
  coin: PropTypes.object,
  coinIndex: PropTypes.number,
  walletSize: PropTypes.number,
}

ManageCoinView.defaultProps = {}
