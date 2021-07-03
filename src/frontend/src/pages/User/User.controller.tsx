import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'

import { getUser } from './User.actions'
import { UserView } from './User.view'

export const User = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  let { username } = useParams()
  const user = useSelector((state: State) => state.users[username])

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username])

  return <UserView loading={loading} user={user} />
}
