import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import { Coin } from 'shared/coin/Coin'
import { addRemoveCoin, editCoin, getWallet, prepDisplay, setWallet } from './Manage.actions'

import { ManageView } from './Manage.view'

export const Manage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)
  const wallet = useSelector((state: State) => state.wallet.wallet)

  const addRemoveCallback = (coinIndex: number) => {
    dispatch(addRemoveCoin(coinIndex))
  }

  const editCallback = (coinIndex: number, coin: Coin) => {
    dispatch(editCoin(coinIndex, coin))
  }

  const saveCallback = () => {
    dispatch(setWallet({ wallet }))
  }

  useEffect(() => {
    dispatch(getWallet())
    setTimeout(() => {
      dispatch(prepDisplay())
    }, 2000)
  }, [])

  return (
    <ManageView
      user={user}
      wallet={wallet}
      addRemoveCallback={addRemoveCallback}
      editCallback={editCallback}
      saveCallback={saveCallback}
    />
  )
}
