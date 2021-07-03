import { initUploader, showUploader } from 'app/App.components/Uploader/Uploader.actions'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { editProfilePicture } from './EditProfilePicture.actions'
import { EditProfilePictureView } from './EditProfilePicture.view'

export const EditProfilePicture = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const [profilePicture, setProfilePicture] = useState<string>('')
  const [defaultPictures, setDefaultPictures] = useState<string[]>([])
  const imageUrl = useSelector((state: State) => state.uploader.imageUrl)

  useEffect(() => {
    dispatch(initUploader())
    const generatedPictures: string[] = []
    for (let i = 0; i < 18; i++) {
      generatedPictures[i] = `https://b2.polycash.net/file/pics-provider/profiles/${Math.floor(Math.random() * 2376)}.jpg`
    }
    setDefaultPictures(generatedPictures)
    setProfilePicture(generatedPictures[9])
  }, [dispatch])

  useEffect(() => {
    if (imageUrl) {
      const generatedPictures = defaultPictures
      generatedPictures[3] = imageUrl
      setDefaultPictures(generatedPictures)
      setProfilePicture(imageUrl)
    }
  }, [imageUrl, defaultPictures])

  const nextCallback = async () => {
    dispatch(editProfilePicture({ profilePicture }))
  }

  const selectPictureCallback = (picture: string) => {
    setProfilePicture(picture)
  }

  const uploadCallback = () => {
    dispatch(showUploader(1))
  }

  return (
    <EditProfilePictureView
      loading={loading}
      nextCallback={nextCallback}
      defaultPictures={defaultPictures}
      profilePicture={profilePicture}
      selectPictureCallback={selectPictureCallback}
      uploadCallback={uploadCallback}
      imageUrl={imageUrl}
    />
  )
}
