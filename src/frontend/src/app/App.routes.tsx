import { Buy } from 'pages/Buy/Buy'
import { Create } from 'pages/Create/Create'
import { Error404 } from 'pages/Error404/Error404.controller'
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
    <Route>
      <Error404 />
    </Route>
  </Switch>
)
