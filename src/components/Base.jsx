import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HelperNavigation from './HelperNavigation'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

function Base() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <HelperNavigation />
    </Router>
  )
}

export default Base
