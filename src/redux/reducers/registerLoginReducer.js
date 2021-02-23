import {SHOW_LOGIN_FORM, SHOW_REGISTER_FORM} from '../actionTypes'

const initialState = {
  isLoginFormActive: false
}

export const registerLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_FORM:
      return {...state, isLoginFormActive: true}
    case SHOW_REGISTER_FORM:
      return {...state, isLoginFormActive: false}
    default:
      return state
  }
}