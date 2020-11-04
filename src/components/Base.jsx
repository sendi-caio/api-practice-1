import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HelperNavigation from './HelperNavigation'
import RedirectLogout from './RedirectLogout'
import RedirectLogin from './RedirectLogin'
import Themes from './Themes'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import PostsList from '../screens/PostsList'
import PostCreate from '../screens/PostCreate'
import PostDetail from '../screens/PostDetail'

function Base() {
  return (
    <Themes>
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
          <Route exact path="/posts">
            <RedirectLogout>
              <PostsList />
            </RedirectLogout>
          </Route>
          <Route exact path="/posts/create">
            <RedirectLogout>
              <PostCreate />
            </RedirectLogout>
          </Route>
          <Route exact path="/posts/:postId">
            <RedirectLogout>
              <PostDetail />
            </RedirectLogout>
          </Route>
        </Switch>
        <HelperNavigation />
      </Router>
    </Themes>
  )
}

export default Base
