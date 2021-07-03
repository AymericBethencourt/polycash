import { RESET, RESTORE } from 'app/App.actions'

// prettier-ignore
import { GET_UPLOAD_TOKEN_COMMIT, HIDE_UPLOADER, INIT_UPLOADER, SHOW_UPLOADER, UPLOAD_COMMIT, UPLOAD_REQUEST, UPLOAD_ROLLBACK } from '../app/App.components/Uploader/Uploader.actions'

export interface UploaderState {
  showing: boolean
  uploading: boolean
  aspect?: number
  uploadUrl?: string
  uploadAuthorizationToken?: string
  imageUrl?: string
}

const uploaderDefaultState: UploaderState = {
  showing: false,
  uploading: false,
  aspect: undefined,
  uploadUrl: undefined,
  uploadAuthorizationToken: undefined,
  imageUrl: undefined,
}

export function uploader(state = uploaderDefaultState, action: any): UploaderState {
  switch (action.type) {
    case RESET: {
      return uploaderDefaultState
    }
    case RESTORE: {
      return uploaderDefaultState
    }
    case INIT_UPLOADER: {
      return uploaderDefaultState
    }
    case SHOW_UPLOADER:
      return {
        ...uploaderDefaultState,
        showing: true,
        aspect: action.aspect,
      }
    case HIDE_UPLOADER:
      return {
        ...uploaderDefaultState,
        imageUrl: action.imageUrl,
      }
    case GET_UPLOAD_TOKEN_COMMIT:
      return {
        ...state,
        uploadUrl: action.payload.uploadUrl,
        uploadAuthorizationToken: action.payload.uploadAuthorizationToken,
      }
    case UPLOAD_REQUEST:
      return {
        ...state,
        uploading: true,
      }
    case UPLOAD_COMMIT:
      return {
        ...state,
        uploading: false,
      }
    case UPLOAD_ROLLBACK:
      return {
        ...state,
        uploading: false,
      }
    default:
      return state
  }
}
