import styled, { keyframes } from 'styled-components/macro'

import { backgroundColorDark, textColor, borderColor, backgroundColorLight } from '../../../styles'

export const clickWave = keyframes`
  from {  }
  to {  }
`

export const tiltUp = keyframes`
  40%,
  60% {
    transform: perspective(500px) rotateX(8deg);
  }
`

export const tiltDown = keyframes`
  40%,
  60% {
    transform: perspective(500px) rotateX(-8deg);
  }
`

export const SelectStyled = styled.div`
  border: none;
  height: 40px;

  &.select-menu {
    position: relative;
    z-index: 2;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    select,
    .selector {
      font-family: inherit;
      margin: 0;
      border: 0;
      user-select: none;
      text-align: left;
      text-transform: none;
      -webkit-appearance: none;
    }

    select {
      pointer-events: none;
      user-select: none;
      opacity: 0;
      padding: 11px 12px 5px 46px;
      visibility: hidden;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);

      li {
        padding: 11px 12px 5px 46px;
        cursor: pointer;
      }
    }

    & > ul {
      background: #EBEBEB;
      color: ${textColor}80;
      border-radius: 4px;

      li {
        transition: color 0.3s ease;

        &:hover {
          color: ${textColor}C8;
        }
      }
    }

    > .selector {
      position: absolute;
      left: 0;
      top: 0;
      height: 40px;
      /* border: 1px solid ${borderColor}; */
      padding: 0;
      z-index: 1;
      width: 100%;
      display: block;
      overflow: hidden;
      /* border-radius: 4px;
      color: ${textColor};
      background: ${backgroundColorDark}; */

      em {
        --r: 45deg;
        display: block;
        position: absolute;
        left: 19px;
        top: 3px;
        width: 7px;
        height: 7px;
        margin-top: 9px;
        -webkit-backface-visibility: hidden;

        &:before,
        &:after {
          --o: 0.4;
          content: '';
          width: 7px;
          height: 7px;
          opacity: var(--o);
          display: block;
          position: relative;
          transition: opacity 0.2s ease;
          transform: rotate(var(--r)) scale(0.75);
        }

        &:before {
          border-left: 2px solid ${textColor};
          border-top: 2px solid ${textColor};
          top: 1px;
        }

        &:after {
          border-right: 2px solid ${textColor};
          border-bottom: 2px solid ${textColor};
          bottom: 1px;
        }
      }
    }

    &:not(.open) {
      & > ul {
        opacity: 0;
        pointer-events: none;
      }
    }

    &.open {
      &.tilt-up {
        animation: ${tiltUp} 0.4s linear forwards;

        .selector {
          em {
            &:before {
              --o: 1;
            }
          }
        }
      }

      &.tilt-down {
        animation: ${tiltDown} 0.4s linear forwards;

        .selector {
          em {
            &:after {
              --o: 1;
            }
          }
        }
      }
    }
  }
`

export const SelectBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: ${backgroundColorLight};
  content: '';
  z-index: 0;
`

export const SelectInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 40px);
  height: 100%;
  margin: 0 20px;
  line-height: 40px;
  font-weight: bold;
  z-index: 1;
  color: ${backgroundColorDark};
  text-align: center;
  overflow: hidden;
`
