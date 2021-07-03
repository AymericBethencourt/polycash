import styled from 'styled-components/macro'

// prettier-ignore
import { backgroundColorLight, FadeInFromLeft, FadeInFromTop, FullPage, subTextColor } from '../../styles'

export const SignUpStyled = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 130px auto 20px auto;
  margin-top: 120px;
`

export const SignUpWrapper = styled.div`
  width: 360px;
  margin: auto;
`

export const SignUpSeparator = styled.div`
  height: 10px;
`

export const SignUpTitle = styled(FadeInFromTop)``

export const SignUpForm = styled(FadeInFromLeft)``

export const SignUpPasswordStrengthGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 90%;
  margin: auto;
`

export const SignUpPasswordStrength = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: ${backgroundColorLight};
  margin-bottom: 20px;
`

export const SignUpPasswordStrengthText = styled.div`
  font-size: 13px;
  line-height: 6px;

  > div {
    float: right;
  }
`

export const SignUpFooter = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: auto 150px;
  grid-gap: 10px;
  line-height: 40px;
  margin-top: 20px;

  > a {
    color: ${subTextColor} !important;
  }
`

export const SignUpFuse = styled.div`
  display: grid;
  grid-template-columns: auto 80px;
  grid-gap: 10px;
`

export const SignUppolycash = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
`
