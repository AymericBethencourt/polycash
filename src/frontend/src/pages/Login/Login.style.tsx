import styled from 'styled-components/macro'

import { FadeInFromLeft, FadeInFromTop, FullPage, subTextColor } from '../../styles'

export const LoginStyled = styled(FullPage)`
  margin-top: 200px;
`

export const LoginWrapper = styled.div`
  width: 360px;
  margin: auto;
`

export const LoginTitle = styled(FadeInFromTop)``

export const LoginFooter = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: auto 150px;
  grid-gap: 10px;
  line-height: 20px;
  margin-top: 20px;

  > div > a {
    color: ${subTextColor} !important;
  }
`

export const LoginForm = styled(FadeInFromLeft)``

export const LoginFuse = styled.div`
  display: grid;
  grid-template-columns: auto 80px;
  grid-gap: 10px;
`

export const Loginpolycash = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
`
