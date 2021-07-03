import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { getBlank } from './Blank.actions'
import { BlankView } from './Blank.view'

type BlankProps = {
  something: boolean
}

export const Blank = ({ something }: BlankProps) => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)

  useEffect(() => {
    dispatch(getBlank({ username: '' }))
  }, [dispatch])

  return <BlankView loading={loading} />
}

Blank.propTypes = {
  something: PropTypes.bool,
}

Blank.defaultProps = {
  something: false,
}
