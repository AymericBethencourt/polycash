import { RESET, RESTORE } from 'app/App.actions'
import { ADD_REMOVE_COIN, EDIT_COIN, GET_WALLET_COMMIT, GET_WALLET_REQUEST, GET_WALLET_ROLLBACK, SET_WALLET_COMMIT, SET_WALLET_REQUEST, SET_WALLET_ROLLBACK } from 'pages/Manage/Manage.actions'
import { Coin } from 'shared/coin/Coin'


export interface WalletState {
  loading?: boolean
  wallet: Coin[]
}

const walletDefaultState: WalletState = {
  loading: false,
  wallet: []
}

export function wallet(state = walletDefaultState, action: any): WalletState {
  switch (action.type) {
    case RESET: {
      return walletDefaultState
    }
    case RESTORE: {
      return state
    }
    case GET_WALLET_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_WALLET_COMMIT: {
      return {
        ...state,
        loading: false,
        wallet: action.payload.wallet
      }
    }
    case GET_WALLET_ROLLBACK: {
      return {
        ...state,
        loading: false,
      }
    }
    case SET_WALLET_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case SET_WALLET_COMMIT: {
      return {
        ...state,
        loading: false,
      }
    }
    case SET_WALLET_ROLLBACK: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADD_REMOVE_COIN: {
      return {
        ...state,
        wallet: action.wallet,
      }
    }
    case EDIT_COIN: {
      return {
        ...state,
        wallet: action.wallet,
      }
    }
    default:
      return state
  }
}
