import React from 'react'
import { Router, browserHistory } from 'react-router'

import { routes } from './routes'

export default React.createClass({
  render: function () {
    return (
      <Router history={browserHistory}>{routes}</Router>
    )
  }
})