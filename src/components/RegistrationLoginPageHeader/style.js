import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RegistrationLoginPageHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  position: fixed;
  top: 0;
  left: 4.5%;
  right: 4.5%;
  z-index: 9999;
  background: #ffffff;
  border-radius: 0 0 16px 16px;
  padding: 0 30px;
  box-sizing: border-box;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.02);
  
  @media screen and (max-width: 700px) {
    display: none; 
  }
`

export const LogoWrapper = styled.div`
  width: 67px;
  height: 40px;
`

export const Logo = styled.img`
  width: 100%;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const NavLinks = styled.div`
  display: flex;
`

export const LinkWrapper = styled.div`
  margin-left: 25px;
`

export const Nav = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #565656;
  
  &:hover {
    text-decoration: underline;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
`

export const ButtonWrapper = styled.div`
  height: 30px;
  margin-left: 25px;
`

export const HeaderMin = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: #ffffff;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.02);
  padding: 15px 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (min-width: 701px) {
    display: none; 
  }
`

export const MenuBurgerWrapper = styled.div``

export const MenuBurger = styled.img``

export const LogoMiniWrapper = styled.div`
  width: 67px;  
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  
  @media screen and (max-width: 365px) {
    ${p => p.isLoginFormActive ? 'right: 30px' : ''};
  }
`

export const LogoMini = styled.img`
  width: 100%;
`

export const SelectLangLoginRegSwitcherWrapper = styled.div`
  display: flex;
`

export const SelectLangWrapper = styled.div`
  display: flex;
  margin-right: 12px;
  
  @media screen and (max-width: 340px) {
    margin-right: 5px;
  }
`

export const LanguageFlag = styled.img``

export const SelectArrows = styled.img``

export const LoginRegisterSwitcherWrapper = styled.div``

export const LoginRegisterSwitcher = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #F05050;
  cursor: pointer; 
`