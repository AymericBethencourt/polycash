import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'
import { Coin } from 'shared/coin/Coin'
import { SetWalletInputs } from 'shared/coin/SetWallet'
import { v4 as uuidv4 } from 'uuid'

export const GET_WALLET_REQUEST = 'GET_WALLET_REQUEST'
export const GET_WALLET_COMMIT = 'GET_WALLET_COMMIT'
export const GET_WALLET_ROLLBACK = 'GET_WALLET_ROLLBACK'

export const getWallet = () => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_WALLET_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/coin/get-wallet`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: {},
        },
        commit: {
          type: GET_WALLET_COMMIT,
          meta: {
            thunks: [prepDisplay()],
          },
        },
        rollback: { type: GET_WALLET_ROLLBACK },
      },
    },
  })
}

export const SET_WALLET_REQUEST = 'SET_WALLET_REQUEST'
export const SET_WALLET_COMMIT = 'SET_WALLET_COMMIT'
export const SET_WALLET_ROLLBACK = 'SET_WALLET_ROLLBACK'

export const setWallet = ({ wallet }: SetWalletInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  console.log(wallet)
  dispatch({
    type: SET_WALLET_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/coin/set-wallet`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { wallet },
        },
        commit: {
          type: SET_WALLET_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Wallet updated!', 'Thanks')],
          },
        },
        rollback: { type: SET_WALLET_ROLLBACK },
      },
    },
  })
}

export const ADD_REMOVE_COIN = 'ADD_REMOVE_COIN'

export const addRemoveCoin = (coinIndex: number) => (dispatch: any, getState: any) => {
  const state: State = getState()
  let newWallet: Coin[] = JSON.parse(JSON.stringify(state.wallet.wallet))
  if (coinIndex === newWallet.length - 1) {
    newWallet.push({
      uuid: uuidv4(),
      ticker: '',
      network: '',
      address: '',
      balanceCoin: undefined,
      balanceUsd: undefined,
      loadingBalance: false,
    })
  } else {
    newWallet = newWallet.filter((_, index) => index !== coinIndex)
  }

  dispatch({
    type: ADD_REMOVE_COIN,
    wallet: newWallet,
  })
}

export const EDIT_COIN = 'EDIT_COIN'

export const editCoin = (coinIndex: number, coin: Coin) => (dispatch: any, getState: any) => {
  const state: State = getState()
  let newWallet: Coin[] = JSON.parse(JSON.stringify(state.wallet.wallet))
  newWallet[coinIndex] = coin

  dispatch({
    type: EDIT_COIN,
    wallet: newWallet,
  })
}

export const PREP_DISPLAY = 'PREP_DISPLAY'

export const prepDisplay = () => (dispatch: any, getState: any) => {
  const state: State = getState()
  let newWallet: Coin[] = JSON.parse(JSON.stringify(state.wallet.wallet))
  if (newWallet.length === 0)
    newWallet.push({
      uuid: uuidv4(),
      ticker: '',
      network: '',
      address: '',
      balanceCoin: undefined,
      balanceUsd: undefined,
      loadingBalance: false,
    })

  dispatch({
    type: ADD_REMOVE_COIN,
    wallet: newWallet,
  })
}
