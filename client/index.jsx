import React from 'react'
import { render } from 'react-dom'

import Application from './Application.jsx'

require('./sass/app.scss')

render(
  <Application />,
  document.getElementById('app')
)
