import { RESET, RESTORE } from 'app/App.actions'

import { GET_BLANK_COMMIT, GET_BLANK_REQUEST, GET_BLANK_ROLLBACK } from './Blank.actions'

export interface BlankState {
  loading?: boolean
}

const blankDefaultState: BlankState = {
  loading: false,
}

export function blank(state = blankDefaultState, action: any): BlankState {
  switch (action.type) {
    case RESET: {
      return blankDefaultState
    }
    case RESTORE: {
      return state
    }
    case GET_BLANK_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_BLANK_COMMIT: {
      return {
        ...state,
        loading: false,
      }
    }
    case GET_BLANK_ROLLBACK: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state
  }
}
