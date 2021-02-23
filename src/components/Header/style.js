import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 91%;
  position: fixed;
  right: 0;
  z-index: 9999;
`

export const HeaderLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
  border-bottom: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-right: 1px solid #D9D9D9;
  background: #ffffff;
`

export const BecomePartnerWrapper = styled.div`
  width: 139px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`

export const Icon = styled.img`
  max-height: 12.5px;
`

export const BecomePartnerLink = styled.a`
  color: #ff9494;
  font-size: 15px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export const CallBackWrapper = styled.div`
  width: 148px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
  box-sizing: border-box;
`

export const CallBackLink = styled.a`
  color: #739Aff;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline; 
  }
`

export const HeaderRightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D9D9D9; 
  box-sizing: border-box;
`

export const HomeLinkWapper = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-bottom: 1px solid #D9D9D9;
  background: ${p => p.isActive ? '#ededed' : '#ffffff'};
  box-sizing: border-box;
  cursor: pointer;
`

export const HomeLink = styled.span`
  font-size: 14px;
`

export const HowItWorksWrapper = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-left: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  background: ${p => p.isActive ? '#ededed' : '#ffffff'};
  box-sizing: border-box;
  cursor: pointer;
`

export const HowItWorksLink = styled.span`
  font-size: 14px;
`