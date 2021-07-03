import * as React from 'react'
import { Link } from 'react-router-dom'

import { HomeMeta } from './Home.meta'
//prettier-ignore
import { HomeButton, HomeButtons, HomeStyled, HomeSubTitle, HomeTitle } from './Home.style'

export const Home = () => {
  return (
    <HomeStyled>
      <HomeMeta blankTitle="Home" />
      <HomeTitle>Polygon Payment Links</HomeTitle>
      <HomeSubTitle>
        Use Payment Links to sell online without a website. Create a full payment page in just a few clicks and share
        the link with your customers—no code required.
      </HomeSubTitle>
      <HomeButtons>
        <Link to="/create">
          <HomeButton>Create new Payment Link</HomeButton>
        </Link>
      </HomeButtons>
    </HomeStyled>
  )
}

Home.propTypes = {}

Home.defaultProps = {}
