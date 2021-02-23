import React from 'react'
import {locationIcon, cardTravellerIcon, dateIcon} from 'assets'

import {
  TravellerCardDescriptionWrapper,
  TravellerPart,
  Icon,
  DescriptionPartLabel,
  LocationsPart,
  DatePart
} from './style'

const TravellersCardsDescription = () => {
  return (
    <TravellerCardDescriptionWrapper>
      <TravellerPart>
        <Icon src={cardTravellerIcon}/>
        <DescriptionPartLabel>Traveller</DescriptionPartLabel>
      </TravellerPart>
      <LocationsPart>
        <Icon src={locationIcon}/>
        <DescriptionPartLabel>Locations</DescriptionPartLabel>
      </LocationsPart>
      <DatePart>
        <Icon src={dateIcon}/>
        <DescriptionPartLabel>Date</DescriptionPartLabel>
      </DatePart>
    </TravellerCardDescriptionWrapper>
  )
}

export default TravellersCardsDescription