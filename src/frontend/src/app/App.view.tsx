import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import { AppMeta } from './App.meta'
import { AppStyled, AppWrapper } from './App.style'
import { AppTransitions } from './App.transitions'
import { AppRoutes } from './App.routes'

export const AppView = () => {
  let previousLocation = window.location.pathname
  return (
    <AppStyled>
      <AppMeta />
      <Suspense fallback={<div>Loading...</div>}>
        <Route
          render={({ location }: any) => {
            let reverse = false
            if (location.pathname === '/' && previousLocation.includes('/forum/')) reverse = true
            previousLocation = location.pathname
            return (
              <AppWrapper>
                <AppTransitions pageKey={location.key} reverse={reverse}>
                  <AppRoutes location={location} />
                </AppTransitions>
              </AppWrapper>
            )
          }}
        />
      </Suspense>
    </AppStyled>
  )
}
