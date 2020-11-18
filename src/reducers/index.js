import { combineReducers } from 'redux'
import logReducer from './logReducer'
import techReucer from './techReducer'

export default combineReducers({
  log: logReducer,
  tech: techReucer,
})
