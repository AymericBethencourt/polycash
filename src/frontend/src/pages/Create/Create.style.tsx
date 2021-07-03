import styled from 'styled-components/macro'
import {
  backgroundColorDark,
  backgroundColorDeep,
  backgroundColorLight,
  borderColor,
  placeholderColor,
  primaryColor,
  subTextColor,
  textColor,
} from 'styles'

export const CreateStyled = styled.div`
  width: 90vw;
  max-width: 920px;
  margin: 130px auto 20px auto;
  margin-top: 60px;
`

export const CreateGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

export const CreateLinkGrid = styled.div`
  margin-bottom: 500px;

  > button {
    width: 150px;
    margin: 20px 0 300px 0;
    float: right;
  }
`

export const CreateLink = styled.div`
  width: 100%;
  display: block;
  position: relative;
  height: 120px;
  padding: 12px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${backgroundColorDeep};
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: border-color, box-shadow;
  background-color: ${backgroundColorLight};
  /* border: 1px solid ${borderColor}; */
  overflow-wrap: break-word;
`

export const InputUploadGrid = styled.div`
  display: grid;
  grid-template-columns: auto 110px;
  grid-gap: 10px;
`

export const InputUpload = styled.input`
  width: 100%;
  display: block;
  position: relative;
  height: 40px;
  padding: 10px 6px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${backgroundColorDeep};
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: border-color, box-shadow;
  background-color: ${primaryColor};
  /* border: 1px solid ${borderColor}; */
  color: ${subTextColor};
  font-size: 12px;

  &.custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  &.custom-file-input::before {
    outline: none;
    content: 'Upload to Filecoin';
    display: inline-block;
    cursor: pointer;
  }

  &.custom-file-uploading::before {
    content: 'Uploading...' !important;
  }
`
