import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions/domain-actions'
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
    value: state.domain.value
  }
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainPage)
