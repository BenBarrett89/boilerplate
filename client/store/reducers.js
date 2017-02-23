import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import domain from '../reducers/domain-reducer'

export default combineReducers({
  routing: routerReducer,
  domain
})
