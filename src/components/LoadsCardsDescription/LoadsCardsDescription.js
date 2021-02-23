import React from 'react'
import {baggageIcon, costIcon, itemIcon, locationIcon} from 'assets'

import {
  LoadsCardsDescriptionWrapper,
  ItemWrapper,
  Icon,
  DescriptionPartLabel,
  LocationWrapper,
  BaggageWrapper,
  CostWrapper
} from './style'

const LoadsCardsDescription = () => {
  return (
    <LoadsCardsDescriptionWrapper>
      <ItemWrapper>
        <Icon src={itemIcon}/>
        <DescriptionPartLabel>Item</DescriptionPartLabel>
      </ItemWrapper>
      <LocationWrapper>
        <Icon src={locationIcon}/>
        <DescriptionPartLabel>Location</DescriptionPartLabel>
      </LocationWrapper>
      <BaggageWrapper>
        <Icon src={baggageIcon}/>
        <DescriptionPartLabel>Baggage</DescriptionPartLabel>
      </BaggageWrapper>
      <CostWrapper>
        <Icon src={costIcon}/>
        <DescriptionPartLabel>Cost</DescriptionPartLabel>
      </CostWrapper>
    </LoadsCardsDescriptionWrapper>
  )
}

export default LoadsCardsDescription