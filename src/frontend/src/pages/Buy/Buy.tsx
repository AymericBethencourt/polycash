import { ethers } from 'ethers'
import * as React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { BuyMeta } from './Buy.meta'

// prettier-ignore
import { Bar, BuyAddress, BuyAmount, BuyButton, BuyCurrency, BuyDescription, BuyGrid, BuyInputs, BuyStyled, BuyTitle, UploaderImage } from './Buy.style'

//http://localhost:3000/buy?address=0x93843E8bd6D2E1Ca9fD2b54Cf4dcFbd15F4d5E85&currency=MATIC&amount=0.1&title=Powdur&description=Test%20description&image=https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/payment-links-powdur%20(1).jpg

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const Buy = () => {
  let query = useQuery()
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const address = query.get('address') || 'No address'
  const currency = query.get('currency') || 'No currency'
  const amount = query.get('amount') || 'No amount'
  const title = query.get('title') || 'No title'
  const description = query.get('description') || 'No description'
  const image = query.get('image') || undefined

  const pay = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const accounts = await provider.listAccounts()

    const tx = {
      to: address,
      from: accounts[0],
      value: ethers.utils.parseEther(amount),
    }

    setLoading(true)

    signer
      .sendTransaction(tx)
      .then((transaction) => {
        console.dir(transaction)
        setLoading(false)
        setSent(true)
      })
      .catch((e) => {
        alert(e.message)
        setLoading(false)
      })
  }

  return (
    <BuyStyled>
      <BuyMeta
        address={address}
        currency={currency}
        amount={amount}
        title={title}
        description={description}
        image={image}
      />

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

        <BuyAddress>Send to {address}</BuyAddress>
      </BuyInputs>

      <BuyButton type="button" loading={loading} sent={sent} onClick={() => pay()}>
        <span>
          <svg>
            <use xlinkHref="/icons/sprites.svg#metamask" />
          </svg>
          <svg>
            <use xlinkHref="/icons/sprites.svg#loader" />
          </svg>
          <svg>
            <use xlinkHref="/icons/sprites.svg#check" />
          </svg>
        </span>

        <ul>
          <li>Pay with Metamask</li>
          <li>Payment in progress</li>
          <li>Payment sent!</li>
        </ul>
      </BuyButton>
    </BuyStyled>
  )
}
