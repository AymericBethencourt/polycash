import styled, { css } from 'styled-components/macro'
import { Card, FadeInFromTop } from 'styles'

export const EditProfilePictureStyled = styled.div`
  margin: 100px auto 20px auto;
  width: 800px;
  max-width: 90vw;
`

export const EditProfilePictureCard = styled(Card)`
  padding: 20px;
  overflow: hidden;
`

export const EditProfilePictureTitle = styled(FadeInFromTop)``

export const EditProfilePictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-gap: 10px;
  width: 900px;
`

function createCSS() {
  let styles = ''

  for (let i = 6; i < 12; i += 1) {
    styles += `
       &:nth-child(${i + 1}) {
        transform: translateX(-80px);
       }
       `
  }

  return css`
    ${styles}
  `
}

export const EditProfilePicturePictureContainer = styled.div<{ selected: boolean }>`
  height: 100px;
  width: 100px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  z-index: ${(props) => (props.selected ? 1 : 0)};

  ${createCSS()};
`

export const EditProfilePictureSelector = styled.div<{ selected: boolean }>`
  will-change: tranform;
  transition: transform 200ms ease-in-out;
  z-index: ${(props) => (props.selected ? 1 : 0)};
  transform: ${(props) => (props.selected ? 'scale(2)' : 'scale(1)')};
`

export const EditProfilePicturePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  cursor: pointer;
  visibility: visible;
`

export const EditProfilePictureButton = styled.div`
  margin-top: 20px;
  width: 200px;
  float: right;
`
