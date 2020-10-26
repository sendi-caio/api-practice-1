import React, { Fragment, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import user from '../services/user'

import HelperNavigation from './HelperNavigation'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

function Secured({ children }) {
  const [isLogin, setIsLogin] = useState(user.isLogin())

  useEffect(() => {
    if (user.isLogin()) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <Fragment>
      {isLogin ? children : (<Redirect to="/login" />)}
    </Fragment>
  )
}

function Base() {
  // const isLogin = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Secured>
            <Home />
          </Secured>
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
