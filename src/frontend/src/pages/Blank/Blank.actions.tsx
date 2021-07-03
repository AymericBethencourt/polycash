import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'
import { GetPublicUserInputs } from 'shared/page/GetPublicUser'

export const GET_BLANK_REQUEST = 'GET_BLANK_REQUEST'
export const GET_BLANK_COMMIT = 'GET_BLANK_COMMIT'
export const GET_BLANK_ROLLBACK = 'GET_BLANK_ROLLBACK'

export const getBlank = ({ username }: GetPublicUserInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_BLANK_REQUEST,
    payload: { username },
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/get-public-user`,
          method: 'GET',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { username },
        },
        commit: {
          type: GET_BLANK_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Email verified!', 'Thanks'), redirect('/')],
          },
        },
        rollback: { type: GET_BLANK_ROLLBACK },
      },
    },
  })
}
