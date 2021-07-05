import * as PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

type BuyMetaProps = {
  address?: string
  currency?: string
  amount?: string
  title?: string
  description?: string
  image?: string
}

export const BuyMeta = ({ title, description, image, amount, currency }: BuyMetaProps) => {
  const metaTitle = `Buy ${title} for ${amount} ${currency}`
  const metaDescription = description

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={metaTitle} />
      <meta property="og:title" content={metaTitle} />

      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />

      <meta property="og:site_name" content="Polycash" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

BuyMeta.propTypes = {
  address: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

BuyMeta.defaultProps = {}
