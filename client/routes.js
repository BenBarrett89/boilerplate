import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App.jsx'
import DomainContainer from './containers/DomainContainer.jsx'

import Home from './components/Home.jsx'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/domain' component={DomainContainer} />
  </Route>
)
