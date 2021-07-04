import * as React from 'react'
import { useLocation } from 'react-router'

// prettier-ignore
import { Bar, BuyAddress, BuyAmount, BuyButton, BuyCurrency, BuyDescription, BuyGrid, BuyInputs, BuyStyled, BuyTitle, UploaderImage } from './Buy.style'

// http://localhost:3000/buy?address=0x9a3FD1E5b849A22504020385a8e4315B1AF12f8f&currency=miMATIC&amount=1&title=Powdur&description=Test%20description&image=https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/payment-links-powdur%20(1).jpg

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const Buy = () => {
  let query = useQuery()

  const address = query.get('address') || 'No address'
  const currency = query.get('currency') || 'No currency'
  const amount = query.get('amount') || 'No amount'
  const title = query.get('title') || 'No title'
  const description = query.get('description') || 'No description'
  const image = query.get('image') || undefined

  return (
    <BuyStyled>
      {image && (
        <UploaderImage>
          <img src={image} />
        </UploaderImage>
      )}

      <BuyInputs>
        <BuyTitle>{title}</BuyTitle>

        <BuyDescription>{description}</BuyDescription>

        <BuyGrid>
          <Bar />
          <BuyAmount>{amount}</BuyAmount>
          <BuyCurrency>{currency}</BuyCurrency>
          <Bar />
        </BuyGrid>

        <BuyAddress>{address}</BuyAddress>
      </BuyInputs>

      <BuyButton type="button" onClick={() => {}}>
        <img src="/images/metamask.svg" />
        <div>{`Pay with Metamask`}</div>
      </BuyButton>
    </BuyStyled>
  )
}
