import { State } from 'reducers'

import { showToaster } from '../Toaster/Toaster.actions'
import { SUCCESS } from '../Toaster/Toaster.constants'

export const INIT_UPLOADER = 'INIT_UPLOADER'

export const initUploader = () => (dispatch: any) => {
  dispatch({
    type: INIT_UPLOADER,
  })
}

export const SHOW_UPLOADER = 'SHOW_UPLOADER'

export const showUploader = (aspect?: number) => (dispatch: any) => {
  dispatch({
    type: SHOW_UPLOADER,
    aspect,
  })
}

export const HIDE_UPLOADER = 'HIDE_UPLOADER'

export const hideUploader = (imageUrl?: string) => (dispatch: any) => {
  dispatch({
    type: HIDE_UPLOADER,
    imageUrl,
  })
}

export const GET_UPLOAD_TOKEN_REQUEST = 'GET_UPLOAD_TOKEN_REQUEST'
export const GET_UPLOAD_TOKEN_COMMIT = 'GET_UPLOAD_TOKEN_COMMIT'
export const GET_UPLOAD_TOKEN_ROLLBACK = 'GET_UPLOAD_TOKEN_ROLLBACK'

export const getUploadToken = () => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_UPLOAD_TOKEN_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/upload/get-token`,
          method: 'GET',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
        },
        commit: { type: GET_UPLOAD_TOKEN_COMMIT },
        rollback: { type: GET_UPLOAD_TOKEN_ROLLBACK },
      },
    },
  })
}

export const UPLOAD_REQUEST = 'UPLOAD_REQUEST'
export const UPLOAD_COMMIT = 'UPLOAD_COMMIT'
export const UPLOAD_ROLLBACK = 'UPLOAD_ROLLBACK'

export const upload = ({ uploadUrl, uploadAuthorizationToken, body, fileName }: any) => (dispatch: any) => {
  dispatch({
    type: UPLOAD_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: uploadUrl,
          method: 'POST',
          headers: {
            Authorization: uploadAuthorizationToken,
            'Access-Control-Allow-Origin': '*',
            'X-Bz-File-Name': fileName,
            'Content-Type': 'b2/x-auto',
            'X-Bz-Content-Sha1': 'do_not_verify',
          },
          body,
        },
        commit: {
          type: UPLOAD_COMMIT,
          meta: {
            thunks: [
              showToaster(SUCCESS, 'Upload complete', '100%'),
              hideUploader(`https://b2.polycash.net/file/polycash/${fileName}`),
            ],
          },
        },
        rollback: { type: UPLOAD_ROLLBACK },
      },
    },
  })
}
