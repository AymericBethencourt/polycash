import styled from 'styled-components/macro'
import { subTextColor, textColor, placeholderColor } from 'styles'

export const ManageCoinStyled = styled.div`
  display: grid;
  grid-template-columns: 28px 3fr 4fr 11fr 6fr;
  grid-gap: 20px;
`

export const ManageCoinAddRemove = styled.div`
  cursor: pointer;

  > svg {
    stroke: ${placeholderColor};
    height: 18px;
    width: 18px;
    margin: 11px;
  }
`

export const ManageCoinTicker = styled.div``

export const ManageCoinNetwork = styled.div``

export const ManageCoinAddress = styled.div``

export const ManageCoinBalance = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;

  div {
    display: inline-block;

    &:nth-child(1) {
      color: ${subTextColor};
    }

    &:nth-child(2) {
      color: ${textColor};
    }
  }
`

export const ManageCoinLoadingBalance = styled.div`
  margin: 10px auto;
`
