import styled from 'styled-components/macro'
import { textColor, backgroundTextColor } from 'styles'

export const UploaderButton = styled.div`
  width: 100%;
  margin-top: 10px;
`

export const UploaderFileSelector = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  > input {
    display: none;
  }
`

export const UploaderLabel = styled.label`
  padding: 10px 28px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  will-change: box-shadow;
  width: 100%;
  user-select: none;
  color: ${textColor};
  background-color: ${backgroundTextColor};

  will-change: transform;
  &:active {
    transform: scale(0.95);
  }
`

export const UploaderFlex = styled.div`
  .react-crop {
    display: block;
  }
`

export const UploaderPreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  max-height: calc(90vh - 50px);
  max-width: 90vw;
`
