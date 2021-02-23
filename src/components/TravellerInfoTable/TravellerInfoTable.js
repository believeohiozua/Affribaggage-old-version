import React from 'react'
import {connect} from 'react-redux'
import {InfoTable} from 'components/UI'
import {showItemWeightInKg, showItemWeightInLbs} from '../../redux'

import {InfoItemWrapper, Info, WeightSwitcher} from './style'

const TravellerInfoTable = (props) => {
  return (
    <InfoTable>
      <InfoItemWrapper>
        <Info>Travelling from</Info>
        <Info>Berlin, Germany</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Berlin, Germany</Info>
        <Info>New York, NY</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Date of the trip</Info>
        <Info>11 Dec 2020</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Max weight</Info>
        <Info>
          10 <WeightSwitcher
               isItemWeightInKg={props.isItemWeightInKg}
               isItemWeightInLbs={props.isItemWeightInLbs}>
               {props.isItemWeightInKg ? 'kg' : 'lbs'}
             </WeightSwitcher>
             <WeightSwitcher
               isItemWeightInKg={props.isItemWeightInKg}
               isItemWeightInLbs={props.isItemWeightInLbs}
               onClick={() => props.isItemWeightInKg ? props.showItemWeightInLbsCmp() : props.showItemWeightInKgCmp()}>
               {props.isItemWeightInKg ? 'lbs' : 'kg'}
             </WeightSwitcher>
        </Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Available until</Info>
        <Info>25 Dec 2020</Info>
      </InfoItemWrapper>
      <InfoItemWrapper>
        <Info>Willing to Accept</Info>
        <Info>$104</Info>
      </InfoItemWrapper>
    </InfoTable>
  )
}

const mapStateToProps = (state) => {
  return {
    isItemWeightInKg: state.userInfo.isItemWeightInKg,
    isItemWeightInLbs: state.userInfo.isItemWeightInLbs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showItemWeightInKgCmp: () => dispatch(showItemWeightInKg()),
    showItemWeightInLbsCmp: () => dispatch(showItemWeightInLbs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravellerInfoTable)