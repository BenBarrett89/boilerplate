import React from 'react'
import { connect } from 'react-redux'

import { decrement, getDomains, increment, postDomain, random, reset } from '../actions/domain-actions'
import Domain from '../components/Domain.jsx'

export const DomainPage = React.createClass({
  render: function () {
    return (
      <div>
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
    getDomains: () => {
      dispatch(getDomains())
    },
    increment: () => {
      dispatch(increment())
    },
    postDomain: (count) => {
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
