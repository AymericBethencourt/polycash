import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { auth, AuthState } from './auth'
import { loading, LoadingState } from './loading'
import { progressBar, ProgressBarState } from './progressBar'
import { serviceWorker, ServiceWorkerState } from './serviceWorker'
import { toaster, ToasterState } from './toaster'
import { uploader, UploaderState } from './uploader'
import { users, UsersState } from './users'
import { wallet, WalletState } from './wallet'

export const reducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    users,
    toaster,
    progressBar,
    serviceWorker,
    uploader,
    wallet
  })

export interface State {
  auth: AuthState
  loading: LoadingState
  users: UsersState
  toaster: ToasterState
  progressBar: ProgressBarState
  serviceWorker: ServiceWorkerState
  uploader: UploaderState
  wallet: WalletState
}
