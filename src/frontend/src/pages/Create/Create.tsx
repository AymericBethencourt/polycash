import { Buckets, PrivateKey } from '@textile/hub'
import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { Select } from 'app/App.components/Select/Select.controller'
import * as React from 'react'
import { useState } from 'react'
import { subTextColor } from 'styles'

// prettier-ignore
import { CreateGrid, CreateInputs, CreateLink, CreateLinkGrid, CreateStyled, InputUpload, InputUploadGrid, UploaderFileSelector, UploaderImage, UploaderLabel } from './Create.style'

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
      {details.image && (
        <UploaderImage>
          <img src={details.image} />
        </UploaderImage>
      )}

      <UploaderFileSelector>
        <UploaderLabel htmlFor="uploader">
          <svg>
            <use xlinkHref="/icons/sprites.svg#upload" />
          </svg>
          {isUploading ? 'Uploading...' : 'Upload with Filecoin'}
        </UploaderLabel>
        <input
          id="uploader"
          type="file"
          accept="image/*"
          onChange={(e) => e.target && e.target.files && e.target.files[0] && handleUpload(e.target.files[0])}
        />
      </UploaderFileSelector>

      <CreateInputs>
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

        <CreateGrid>
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

          <Select
            options={['miMATIC', 'MATIC']}
            defaultOption={details.currency}
            selectCallback={(e) => {
              setDetails({ ...details, currency: e })
            }}
          />
        </CreateGrid>
      </CreateInputs>

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

      <CreateLinkGrid>
        <CreateLink type="text" value={url} />
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
