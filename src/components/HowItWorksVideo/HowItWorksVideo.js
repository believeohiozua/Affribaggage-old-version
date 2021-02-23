import React from 'react'
import {videoIcon} from 'assets'

import {
  HowItWorksVideoWrapper,
  VideoLinkWrapper,
  VideoLink,
  Icon,
  VideoLinkUnderline
} from './style'

const HowItWorksVideo = () => {
  return (
    <HowItWorksVideoWrapper>
      <VideoLinkWrapper>
        <VideoLink href="#!">
          <Icon src={videoIcon}/>Watch a video on how Afribaggage works
        </VideoLink>
      </VideoLinkWrapper>
      <VideoLinkUnderline/>
    </HowItWorksVideoWrapper>
  )
}

export default HowItWorksVideo