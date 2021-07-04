import styled from 'styled-components/macro'
// prettier-ignore
import { backgroundColorDark, backgroundColorLight, buttonColor, descTextColor, subTextColor, textColor } from 'styles'

export const BuyStyled = styled.div`
  width: 540px;
  max-width: 100vw;
  margin: 130px auto 20px auto;
  margin-top: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  position: relative;
`

export const BuyInputs = styled.div`
  padding-top: 344px;
  text-align: center;
`

export const InputUploadGrid = styled.div`
  display: grid;
  grid-template-columns: auto 110px;
  grid-gap: 10px;
`

export const UploaderImage = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  height: 314px;
  width: 500px;
  border-radius: 5px;
  display: block;
  overflow: hidden;
  z-index: 1;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    display: block;
  }
`

export const UploaderFileSelector = styled.div`
  > input {
    display: none;
  }
`

export const UploaderLabel = styled.label`
  position: absolute;
  left: 20px;
  top: 20px;
  height: 314px;
  width: 500px;
  border: 1px dashed #3c4257;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  color: ${textColor};
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 24px;
    height: 24px;
    stroke: ${textColor};
    margin-right: 10px;
  }
`

export const BuyGrid = styled.div`
  margin: 40px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
`

export const BuyTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`

export const BuyDescription = styled.div`
  color: ${descTextColor};
  font-size: 14px;
  margin-top: 20px;
`

export const BuyAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const BuyCurrency = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const BuyAddress = styled.div`
  margin-top: 40px;
  font-size: 12px;
  color: ${descTextColor};
`

export const BuyButton = styled.button`
  border: none;
  cursor: pointer;
  width: 500px;
  max-width: 80vw;
  height: 60px;
  padding: 10px;
  line-height: 50px;
  font-size: 15px;
  font-weight: 900;
  text-align: center;
  color: ${backgroundColorDark};
  background: ${buttonColor};
  border-radius: 5px;
  margin: 10px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 30px;
    margin-right: 30px;
  }

  > div {
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
  }
`

export const Bar = styled.div`
  width: 100px;
  height: 4px;

  background: ${backgroundColorLight};
`
