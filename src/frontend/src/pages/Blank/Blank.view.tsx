import * as PropTypes from 'prop-types'
import * as React from 'react'

import { BlankMeta } from './Blank.meta'
import { BlankStyled } from './Blank.style'

type BlankViewProps = {
  loading: boolean
}

export const BlankView = ({ loading }: BlankViewProps) => {
  return (
    <BlankStyled>
      <BlankMeta blankTitle="Blank" />
      Yo
    </BlankStyled>
  )
}

BlankView.propTypes = {
  loading: PropTypes.bool,
}

BlankView.defaultProps = {
  loading: false,
}
