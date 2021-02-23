import React from 'react'
import {Comment, FacebookComment} from 'components/UI'

import {CommentsListWrapper, CommentWrapper} from './style'

const CommentsList = () => {
  return (
    <CommentsListWrapper>
      <CommentWrapper>
        <FacebookComment/>
      </CommentWrapper>
      <CommentWrapper>
        <Comment/>
      </CommentWrapper>
      <CommentWrapper>
        <Comment/>
      </CommentWrapper>
      <CommentWrapper>
        <FacebookComment/>
      </CommentWrapper>
      <CommentWrapper>
        <Comment/>
      </CommentWrapper>
    </CommentsListWrapper>
  )
}

export default CommentsList