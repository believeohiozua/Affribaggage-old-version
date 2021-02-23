import {SHOW_LOGIN_FORM, SHOW_REGISTER_FORM} from '../actionTypes'

export const showLoginForm = () => {
  return {
    type: SHOW_LOGIN_FORM
  }
}

export const showRegisterForm = () => {
  return {
    type: SHOW_REGISTER_FORM
  }
}