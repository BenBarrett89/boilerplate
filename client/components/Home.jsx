import React from 'react'
import Helmet from 'react-helmet'

import HomeConstants from '../constants/home-constants'

export default React.createClass({
  render: function () {
    return (
      <div>
        <Helmet title='Home' />
        <h2><span id={HomeConstants.homeTitleId}>{HomeConstants.homeTitleText}</span></h2>
      </div>
    )
  }
})
