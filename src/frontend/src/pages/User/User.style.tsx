import styled from 'styled-components/macro'
import {
  BannerPage,
  bgTextColor,
  backgroundColorDark,
  primaryColor,
  backgroundColorLight,
  inactiveColor,
  counterColor,
  textColor,
} from 'styles'

export const UserStyled = styled(BannerPage)``

export const UserCenter = styled.div`
  text-align: center;
`

export const UserTitle = styled.div`
  display: inline-block;
  margin: 5px 0 25px 0;
`

export const UserName = styled.div`
  font-size: 48px;
  line-height: 48px;
  font-weight: bold;
  margin: 0 auto;
  text-transform: uppercase;
  color: ${bgTextColor};
`

export const UserBanner = styled.div`
  display: grid;
  grid-template-columns: calc(50vw - 110px) 220px calc(50vw - 110px);
`

export const UserLeft = styled.div`
  width: 100%;
  height: 239px;
  background-image: url('/images/bg-slice.svg');
`

export const UserMiddle = styled.div`
  width: 220px;
  height: 239px;
  background-image: url('/images/bg-center.svg');
`

export const UserRight = styled.div`
  width: 100%;
  height: 239px;
  background-image: url('/images/bg-slice.svg');
`

export const UserButtonsContainer = styled.div`
  background-color: ${backgroundColorDark};
  padding: 10px 0;
`

export const UserButtons = styled.div`
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 50px;
  grid-gap: 10px;
  height: 50px;
`

export const UserButton = styled.div`
  background-color: ${backgroundColorLight};
  text-align: center;
  border-bottom: 2px solid ${inactiveColor};
  cursor: pointer;
  display: flex;

  &.selected {
    border-bottom: 2px solid ${primaryColor};
  }
`

export const UserButtonInner = styled.div`
  display: grid;
  grid-template-columns: fit-content(50%) fit-content(50%) fit-content(50%);
  grid-gap: 20px;
  margin: auto;

  > svg {
    margin: 11px 0;
    height: 24px;
    width: 24px;
    stroke: ${textColor};
  }
`

export const UserButtonText = styled.div`
  font-weight: 600;
  line-height: 48px;
`

export const UserButtonCounter = styled.div`
  color: ${counterColor};
  line-height: 48px;
`

export const UserContent = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 10px;
  background-color: ${backgroundColorDark};
`
