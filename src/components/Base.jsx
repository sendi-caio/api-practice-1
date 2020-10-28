import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HelperNavigation from './HelperNavigation'
import RedirectLogout from './RedirectLogout'
import RedirectLogin from './RedirectLogin'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

function Base() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RedirectLogout>
            <Home />
          </RedirectLogout>
        </Route>
        <Route path="/login">
          <RedirectLogin>
            <Login />
          </RedirectLogin>
        </Route>
        <Route path="/register">
          <RedirectLogin>
            <Register />
          </RedirectLogin>
        </Route>
      </Switch>
      <HelperNavigation />
    </Router>
  )
}

export default Base
