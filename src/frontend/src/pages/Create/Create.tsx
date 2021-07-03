import { Buckets, PrivateKey } from '@textile/hub'
import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import * as React from 'react'
import { useState } from 'react'
import { subTextColor } from 'styles'

import { CreateGrid, CreateLink, CreateLinkGrid, CreateStyled, InputUpload, InputUploadGrid } from './Create.style'

type Details = {
  address?: string
  currency: string
  amount?: number
  title?: string
  description?: string
  image?: string
}

export const Create = () => {
  const [details, setDetails] = useState<Details>({
    address: undefined,
    currency: 'miMATIC',
    amount: undefined,
    title: undefined,
    description: undefined,
    image: undefined,
  })

  const [copied, setCopied] = useState(false)

  const urlAddress = details.address ? `address=${details.address}&` : ''
  const urlCurrency = details.currency ? `currency=${details.currency}&` : ''
  const urlAmount = details.amount ? `amount=${details.amount}&` : ''
  const urlTitle = details.title ? `title=${encodeURI(details.title)}&` : ''
  const urlDescription = details.description ? `description=${encodeURI(details.description)}&` : ''
  const urlImage = details.image ? `image=${encodeURI(details.image)}` : ''

  const url = `https://polycash.net/buy?${urlAddress}${urlCurrency}${urlAmount}${urlTitle}${urlDescription}${urlImage}`

  const [isUploading, setIsUploading] = useState(false)

  async function handleUpload(file: File) {
    try {
      setIsUploading(true)

      const identity = PrivateKey.fromRandom()
      const buckets = await Buckets.withKeyInfo(
        {
          key: 'bxrqd5bqaqludd3bz3uvj7qnmw4',
        },
        {
          debug: true,
        },
      )
      await buckets.getToken(identity)

      const buck = await buckets.getOrCreate('io.textile.dropzone')
      if (!buck.root) {
        throw new Error('Failed to open bucket')
      }

      const raw = await buckets.pushPath(buck.root.key, file.name, file.stream())

      setDetails({
        ...details,
        image: `https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/${file.name}`,
      })
      setIsUploading(false)
    } catch (error) {
      console.error(error.message)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <CreateStyled>
      <h1>Create a new Payment Link</h1>
      <CreateGrid>
        <div>
          <Input
            icon="address"
            name="address"
            placeholder="ETH Address"
            type="text"
            onChange={(e) => {
              setDetails({ ...details, address: e.target.value })
            }}
            value={details.address}
            onBlur={() => {}}
            inputStatus={undefined}
            errorMessage={undefined}
          />
          <Input
            icon="currency"
            name="currency"
            placeholder="Currency"
            type="text"
            onChange={(e) => {
              setDetails({ ...details, currency: e.target.value })
            }}
            value={details.currency}
            onBlur={() => {}}
            inputStatus={undefined}
            errorMessage={undefined}
          />
          <Input
            icon="amount"
            name="amount"
            placeholder="Amount"
            type="number"
            onChange={(e) => {
              setDetails({ ...details, amount: e.target.value })
            }}
            value={details.amount}
            onBlur={() => {}}
            inputStatus={undefined}
            errorMessage={undefined}
          />
        </div>
        <div>
          <Input
            icon="title"
            name="title"
            placeholder="Title"
            type="text"
            onChange={(e) => {
              setDetails({ ...details, title: e.target.value })
            }}
            value={details.title}
            onBlur={() => {}}
            inputStatus={undefined}
            errorMessage={undefined}
          />
          <Input
            icon="description"
            name="description"
            placeholder="Description"
            type="text"
            onChange={(e) => {
              setDetails({ ...details, description: e.target.value })
            }}
            value={details.description}
            onBlur={() => {}}
            inputStatus={undefined}
            errorMessage={undefined}
          />
          <InputUploadGrid>
            <Input
              icon="image"
              name="image"
              placeholder="Image"
              type="text"
              onChange={(e) => {
                setDetails({ ...details, image: e.target.value })
              }}
              value={details.image}
              onBlur={() => {}}
              inputStatus={undefined}
              errorMessage={undefined}
            />

            <InputUpload
              type="file"
              className={`custom-file-input${isUploading ? ' custom-file-uploading' : ''}`}
              onChange={(e) => e.target && e.target.files && e.target.files[0] && handleUpload(e.target.files[0])}
            />
          </InputUploadGrid>
        </div>
      </CreateGrid>
      <h1>Your Payment Link</h1>
      <CreateLinkGrid>
        <CreateLink>{url}</CreateLink>
        <Button
          type="button"
          text={copied ? 'Copied' : 'Copy'}
          icon="copy"
          loading={false}
          onClick={() => {
            navigator.clipboard.writeText(url)
            setCopied(true)
          }}
          color={subTextColor}
        />
      </CreateLinkGrid>
    </CreateStyled>
  )
}

// https://polycash.net/buy?address=0x9a3FD1E5b849A22504020385a8e4315B1AF12f8f&currency=miMATIC&amount=1&title=Test%20title&description=Test%20description&image=https://hub.textile.io/thread/bafkv4t2uqgblrc2gsgjrgc7gg2hthcu5jhnedx46gfpjj3axe6ahtuy/buckets/bafzbeig3vsanyp6xhzyduubyqh3zas4qapbc7hv75lxsngwrxxlnvfgtli/favicon.png
