import React from 'react'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render: function () {
    return (
      <div>
        <h1>Application</h1>
        { this.props.children }
      </div>
    )
  }
})
