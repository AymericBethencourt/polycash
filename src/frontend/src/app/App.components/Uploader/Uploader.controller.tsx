import * as React from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import { Crop } from 'react-image-crop'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { UploaderState } from '../../../reducers/uploader'
import { showToaster } from '../Toaster/Toaster.actions'
import { ERROR } from '../Toaster/Toaster.constants'
import { getUploadToken, hideUploader, upload } from './Uploader.actions'
import { UploaderView } from './Uploader.view'

export const Uploader = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const uploaderState: UploaderState = useSelector((state: State) => state.uploader)
  const [originalImage, setOriginalImage] = useState<string | undefined>(undefined)
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined)
  const [crop, setCrop] = useState<Crop>({ unit: '%', height: 100, width: 100 })
  const [gif, setGif] = useState<File | undefined>(undefined)

  useEffect(() => {
    if (uploaderState.aspect && uploaderState.aspect >= 1)
      setCrop({ unit: '%', aspect: uploaderState.aspect, width: 100 })
    if (uploaderState.aspect && uploaderState.aspect < 1)
      setCrop({ unit: '%', aspect: uploaderState.aspect, height: 100 })
  }, [uploaderState.aspect])

  useEffect(() => {
    setGif(undefined)
    setOriginalImage(undefined)
    setCroppedImage(undefined)
  }, [uploaderState.showing])

  useEffect(() => {
    if (uploaderState.showing) dispatch(getUploadToken())
  }, [uploaderState.showing, dispatch])

  const uploadCallback = () => {
    if (gif) {
      dispatch(
        upload({
          uploadUrl: uploaderState.uploadUrl,
          uploadAuthorizationToken: uploaderState.uploadAuthorizationToken,
          body: gif,
          fileName: `${Math.random().toString(36).substr(2, 9)}.gif`,
        }),
      )
    } else {
      if (!crop && !originalImage) {
        dispatch(showToaster(ERROR, 'File not found', 'Please try again'))
        return
      }

      const originalImageCanvas = new Image()
      originalImageCanvas.src = originalImage as string
      const croppedImageCanvas = document.createElement('canvas')
      croppedImageCanvas.width = (originalImageCanvas.naturalWidth * (crop.width || 100)) / 100
      croppedImageCanvas.height = (originalImageCanvas.naturalHeight * (crop.height || 100)) / 100
      const croppedImageContext = croppedImageCanvas.getContext('2d')
      if (!croppedImageContext) return

      croppedImageContext.imageSmoothingEnabled = true
      croppedImageContext.drawImage(
        originalImageCanvas, // image
        crop && crop.x && crop.x > 0 ? (originalImageCanvas.naturalWidth * crop.x) / 100 : 0, // sx
        crop && crop.y && crop.y > 0 ? (originalImageCanvas.naturalHeight * crop.y) / 100 : 0, // sy
        croppedImageCanvas.width, // sWidth
        croppedImageCanvas.height, // sHeight
        0, // dx
        0, // dy
        croppedImageCanvas.width, // dWidth
        croppedImageCanvas.height, // dHeight
      )

      setCroppedImage(croppedImageCanvas.toDataURL())

      croppedImageCanvas.toBlob(
        (blob: any) => {
          dispatch(
            upload({
              uploadUrl: uploaderState.uploadUrl,
              uploadAuthorizationToken: uploaderState.uploadAuthorizationToken,
              body: blob,
              fileName: `${Math.random().toString(36).substr(2, 9)}.png`,
            }),
          )
        },
        'image/png',
        1,
      )
    }
  }

  const closeUploaderCallback = () => {
    dispatch(hideUploader())
  }

  const inputImageCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      dispatch(showToaster(ERROR, 'File not found', 'Please try again'))
      return
    }

    if (
      !(
        file.type === 'image/gif' ||
        file.type === 'image/webm' ||
        file.type === 'image/jpg' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/png'
      )
    ) {
      dispatch(showToaster(ERROR, 'Incorrect image format', 'Please try again'))
      return
    }

    if (file.type === 'image/gif' && file.size > 50000000) {
      dispatch(showToaster(ERROR, 'This gif is too big (> 50 MB)', 'Reduce its size with iloveimg.com'))
      return
    }

    if (
      (file.type === 'image/webm' ||
        file.type === 'image/jpg' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/png') &&
      file.size > 5000000
    ) {
      dispatch(showToaster(ERROR, 'This image is too big (> 5 MB)', 'Reduce its size with iloveimg.com'))
      return
    }

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (file.type === 'image/gif') {
        setGif(file)
        setCroppedImage(reader.result as string)
      } else {
        setOriginalImage(reader.result as string)
      }
    })
    reader.readAsDataURL(file)
  }

  return (
    <UploaderView
      showing={uploaderState.showing}
      loading={loading}
      uploading={uploaderState.uploading}
      closeUploaderCallback={closeUploaderCallback}
      inputImageCallback={inputImageCallback}
      originalImage={originalImage}
      croppedImage={croppedImage}
      crop={crop}
      setCrop={setCrop}
      uploadCallback={uploadCallback}
    />
  )
}
