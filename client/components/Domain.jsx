import React from 'react'
import { Link } from 'react-router'
import { Button, Col, Grid, Row } from 'react-bootstrap'

import DomainConstants from '../constants/domain-constants'

require('../sass/components/domain.scss')

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
      <Grid>
        <Row className='show-grid'>
          <h2>{DomainConstants.titleText}</h2>
          <Col xs={12} md={1} className='current-counter'>
            <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span></p>
            <Button bsStyle='default' id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</Button>
            <Button bsStyle='default' id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</Button>
            <Button bsStyle='warning' id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</Button>
            <Button bsStyle='info' id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</Button>
            <Button bsStyle='primary' id={DomainConstants.postDomainButtonId} onClick={() => this.props.postDomain(this.props.value)}>{DomainConstants.postDomainButtonText}</Button>
          </Col>
          <Col xs={12} md={11}>
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
                        <Button
                          bsStyle='danger'
                          id={`${DomainConstants.deleteDomainButtonId}-${domain._id}`}
                          onClick={() => this.props.deleteDomain(domain._id)}>
                          {DomainConstants.deleteDomainButtonText}
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <br />
            <Link to='/'>{DomainConstants.backToHomeLinkText}</Link>
          </Col>
        </Row>
      </Grid>
    )
  }
})
