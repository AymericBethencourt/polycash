import styled from 'styled-components/macro'
import { primaryColor, subTextColor } from 'styles'

export const HomeStyled = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 200px auto 20px auto;
  text-align: center;

  > img {
    margin: auto;
  }
`

export const HomeTitle = styled.div`
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`

export const HomeSubTitle = styled.div`
  font-size: 18px;
  text-align: center;
  width: 80%;
  max-width: 800px;
  margin: 0 auto 30px auto;
`

export const HomeButtons = styled.div`
  margin: auto;
  width: 300px;
`

export const HomeButton = styled.div`
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-weight: 900;
  text-align: center;
  color: ${subTextColor};
  background: ${primaryColor};
  border-radius: 3px;
`

export const HomeButton2 = styled.div`
  width: 230px;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-weight: 900;
  text-align: center;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  border-radius: 3px;
`
