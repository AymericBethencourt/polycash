import * as PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

type BlankMetaProps = {
  blankTitle: string
}

export const BlankMeta = ({ blankTitle }: BlankMetaProps) => {
  const title = `${blankTitle} | polycash.net`
  const description = ``

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

BlankMeta.propTypes = {
  blankTitle: PropTypes.string.isRequired,
}

BlankMeta.defaultProps = {}
