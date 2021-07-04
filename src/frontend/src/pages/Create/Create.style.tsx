import styled from 'styled-components/macro'
// prettier-ignore
import { backgroundColorDark, backgroundColorDeep, backgroundColorLight, borderColor, buttonColor, primaryColor, textColor } from 'styles'

export const CreateStyled = styled.div`
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

export const CreateGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

export const CreateInputs = styled.div`
  padding-top: 344px;
`

export const CreateLinkGrid = styled.div`
  //margin-bottom: 500px;
  display: grid;
  grid-template-columns: auto 100px;
  grid-gap: 10px;

  > button {
    width: 100px;
    float: right;
    height: 40px;
  }
`

export const CreateLink = styled.input`
  width: 100%;
  position: relative;
  height: 40px;
  line-height: 40px;
  padding: 0 0 0 12px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: border-color, box-shadow;
  background-color: ${backgroundColorLight};
  border-color: ${buttonColor}50;
  font-weight: bold;
  color: ${textColor};
  display: inline-block;

  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
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
  color: ${backgroundColorDark};
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
