import React from 'react'
import {facebookCommentStar, facebookCommentEarth, avatar} from 'assets'

import {
  FacebookCommentWrapper,
  CommentHeader,
  AvatarWrapper,
  Avatar,
  UserNameCreatedAtWrapper,
  UserNameWrapper,
  UserName,
  Star,
  CreatedAtWrapper,
  CreatedAt,
  Icon,
  RecommendsCompanyWrapper,
  RecommendsCompany,
  CompanyName,
  CommentContentWrapper,
  CommentContent
} from './style'

const FacebookComment = () => {
  return (
    <FacebookCommentWrapper>
      <CommentHeader>
        <AvatarWrapper>
          <Avatar src={avatar}/>
        </AvatarWrapper>
        <UserNameCreatedAtWrapper>
          <UserNameWrapper>
            <UserName>Andrew Rubens</UserName>
            <Star src={facebookCommentStar}/>
          </UserNameWrapper>
          <CreatedAtWrapper>
            <CreatedAt>
              4 Nov 2020 •
            </CreatedAt>
            <Icon src={facebookCommentEarth}/>
          </CreatedAtWrapper>
        </UserNameCreatedAtWrapper>
        <RecommendsCompanyWrapper>
          <RecommendsCompany>
            recommends <CompanyName>Afribaggage</CompanyName>
          </RecommendsCompany>
        </RecommendsCompanyWrapper>
      </CommentHeader>
      <CommentContentWrapper>
        <CommentContent>
          Great service, communication and price
          All items arrived safely to my home.
          Thank you Afribaggage
          Difintely recommend them.
        </CommentContent>
      </CommentContentWrapper>
    </FacebookCommentWrapper>
  )
}

export default FacebookComment