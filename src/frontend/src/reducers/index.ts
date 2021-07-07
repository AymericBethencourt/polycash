import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { loading, LoadingState } from './loading'
import { progressBar, ProgressBarState } from './progressBar'
import { serviceWorker, ServiceWorkerState } from './serviceWorker'
import { toaster, ToasterState } from './toaster'

export const reducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    loading,
    toaster,
    progressBar,
    serviceWorker,
  })

export interface State {
  loading: LoadingState
  toaster: ToasterState
  progressBar: ProgressBarState
  serviceWorker: ServiceWorkerState
}
