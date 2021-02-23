import React from 'react'
import {fromToLine} from 'assets/index'

import {
  LoadCardWrapper,
  LoadImgWrapper,
  LoadImg,
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
  BaggageWeightWrapper,
  BaggageWeight,
  BaggageWeightLabel,
  CostWrapper,
  Cost,
  CostLabel
} from './style'

const LoadCard = (props) => {
  return (
    <LoadCardWrapper onClick={props.onClick}>
      <LoadImgWrapper>
        <LoadImg src={props.productPhoto}/>
      </LoadImgWrapper>
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
      <BaggageWeightWrapper>
        <BaggageWeight>
          {props.baggageWeight}kg
        </BaggageWeight>
        <BaggageWeightLabel>
          weight
        </BaggageWeightLabel>
      </BaggageWeightWrapper>
      <CostWrapper>
        <Cost>
          ${props.cost}
        </Cost>
        <CostLabel>
          per shipment
        </CostLabel>
      </CostWrapper>
    </LoadCardWrapper>
  )
}

export default LoadCard