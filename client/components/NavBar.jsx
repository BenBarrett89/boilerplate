import React from 'react'
import NavLink from './NavLink.jsx'

export default React.createClass({
  render: function () {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/domain'>Domain</NavLink>
      </div>
    )
  }
})
