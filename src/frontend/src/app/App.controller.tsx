import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'

import { Header } from './App.components/Header/Header.controller'
import { ProgressBar } from './App.components/ProgressBar/ProgressBar.controller'
import { Toaster } from './App.components/Toaster/Toaster.controller'
import { history } from './App.store'
import { AppView } from './App.view'

export const App = () => (
  <ConnectedRouter history={history}>
    <Header />
    <AppView />
    <Toaster />
    <ProgressBar />
  </ConnectedRouter>
)
