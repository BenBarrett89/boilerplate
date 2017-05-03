import React from 'react'
import { Link } from 'react-router'
import { NavItem } from 'react-bootstrap'

export default React.createClass({
  render: function () {
    return (
      <NavItem>
        <Link {...this.props} />
      </NavItem>
    )
  }
})
