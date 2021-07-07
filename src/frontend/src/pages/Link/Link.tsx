// prettier-ignore
import { LinkGrid, LinkInputGrid, LinkStyled } from './Link.style'
import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import axios from 'axios'
import * as React from 'react'
import { useLocation } from 'react-router'
import { subTextColor } from 'styles'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const Link = () => {
  let query = useQuery()
  const username = query.get('username') || '(unknown)'
  let [url, setUrl] = React.useState('')

  async function linkUsername() {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/set-address`, {
        username,
        url,
      })
      alert(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LinkStyled>
      <div>
        This user, <b>{username}</b>, has not yet linked an ETH address to his account. If you are the owner of this
        account, you can link your ETH address as follows:
      </div>

      <LinkGrid>
        <svg>
          <use xlinkHref="/icons/sprites.svg#twitter" />
        </svg>
        <div>
          To link your Twitter account, make a tweet with your Ethereum address pasted into the contents (surrounding
          text doesn't matter). Copy-paste the tweets URL into the above input box and fire away!
        </div>
      </LinkGrid>

      <LinkGrid>
        <svg>
          <use xlinkHref="/icons/sprites.svg#facebook" />
        </svg>
        <div>
          To link your Facebook, publish a new public post with your Ethereum address embedded into the content
          (surrounding text doesn't matter). Copy-paste the posts URL into the above input box and fire away!{' '}
        </div>
      </LinkGrid>

      <LinkGrid>
        <svg>
          <use xlinkHref="/icons/sprites.svg#youtube" />
        </svg>
        <div>
          To link your Youtube account, publish a new public video with your Ethereum address as the title of the video
          (the video itself doesn't matter). Copy-paste the video URL into the above input box and fire away!{' '}
        </div>
      </LinkGrid>

      <LinkInputGrid>
        <Input
          icon="link"
          name="url"
          placeholder="URL of Tweet, Facebook post or Youtube video"
          type="text"
          onChange={(e) => {
            setUrl(e.target.value)
          }}
          value={url}
          onBlur={() => {}}
          inputStatus={undefined}
          errorMessage={undefined}
        />
        <Button
          type="button"
          text="Link"
          icon="address"
          loading={false}
          onClick={() => linkUsername()}
          color={subTextColor}
        />
      </LinkInputGrid>
    </LinkStyled>
  )
}
