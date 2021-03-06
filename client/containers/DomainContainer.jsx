import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { decrement, deleteDomain, getDomains, increment, postDomain, random, reset } from '../actions/domain-actions'
import Domain from '../components/Domain.jsx'

export const DomainPage = React.createClass({
  render: function () {
    return (
      <div>
        <Helmet title='Domain' />
        <Domain {...this.props} />
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    domains: state.domain.domains,
    value: state.domain.value
  }
}

function mapDispatchToProps (dispatch) {
  return {
    decrement: () => {
      dispatch(decrement())
    },
    deleteDomain: id => {
      dispatch(deleteDomain(id))
    },
    getDomains: () => {
      dispatch(getDomains())
    },
    increment: () => {
      dispatch(increment())
    },
    postDomain: count => {
      dispatch(postDomain(count))
    },
    random: () => {
      dispatch(random())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainPage)
