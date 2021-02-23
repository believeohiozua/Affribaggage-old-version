import React from 'react'
import {connect} from 'react-redux'
import {WhatYouCannotSend} from 'components'
import {TravellerCard} from 'components/UI'
import {avatar, ukrainianFlag, nigeriaFlag, companyAdvertising} from 'assets'
import {showUserInfo} from '../../redux'

import {
  TravellersCardsListWrapper,
  TravellerCardWrapper,
  AdvertiseWrapper,
  Advertise,
  WhatYouCannotSendWrapper
} from './style'

const TravellersCardsList = (props) => {
  return (
    <TravellersCardsListWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
      <AdvertiseWrapper>
        <Advertise src={companyAdvertising}/>
      </AdvertiseWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
      <WhatYouCannotSendWrapper>
        <WhatYouCannotSend/>
      </WhatYouCannotSendWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
      <TravellerCardWrapper>
        <TravellerCard
          travellerAvatar={avatar}
          travellerName="Carolina Goldberg"
          fromCountryFlag={ukrainianFlag}
          toCountryFlag={nigeriaFlag}
          from="Kiev, Ukraine"
          to="Lagos, Nigeria"
          date="11 Dec 2020"
          onClick={() => props.showUserInfoCmp()}/>
      </TravellerCardWrapper>
    </TravellersCardsListWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    showUserInfoCmp: () => dispatch(showUserInfo())
  }
}

export default connect(null, mapDispatchToProps)(TravellersCardsList)