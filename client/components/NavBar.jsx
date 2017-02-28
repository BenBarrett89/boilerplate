import React from 'react'
import NavLink from './NavLink.jsx'

require('../sass/components/nav-bar.scss')

export default React.createClass({
  render: function () {
    return (
      <div className='nav-bar'>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/domain'>Domain</NavLink>
      </div>
    )
  }
})
