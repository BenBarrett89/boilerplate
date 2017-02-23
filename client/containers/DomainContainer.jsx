import React from 'react'
import { connect } from 'react-redux'

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
  return state
}

export default connect(mapStateToProps)(DomainPage)
