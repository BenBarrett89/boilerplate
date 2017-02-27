import React from 'react'
import { Link } from 'react-router'

import DomainConstants from '../constants/domain-constants'

export default React.createClass({
  propTypes: {
    domains: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        _id: React.PropTypes.string,
        count: React.PropTypes.number,
        time: React.PropTypes.string
      })
    ),
    value: React.PropTypes.number,
    decrement: React.PropTypes.func,
    getDomains: React.PropTypes.func,
    increment: React.PropTypes.func,
    postDomain: React.PropTypes.func,
    random: React.PropTypes.func,
    reset: React.PropTypes.func
  },
  componentWillMount: function () {
    this.getDomains()
  },
  componentWillUnmount: function () {
    this.props.reset()
  },
  getDomains: function () {
    this.props.getDomains && this.props.getDomains()
  },
  getDomainsArray: function () {
    return this.props.domains || []
  },
  render: function () {
    return (
      <div>
        <h3>{DomainConstants.titleText}</h3>
        <Link to='/'>{DomainConstants.backToHomeLinkText}</Link>
        <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span></p>
        <button id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</button>
        <button id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</button>
        <button id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</button>
        <button id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</button>
        <button id={DomainConstants.postDomainButtonId} onClick={() => this.props.postDomain(this.props.value)}>{DomainConstants.postDomainButtonText}</button>
        <table>
          <thead>
            <tr>
              <th>{DomainConstants.countColumnHeading}</th>
              <th>{DomainConstants.timeColumnHeading}</th>
              <th>{DomainConstants.deleteColumnHeading}</th>
            </tr>
          </thead>
          <tbody>
            {this.getDomainsArray().map((domain, i) => {
              return (
                <tr key={i}>
                  <td>{domain.count}</td>
                  <td>{domain.time}</td>
                  <td />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})
