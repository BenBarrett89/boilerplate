import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import domain from '../reducers/DomainReducer'

export default combineReducers({
  routing: routerReducer,
  domain
})
