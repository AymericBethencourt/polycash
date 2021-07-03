import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'

// prettier-ignore
import { EditProfilePictureButton, EditProfilePictureCard, EditProfilePictureGrid, EditProfilePicturePicture, EditProfilePicturePictureContainer, EditProfilePictureSelector, EditProfilePictureStyled, EditProfilePictureTitle } from './EditProfilePicture.style'

type EditProfilePictureViewProps = {
  loading: boolean
  nextCallback: () => void
  defaultPictures: string[]
  profilePicture: string
  selectPictureCallback: (picture: string) => void
  uploadCallback: () => void
  imageUrl?: string
}

export const EditProfilePictureView = ({
  loading,
  nextCallback,
  defaultPictures,
  profilePicture,
  selectPictureCallback,
  uploadCallback,
  imageUrl,
}: EditProfilePictureViewProps) => {
  return (
    <EditProfilePictureStyled>
      <EditProfilePictureTitle>
        <h1>Choose a profile picture</h1>
      </EditProfilePictureTitle>
      <EditProfilePictureCard>
        <EditProfilePictureGrid>
          {defaultPictures.map((defaultPicture, i) => (
            <>
              {i === 3 && !imageUrl ? (
                <EditProfilePicturePictureContainer
                  selected={defaultPicture === profilePicture}
                  style={{ cursor: 'pointer' }}
                  onClick={() => uploadCallback()}
                >
                  <img src="/images/upload.svg" alt="upload" />
                </EditProfilePicturePictureContainer>
              ) : (
                <EditProfilePicturePictureContainer selected={defaultPicture === profilePicture}>
                  <EditProfilePictureSelector
                    selected={defaultPicture === profilePicture}
                    onClick={() => selectPictureCallback(defaultPicture)}
                  >
                    <EditProfilePicturePicture alt="" src={defaultPicture} />
                  </EditProfilePictureSelector>
                </EditProfilePicturePictureContainer>
              )}
            </>
          ))}
        </EditProfilePictureGrid>
      </EditProfilePictureCard>
      <EditProfilePictureButton>
        <Button type="submit" text="Next" icon="sign-up" loading={loading} onClick={() => nextCallback()} />
      </EditProfilePictureButton>
    </EditProfilePictureStyled>
  )
}

EditProfilePictureView.propTypes = {
  loading: PropTypes.bool,
  nextCallback: PropTypes.func.isRequired,
  defaultPictures: PropTypes.array.isRequired,
  profilePicture: PropTypes.string.isRequired,
  selectPictureCallback: PropTypes.func.isRequired,
  uploadCallback: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
}

EditProfilePictureView.defaultProps = {
  loading: false,
}
