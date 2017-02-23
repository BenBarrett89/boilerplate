import React from 'react'

import NavBar from '../components/NavBar.jsx'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render: function () {
    return (
      <div>
        <h1>Application</h1>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
})
