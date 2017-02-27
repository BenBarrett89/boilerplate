import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, random, reset } from '../actions/domain-actions'
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
