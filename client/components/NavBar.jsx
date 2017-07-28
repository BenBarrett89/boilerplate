import React from 'react'
import NavLink from './NavLink.jsx'
import { Nav } from 'react-bootstrap'

export default React.createClass({
  render: function () {
    return (
      <Nav bsStyle='tabs' className='nav-bar'>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/domain'>Domain</NavLink>
      </Nav>
    )
  }
})
