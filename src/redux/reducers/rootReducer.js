import {combineReducers} from 'redux'
import {pagesReducer} from './pagesReducer'
import {filtersReducer} from './filtersReducer'
import {registerLoginReducer} from './registerLoginReducer'
import {overlayReducer} from './overlayReducer'
import {userInfoReducer} from './userInfoReducer'

export const rootReducer = combineReducers({
  pages: pagesReducer,
  filters: filtersReducer,
  registerLogin: registerLoginReducer,
  overlay: overlayReducer,
  userInfo: userInfoReducer
})