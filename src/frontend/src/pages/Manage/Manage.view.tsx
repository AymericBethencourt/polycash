import { Button } from 'app/App.components/Button/Button.controller'
import * as React from 'react'
import { Coin } from 'shared/coin/Coin'
import { PublicUser } from 'shared/user/PublicUser'

//prettier-ignore
import { ManageHeader, ManageHeaderBalance, ManageHeaderFindAssets, ManageHeaderpolycash, ManageStyled, ManageUpdate, ManageWallet } from './Manage.style'
import { ManageCoin } from './ManageCoin/ManageCoin.controller'
import { ManageFindAssets } from './ManageFindAssets/ManageFindAssets.controller'

type ManageViewProps = {
  user?: PublicUser
  wallet: Coin[]
  addRemoveCallback: (coinIndex: number) => void
  editCallback: (coinIndex: number, coin: Coin) => void
  saveCallback: () => void
}

export const ManageView = ({ user, wallet, addRemoveCallback, editCallback, saveCallback }: ManageViewProps) => {
  let totalBalance: number | undefined = 0
  if (wallet && wallet.length > 0)
    totalBalance = wallet
      .map((coin) => coin.balanceUsd)
      .reduce((accumulator, balanceUsd) => (accumulator || 0) + (balanceUsd || 0))
  if (!totalBalance) totalBalance = 0

  return (
    <ManageStyled>
      <ManageHeader>
        <ManageHeaderpolycash>{`${user?.username}$polycash.net`}</ManageHeaderpolycash>
        <ManageHeaderBalance>{`$${totalBalance?.toFixed(2)}`}</ManageHeaderBalance>
      </ManageHeader>
      <ManageWallet>
        {wallet.map((coin: Coin, coinIndex, wallet) => (
          <ManageCoin
            key={coin.uuid}
            coin={coin}
            coinIndex={coinIndex}
            walletSize={wallet.length}
            addRemoveCallback={addRemoveCallback}
            editCallback={editCallback}
          />
        ))}
      </ManageWallet>
      <ManageUpdate>
        <Button type="button" text="Save" icon="check" loading={false} onClick={() => saveCallback()} />
      </ManageUpdate>
      <ManageHeaderFindAssets>Find common assets with another PayID</ManageHeaderFindAssets>
      <ManageFindAssets />
    </ManageStyled>
  )
}
