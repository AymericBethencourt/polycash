import React from 'react'
import { Helmet } from 'react-helmet'

export const AppMeta = () => (
  <Helmet>
    <title>Polycash.net</title>
    <meta name="description" content="Payment Links" />
    <meta property="og:title" content="polycash.net" />
    <meta property="og:url" content="https://polycash.net" />
    <meta property="og:site_name" content="polycash.net" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="polycash.net" />
    <meta property="og:image" content="/ogimage.png" />
  </Helmet>
)
