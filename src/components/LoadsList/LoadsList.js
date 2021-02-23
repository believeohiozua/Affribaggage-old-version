import React from 'react'
import {connect} from 'react-redux'
import {LoadCard} from 'components/UI'
import {WhatYouCannotSend} from 'components'
import {companyAdvertising, nigeriaFlag, productPhoto, ukrainianFlag} from 'assets'
import {showUserInfo} from '../../redux'

import {
  LoadsWrapper,
  LoadCardWrapper,
  AdvertiseWrapper,
  Advertise,
  WhatYouCannotSendWrapper
} from './style'

const LoadsList = (props) => {
  return (
    <LoadsWrapper>
      <LoadCardWrapper>
        <LoadCard
          productPhoto={productPhoto}
          from="Ukraine, Kiev"
          to="Nigeria, Lagos"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          baggageWeight={10}
          cost={140}
          onClick={() => props.showUserInfoCmp()}/>
      </LoadCardWrapper>
      <LoadCardWrapper>
        <LoadCard
          productPhoto={productPhoto}
          from="Ukraine, Kiev"
          to="Nigeria, Lagos"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          baggageWeight={10}
          cost={140}
          onClick={() => props.showUserInfoCmp()}/>
      </LoadCardWrapper>
      <LoadCardWrapper>
        <LoadCard
          productPhoto={productPhoto}
          from="Ukraine, Kiev"
          to="Nigeria, Lagos"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          baggageWeight={10}
          cost={140}
          onClick={() => props.showUserInfoCmp()}/>
      </LoadCardWrapper>
      <LoadCardWrapper>
        <LoadCard
          productPhoto={productPhoto}
          from="Ukraine, Kiev"
          to="Nigeria, Lagos"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          baggageWeight={10}
          cost={140}
          onClick={() => props.showUserInfoCmp()}/>
      </LoadCardWrapper>
      <AdvertiseWrapper>
        <Advertise src={companyAdvertising}/>
      </AdvertiseWrapper>
      <WhatYouCannotSendWrapper>
        <WhatYouCannotSend/>
      </WhatYouCannotSendWrapper>
      <LoadCardWrapper>
        <LoadCard
          productPhoto={productPhoto}
          from="Ukraine, Kiev"
          to="Nigeria, Lagos"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          baggageWeight={10}
          cost={140}
          onClick={() => props.showUserInfoCmp()}/>
      </LoadCardWrapper>
    </LoadsWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    showUserInfoCmp: () => dispatch(showUserInfo())
  }
}

export default connect(null, mapDispatchToProps)(LoadsList)