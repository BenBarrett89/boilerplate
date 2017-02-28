import React from 'react'
import { Link } from 'react-router'

import DomainConstants from '../constants/domain-constants'

require('../sass/domain.scss')

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
    deleteDomain: React.PropTypes.func,
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
        <div className='current-counter'>
          <Link to='/'>{DomainConstants.backToHomeLinkText}</Link>
          <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span></p>
          <button className='button' id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</button>
          <button className='button' id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</button>
          <button className='button primary' id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</button>
          <button className='button' id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</button>
          <button className='button secondary' id={DomainConstants.postDomainButtonId} onClick={() => this.props.postDomain(this.props.value)}>{DomainConstants.postDomainButtonText}</button>
        </div>
        <table className='domain-table'>
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
                  <td>
                    <button
                      className='button primary delete'
                      id={`${DomainConstants.deleteDomainButtonId}-${domain._id}`}
                      onClick={() => this.props.deleteDomain(domain._id)}>
                      {DomainConstants.deleteDomainButtonText}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})
