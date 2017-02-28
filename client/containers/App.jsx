import React from 'react'
import Helmet from 'react-helmet'

import headConfig from '../config/head-config'
import NavBar from '../components/NavBar.jsx'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render: function () {
    return (
      <div>
        <Helmet
          defaultTitle={headConfig.DEFAULT_TITLE}
          titleTemplate={headConfig.TITLE_TEMPLATE}
          meta={headConfig.HEAD_META}
          />
        <h1 className='title'>Application</h1>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
})
