import ReactDom from 'react-dom'
import React, { StrictMode } from 'react'
import App from './components/App'

ReactDom.render(
  <StrictMode><App /></StrictMode>,
  document.getElementById('root'),
)
