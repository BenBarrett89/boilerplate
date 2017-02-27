import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { END } from 'redux-saga'

import RootReducer from './reducers'

import runSagas from './run-sagas'

// will later use this function to inspect environment variables to configure store without devtools
export function configureStore (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(RootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(browserHistory)
      )
    )
  )

  runSagas(sagaMiddleware)

  store.close = () => store.dispatch(END)

  return store
}
