import * as React from 'react'
import { Link } from 'react-router-dom'

// prettier-ignore
import { HeaderStyled } from './Header.style'

export const HeaderView = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <img alt="polycash.net" src="images/logo.svg" />
      </Link>
    </HeaderStyled>
  )
}
