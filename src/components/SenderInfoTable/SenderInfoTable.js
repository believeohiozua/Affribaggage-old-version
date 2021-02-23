import React from 'react'
import {InfoTable} from 'components/UI'

import {InfoItemWrapper, Info} from './style'

const SenderInfoTable = () => {
  return (
    <InfoTable>
      <InfoItemWrapper>
        <Info>Willing to Pay</Info>
        <Info>$104</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Product Value</Info>
        <Info>$400</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Pick Up</Info>
        <Info>New York, USA</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Deliever</Info>
        <Info>Lagos, Nigeria</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Before</Info>
        <Info>25 Jan 2021</Info>
      </InfoItemWrapper>
    </InfoTable>
  )
}

export default SenderInfoTable