import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    value: React.PropTypes.number,
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func
  },
  render: function () {
    return (
      <div>
        <h3>Domain Page</h3>
        <p>Counter: {this.props.value}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <Link to='/'>Back to Home</Link>
      </div>
    )
  }
})
