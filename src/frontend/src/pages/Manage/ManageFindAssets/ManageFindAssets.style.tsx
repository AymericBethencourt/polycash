import styled from 'styled-components/macro'

export const ManageFindAssetsStyled = styled.div``

export const ManageFindAssetsInput = styled.div`
  display: grid;
  grid-template-columns: auto 130px;
  grid-gap: 10px;
  width: 100%;
`

export const ManageFindAssetsList = styled.div`
  display: block;
`

export const ManageFindAssetsListElem = styled.div`
  font-size: 16px;
  line-height: 19px;

  div {
    display: inline-block;
    margin-right: 10px;

    &:nth-child(1) {
      color: #68e52c;
      font-weight: 900;
    }

    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(2) {
      color: #fff;
    }
  }
`
