import { Buy } from 'pages/Buy/Buy'
import { Create } from 'pages/Create/Create'
import { Home } from 'pages/Home/Home'
import { Link } from 'pages/Link/Link'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export const AppRoutes = ({ location }: any) => (
  <Switch location={location}>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/create">
      <Create />
    </Route>
    <Route exact path="/buy">
      <Buy />
    </Route>
    <Route exact path="/link">
      <Link />
    </Route>
  </Switch>
)
