import React from 'react'
import {fromToLine} from 'assets'

import {
  TravellerCardWrapper,
  TravellerProfileWrapper,
  TravellerAvatarWrapper,
  TravellerAvatar,
  TravellerInfoWrapper,
  TravellerName,
  TravellerLabel,
  LocationWrapper,
  LocationLineWrapper,
  LocationLine,
  LocationCountriesWrapper,
  LocationFromCountryWrapper,
  LocationFromCountryFlag,
  LocationFromCountryName,
  LocationToCountryWrapper,
  LocationToCountryFlag,
  LocationToCountryName,
  DateWrapper,
  Date
} from './style'

const TravellerCard = (props) => {
  return (
    <TravellerCardWrapper onClick={props.onClick}>
      <TravellerProfileWrapper>
        <TravellerAvatarWrapper>
          <TravellerAvatar src={props.travellerAvatar}/>
        </TravellerAvatarWrapper>
        <TravellerInfoWrapper>
          <TravellerName>{props.travellerName}</TravellerName>
          <TravellerLabel>is travelling</TravellerLabel>
        </TravellerInfoWrapper>
      </TravellerProfileWrapper>
      <LocationWrapper>
        <LocationLineWrapper>
          <LocationLine src={fromToLine}/>
        </LocationLineWrapper>
        <LocationCountriesWrapper>
          <LocationFromCountryWrapper>
            <LocationFromCountryFlag src={props.fromCountryFlag}/>
            <LocationFromCountryName>
              {props.from}
            </LocationFromCountryName>
          </LocationFromCountryWrapper>
          <LocationToCountryWrapper>
            <LocationToCountryFlag src={props.toCountryFlag}/>
            <LocationToCountryName>
              {props.to}
            </LocationToCountryName>
          </LocationToCountryWrapper>
        </LocationCountriesWrapper>
      </LocationWrapper>
      <DateWrapper>
        <Date>{props.date}</Date>
      </DateWrapper>
    </TravellerCardWrapper>
  )
}

export default TravellerCard