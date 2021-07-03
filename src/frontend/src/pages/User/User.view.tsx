import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { UserBanner, UserCenter, UserContent, UserLeft, UserMiddle, UserName, UserRight, UserStyled, UserTitle, UserButtons, UserButton, UserButtonsContainer, UserButtonText, UserButtonCounter, UserButtonInner } from './User.style'

type UserViewProps = {
  loading: boolean
  user: PublicUser
}

export const UserView = ({ loading, user }: UserViewProps) => {
  return (
    <UserStyled>
      <UserCenter>
        <UserTitle>
          <UserName>{user.username}</UserName>
        </UserTitle>
      </UserCenter>
    </UserStyled>
  )
}

UserView.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
}

UserView.defaultProps = {
  loading: false,
  user: {
    username: 'Not found',
  },
}
