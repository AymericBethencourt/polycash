import styled from 'styled-components/macro'
// prettier-ignore
import { backgroundColorDark, backgroundColorLight, buttonColor, descTextColor, subTextColor, textColor, upColor } from 'styles'

export const LinkStyled = styled.div`
  width: 540px;
  max-width: 100vw;
  margin: 130px auto 20px auto;
  margin-top: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  position: relative;
`

export const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-gap: 10px;
  margin-top: 20px;

  > svg {
    width: 40px;
    height: 40px;
    stroke: ${textColor};
  }
`

export const LinkInputGrid = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  grid-gap: 10px;
  margin-top: 30px;
`
