import React from 'react'
import Helmet from 'react-helmet'

import NavBar from '../components/NavBar.jsx'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render: function () {
    return (
      <div>
        <Helmet
          defaultTitle='Application'
          titleTemplate='%s | Application'
          />
        <h1>Application</h1>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
})
