import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import { backgroundTextColor, ModalCard, ModalCardContent, ModalClose, ModalMask, ModalStyled } from 'styles'

import { Button } from '../Button/Button.controller'
// prettier-ignore
import { UploaderButton, UploaderFileSelector, UploaderFlex, UploaderLabel, UploaderPreview } from './Uploader.style'

import 'react-image-crop/dist/ReactCrop.css'

type UploaderViewProps = {
  showing: boolean
  loading: boolean
  uploading: boolean
  closeUploaderCallback: () => void
  inputImageCallback: (e: ChangeEvent<HTMLInputElement>) => void
  originalImage?: string
  croppedImage?: string
  crop: Crop
  setCrop: (c: Crop) => void
  uploadCallback: () => void
}

export const UploaderView = ({
  showing,
  loading,
  uploading,
  closeUploaderCallback,
  inputImageCallback,
  originalImage,
  croppedImage,
  crop,
  setCrop,
  uploadCallback,
}: UploaderViewProps) => {
  return (
    <ModalStyled showing={showing}>
      {showing && (
        <>
          <ModalMask showing={showing} />
          <ModalCard>
            <ModalClose onClick={() => closeUploaderCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#close" />
              </svg>
            </ModalClose>
            <ModalCardContent width={40} height={40}>
              {!(originalImage || croppedImage) && (
                <UploaderFileSelector>
                  <UploaderLabel htmlFor="uploader">CHOOSE FILE</UploaderLabel>
                  <input id="uploader" type="file" accept="image/*" onChange={(e) => inputImageCallback(e)} />
                </UploaderFileSelector>
              )}
              <UploaderFlex>
                {croppedImage && <UploaderPreview src={croppedImage} alt="cropped-image" />}
                {!croppedImage && originalImage && (
                  <ReactCrop
                    keepSelection
                    src={originalImage}
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    className="react-crop"
                  />
                )}
              </UploaderFlex>
            </ModalCardContent>
            <UploaderButton>
              <Button
                text="CROP & UPLOAD"
                color={backgroundTextColor}
                icon="send"
                // disabled={!completedCrop?.width || !completedCrop?.height}
                loading={loading || uploading}
                loadingText={uploading ? 'Uploading...' : 'Authorizing...'}
                onClick={() => uploadCallback()}
              />
            </UploaderButton>
          </ModalCard>
        </>
      )}
    </ModalStyled>
  )
}

UploaderView.propTypes = {
  showing: PropTypes.bool,
  loading: PropTypes.bool,
  uploading: PropTypes.bool,
  closeUploaderCallback: PropTypes.func.isRequired,
  inputImageCallback: PropTypes.func.isRequired,
  originalImage: PropTypes.string,
  croppedImage: PropTypes.string,
  crop: PropTypes.object,
  setCrop: PropTypes.func.isRequired,
  uploadCallback: PropTypes.func.isRequired,
}

UploaderView.defaultProps = {
  showing: false,
  loading: false,
  uploading: false,
}
