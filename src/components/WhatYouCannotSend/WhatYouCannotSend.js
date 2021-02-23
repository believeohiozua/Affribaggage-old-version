import React from 'react'

import {
  aerosolsLiquids,
  weapons,
  stolenItems,
  drugs,
  batteries,
  alcohol
} from 'assets'

import {
  WhatYouCannotSendWrapper,
  WhatYouCannotSendTitle,
  WhatYouCannotSendList,
  WhatYouCannotSendItem,
  WhatYouCannotSendItemImage,
  WhatYouCannotSendItemLabel
} from './style'

const WhatYouCannotSend = () => {
  return (
    <WhatYouCannotSendWrapper>
      <WhatYouCannotSendTitle>
        What you cant send
      </WhatYouCannotSendTitle>
      <WhatYouCannotSendList>
        <WhatYouCannotSendItem>
          <WhatYouCannotSendItemImage src={weapons}/>
          <WhatYouCannotSendItemLabel>Weapons</WhatYouCannotSendItemLabel>
        </WhatYouCannotSendItem>
        <WhatYouCannotSendItem>
          <WhatYouCannotSendItemImage src={stolenItems}/>
          <WhatYouCannotSendItemLabel>Stolen Items</WhatYouCannotSendItemLabel>
        </WhatYouCannotSendItem>
        <WhatYouCannotSendItem>
          <WhatYouCannotSendItemImage src={drugs}/>
          <WhatYouCannotSendItemLabel>Drugs</WhatYouCannotSendItemLabel>
        </WhatYouCannotSendItem>
        <WhatYouCannotSendItem>
          <WhatYouCannotSendItemImage src={batteries}/>
          <WhatYouCannotSendItemLabel>Batteries</WhatYouCannotSendItemLabel>
        </WhatYouCannotSendItem>
        <WhatYouCannotSendItem>
          <WhatYouCannotSendItemImage src={alcohol}/>
          <WhatYouCannotSendItemLabel>Alcohol</WhatYouCannotSendItemLabel>
        </WhatYouCannotSendItem>
        <WhatYouCannotSendItem>
          <WhatYouCannotSendItemImage src={aerosolsLiquids}/>
          <WhatYouCannotSendItemLabel>Aerosols & Liquids</WhatYouCannotSendItemLabel>
        </WhatYouCannotSendItem>
      </WhatYouCannotSendList>
    </WhatYouCannotSendWrapper>
  )
}

export default WhatYouCannotSend