import React from 'react'

import HomeConstants from '../constants/home-constants'

export default React.createClass({
  render: function () {
    return (
      <div>
        <h2><span id={HomeConstants.homeTitleId}>{HomeConstants.homeTitleText}</span></h2>
      </div>
    )
  }
})
