import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import RootReducer from './reducers'

  // will later use this function to inspect environment variables to configure store without devtools
export function configureStore (initialState = {}) {
  const store = createStore(RootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(browserHistory)
      )
    )
  )

  return store
}
