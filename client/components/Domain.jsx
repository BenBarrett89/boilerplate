import React from 'react'
import { Link } from 'react-router'

import DomainConstants from '../constants/domain-constants'

export default React.createClass({
  propTypes: {
    value: React.PropTypes.number,
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func
  },
  render: function () {
    return (
      <div>
        <h3>{DomainConstants.titleText}</h3>
        <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span></p>
        <button id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</button>
        <button id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</button>
        <Link to='/'>{DomainConstants.backToHomeLinkText}</Link>
      </div>
    )
  }
})
