import styled, { keyframes, css } from 'styled-components/macro'
// prettier-ignore
import { backgroundColorDark, backgroundColorLight, buttonColor, descTextColor, subTextColor, textColor, upColor } from 'styles'

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

export const BuyDollar = styled.div`
  color: ${descTextColor};
  font-size: 12px;
  margin-top: 5px;
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

export const LinkAddress = styled.div`
  margin-top: 40px;
  font-size: 12px;
  color: red;
`

const stroke = keyframes`
 to { 
    stroke-dashoffset: 0;
  }
`

const rotate = keyframes`
 to { 
    transform: rotate(360deg);
  }
`

// prettier-ignore
export const BuyButton = styled.button<{ loading: boolean, sent: boolean }>`
  border-radius: 5px;
  margin: 10px auto 0;
  border: none;
  cursor: pointer;
  width: 500px;
  max-width: 80vw;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 150ms, color 150ms ease-in-out;
  white-space: nowrap;
  color: ${backgroundColorDark};
  background-color: ${props => props.loading ? "#767676" : (props.sent ? upColor : buttonColor)};

  
  /* display: flex;
  align-items: center;
  justify-content: center; */

  ul { 
    height: 60px;
    margin: 0;
    padding: 0;
    transition: transform 300ms cubic-bezier(0,.65,.70,.90);
    transform-style: preserve-3d;
    transform-origin: 0 ${props => props.loading ? "30px" : (props.sent ? "90px" : "0px")};;
    transform: ${props => props.loading ? "rotateX(90deg)" : (props.sent ? "rotateX(180deg)" : "rotateX(0deg)")};
  }
  
  li {     
    backface-visibility: hidden;
    display: block;
    transition: opacity 150ms;
    transform-origin: 50% 50%;
    transform: rotateX(0deg) translateZ(10px);
    width: 100%;
    
    &:nth-child(1) {
      opacity: ${props => (props.loading || props.sent) ? 0 : 1 };
      transform: rotateX(0deg) translateZ(10px);
    }
    
    &:nth-child(2) {
      opacity: ${props => (props.loading && !props.sent) ? 1 : 0 };
      transform: rotateX(-90deg) translateZ(10px);
    }
    
    &:nth-child(3) {
      opacity: ${props => (props.sent && !props.loading) ? 1 : 0 };
      transform: rotateX(-180deg) translateZ(10px);
    }
  }
 
  span { 
    position: relative;
  }
  
  svg { 
    position: absolute;
    transition: opacity 150ms;

    //Metamask
    &:nth-child(1) {       
      fill: white;
      opacity: 1;
      height: 30px;
      width: 33px;
      left: 20px;
      top: 15px;

      ${props => (props.loading || props.sent) && css`
        opacity: 0;
      `}
    }

    // Circle
    &:nth-child(2) {       
      fill: transparent;
      left: 20px;
      top: 15px;
      width: 30px;
      height: 30px;
      stroke: white;
      stroke-dasharray: 40;
      stroke-dashoffset: 80;
      opacity: 0;

      ${props => (props.loading && !props.sent) && css`
        opacity: 1;
        animation: ${stroke} 2s linear infinite forwards, ${rotate} 1s linear infinite forwards;
      `}

      ${props => (props.sent && !props.loading) && css`
        opacity: 1;
        fill: #fff;
        stroke-dasharray: 0;
      `}
    }
    
    // Checkmark
    &:nth-child(3) {      
      fill: transparent;
      left: 31px;
      top: 27px;
      width: 30px;
      height: 30px;
      stroke: transparent;
      stroke-dasharray: 16;
      stroke-dashoffset: 16;
      transform: translate3d(-5px, -3px, 0);
      transition: ${stroke} 300ms;
      opacity: 0;

      ${props => (props.sent && !props.loading) && css`
        opacity: 1;
        animation: ${stroke} 300ms ease-in-out forwards;
        stroke: ${upColor}
      `}

    }
  }
`

export const Bar = styled.div`
  width: 100px;
  height: 4px;

  background: ${backgroundColorLight};
`
