import React from 'react'
import {starIcon} from 'assets'

import {
  CommentWrapper,
  CommentInfoWrapper,
  CommentAuthorName,
  CommentCreatedDate,
  CommentStartWrapper,
  Icon,
  CommentContent
} from './style'

const Comment = () => {
  return (
    <CommentWrapper>
      <CommentInfoWrapper>
        <CommentAuthorName>Andrew</CommentAuthorName>
        <CommentCreatedDate>Mon 2nd Nov 2020</CommentCreatedDate>
        <CommentStartWrapper>
          <Icon src={starIcon}/>
          <Icon src={starIcon}/>
          <Icon src={starIcon}/>
          <Icon src={starIcon}/>
        </CommentStartWrapper>
      </CommentInfoWrapper>
      <CommentContent>
        My baggages arrived Namiba safely. The price was good, communication Was awesome, great service entirely. Thank you Afribaggage. Definitely recommend them
      </CommentContent>
    </CommentWrapper>
  )
}

export default Comment