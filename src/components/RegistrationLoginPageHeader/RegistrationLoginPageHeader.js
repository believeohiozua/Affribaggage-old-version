import React from 'react'
import {connect} from 'react-redux'
import {britishFlag, burgerMenu, logo, selectLanguageIcon} from 'assets'
import {RegisterLoginSideDrawer} from 'components'
import {Button} from 'components/UI'
import {showLoginForm, showRegisterForm, showWindowAndBackdrop} from '../../redux'

import {
  ButtonsWrapper,
  ButtonWrapper,
  HeaderMin,
  LanguageFlag,
  LinkWrapper,
  LoginRegisterSwitcher,
  LoginRegisterSwitcherWrapper,
  Logo,
  LogoMini,
  LogoMiniWrapper,
  LogoWrapper,
  Menu,
  MenuBurger,
  MenuBurgerWrapper,
  Nav,
  NavLinks,
  RegistrationLoginPageHeaderWrapper,
  SelectArrows,
  SelectLangLoginRegSwitcherWrapper,
  SelectLangWrapper
} from './style'

const RegistrationLoginPageHeader = (props) => {
  const changeForm = () => {
    if (props.isLoginFormActive) {
      props.showRegisterFormCmp()
    } else {
      props.showLoginFormCmp()
    }
  }

  return (
    <>
      <RegistrationLoginPageHeaderWrapper>
        <LogoWrapper>
          <Logo src={logo}/>
        </LogoWrapper>
        <Menu>
          <NavLinks>
            <LinkWrapper><Nav to="#!">BLOG</Nav></LinkWrapper>
            <LinkWrapper><Nav to="#!">CARGO</Nav></LinkWrapper>
            <LinkWrapper><Nav to="#!">TRAVELLERS</Nav></LinkWrapper>
          </NavLinks>
          <ButtonsWrapper>
            <ButtonWrapper>
              <Button
                btnType="loginRegister"
                onClick={changeForm}>
                {props.isLoginFormActive ? 'REGISTER' : 'LOGIN'}
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                btnType="secondary"
                style={{fontSize: 10}}>
                SELECT LANGUAGE
              </Button>
            </ButtonWrapper>
          </ButtonsWrapper>
        </Menu>
      </RegistrationLoginPageHeaderWrapper>
      <HeaderMin>
        <MenuBurgerWrapper onClick={() => props.showWindowAndBackdropCmp()}>
          <MenuBurger src={burgerMenu}/>
        </MenuBurgerWrapper>
        <RegisterLoginSideDrawer/>
        <LogoMiniWrapper isLoginFormActive={props.isLoginFormActive}>
          <LogoMini src={logo}/>
        </LogoMiniWrapper>
        <SelectLangLoginRegSwitcherWrapper>
          <SelectLangWrapper>
            <LanguageFlag src={britishFlag}/>
            <SelectArrows src={selectLanguageIcon}/>
          </SelectLangWrapper>
          <LoginRegisterSwitcherWrapper onClick={changeForm}>
            <LoginRegisterSwitcher>
              {props.isLoginFormActive ? 'REGISTER' : 'LOGIN'}
            </LoginRegisterSwitcher>
          </LoginRegisterSwitcherWrapper>
        </SelectLangLoginRegSwitcherWrapper>
      </HeaderMin>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoginFormActive: state.registerLogin.isLoginFormActive,
    isRegisterFormActive: state.registerLogin.isRegisterFormActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showLoginFormCmp: () => dispatch(showLoginForm()),
    showRegisterFormCmp: () => dispatch(showRegisterForm()),
    showWindowAndBackdropCmp: () => dispatch(showWindowAndBackdrop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationLoginPageHeader)