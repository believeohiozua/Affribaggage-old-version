import React from 'react'
import {connect} from 'react-redux'
import {avatar, greenArrowRight, hideUserDescription} from 'assets'
import {hideUserInfo} from '../../redux'

import {
  UserInfoMainWrapper,
  AvatarStatusWrapper,
  AvatarWrapper,
  Avatar,
  Status,
  NamePostedDateWrapper,
  Name,
  PostedDate,
  GoToNextUserWrapper,
  GoToNextUserButton,
  GoToNextUserImg,
  HideUserInfoWrapper,
  HideUserInfoButton,
  HideUserInfoImg
} from './style'

const UserInfoMain = (props) => {
  return (
    <UserInfoMainWrapper>
      <AvatarStatusWrapper>
        <AvatarWrapper>
          <Avatar src={avatar}/>
        </AvatarWrapper>
        <Status>{props.status}</Status>
      </AvatarStatusWrapper>
      <NamePostedDateWrapper>
        <Name>Sam Brown</Name>
        <PostedDate>Posted 10h ago</PostedDate>
      </NamePostedDateWrapper>
      <GoToNextUserWrapper>
        <GoToNextUserButton>
          <GoToNextUserImg src={greenArrowRight}/>
        </GoToNextUserButton>
      </GoToNextUserWrapper>
      <HideUserInfoWrapper>
        <HideUserInfoButton>
          <HideUserInfoImg
            src={hideUserDescription}
            onClick={() => props.hideUserInfoCmp()}/>
        </HideUserInfoButton>
      </HideUserInfoWrapper>
    </UserInfoMainWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideUserInfoCmp: () => dispatch(hideUserInfo())
  }
}

export default connect(null, mapDispatchToProps)(UserInfoMain)