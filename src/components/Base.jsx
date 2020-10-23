import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function Base() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          Root
        </Route>
      </Switch>
    </Router>
  )
}

export default Base
