import React from 'react'
import {connect} from 'react-redux'
import {selectLoads, selectTrips} from '../../redux'

import {
  LoadsTripsSwitcherWrapper,
  LoadsWrapper,
  LoadsLabel,
  TripsWrapper,
  TripsLabel
} from './style'

const LoadsTripsSwitcher = (props) => {
  return (
    <LoadsTripsSwitcherWrapper>
      <LoadsWrapper
        isActive={props.areLoadsSelected}
        onClick={() => props.selectLoadsCmp()}>
        <LoadsLabel isActive={props.areLoadsSelected}>
          Loads
        </LoadsLabel>
      </LoadsWrapper>
      <TripsWrapper
        isActive={props.areTripsSelected}
        onClick={() => props.selectTripsCmp()}>
        <TripsLabel isActive={props.areTripsSelected}>
          Trips
        </TripsLabel>
      </TripsWrapper>
    </LoadsTripsSwitcherWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    areLoadsSelected: state.filters.areLoadsSelected,
    areTripsSelected: state.filters.areTripsSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectLoadsCmp: () => dispatch(selectLoads()),
    selectTripsCmp: () => dispatch(selectTrips())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadsTripsSwitcher)