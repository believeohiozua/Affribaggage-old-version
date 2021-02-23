import React from 'react'
import {becomePartnerIcon, callBackIcon} from 'assets'
import {connect} from 'react-redux'
import {showHomePart, showHowItWorksPart} from '../../redux'

import {
  BecomePartnerLink,
  BecomePartnerWrapper,
  CallBackLink,
  CallBackWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  HeaderWrapper,
  HomeLink,
  HomeLinkWapper,
  HowItWorksLink,
  HowItWorksWrapper,
  Icon
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLeftWrapper>
        <BecomePartnerWrapper>
          <Icon src={becomePartnerIcon}/>
          <BecomePartnerLink href="#!">
            Become a partner
          </BecomePartnerLink>
        </BecomePartnerWrapper>
        <CallBackWrapper>
          <Icon src={callBackIcon}/>
          <CallBackLink href="#!">
            Request a call back
          </CallBackLink>
        </CallBackWrapper>
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <HomeLinkWapper
          isActive={props.isHomeLinkActive}
          onClick={() => props.showHomePartCmp()}>
          <HomeLink>
            Home
          </HomeLink>
        </HomeLinkWapper>
        <HowItWorksWrapper
          isActive={props.isHowIsWorksLinkActive}
          onClick={() => props.showHowItWorksPartCmp()}>
          <HowItWorksLink>
            How it works
          </HowItWorksLink>
        </HowItWorksWrapper>
      </HeaderRightWrapper>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isHomeLinkActive: state.pages.isHomeLinkActive,
    isHowIsWorksLinkActive: state.pages.isHowIsWorksLinkActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showHomePartCmp: () => dispatch(showHomePart()),
    showHowItWorksPartCmp: () => dispatch(showHowItWorksPart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)