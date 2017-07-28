import React from 'react'
import Helmet from 'react-helmet'
import { Col, Grid, Row, Well } from 'react-bootstrap'

import HomeConstants from '../constants/home-constants'

require('../sass/components/home.scss')

export default React.createClass({
  render: function () {
    return (
      <Grid className='home-div'>
        <Helmet title='Home' />
        <Row>
          <Col xs={12}>
            <h2><span id={HomeConstants.homeTitleId}>{HomeConstants.homeTitleText}</span></h2>
            <Well>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan libero at arcu feugiat pulvinar. Etiam pretium justo ut hendrerit bibendum. Donec tincidunt imperdiet dui, scelerisque egestas metus pulvinar eu. Proin vulputate nisi vel ullamcorper porta. Sed ultrices massa nec quam eleifend molestie. Pellentesque dui est, viverra eget tincidunt vitae, euismod vel massa. Etiam consequat nec libero sed convallis. Ut commodo libero et sodales lacinia. Nunc at accumsan lectus. Maecenas fringilla varius sagittis. Nam et dui sed tellus finibus pulvinar vitae eget nisi. Aliquam enim sem, eleifend vitae ultricies at, pulvinar sed turpis. Nam quis arcu maximus, posuere ex quis, ullamcorper quam. Quisque molestie dui a quam euismod pulvinar vitae id velit.</p>
            </Well>
          </Col>
        </Row>
      </Grid>
    )
  }
})
