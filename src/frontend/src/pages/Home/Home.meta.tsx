import * as PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

type HomeMetaProps = {
  blankTitle: string
}

export const HomeMeta = ({ blankTitle }: HomeMetaProps) => {
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

HomeMeta.propTypes = {
  blankTitle: PropTypes.string.isRequired,
}

HomeMeta.defaultProps = {}
