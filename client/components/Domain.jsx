import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
      <div>
        <h3>Domain Page</h3>
        <p>Domain page content</p>
        <Link to='/'>Back to Home</Link>
      </div>
    )
  }
})
