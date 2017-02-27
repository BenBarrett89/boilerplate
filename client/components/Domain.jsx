import React from 'react'
import { Link } from 'react-router'

import DomainConstants from '../constants/domain-constants'

export default React.createClass({
  propTypes: {
    value: React.PropTypes.number,
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func,
    random: React.PropTypes.func,
    reset: React.PropTypes.func
  },
  componentWillUnmount: function () {
    this.props.reset()
  },
  render: function () {
    return (
      <div>
        <h3>{DomainConstants.titleText}</h3>
        <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span></p>
        <button id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</button>
        <button id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</button>
        <button id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</button>
        <button id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</button>
        <Link to='/'>{DomainConstants.backToHomeLinkText}</Link>
      </div>
    )
  }
})
