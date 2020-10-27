import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function RedirectLogin({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <Fragment>
      {isLoggedIn ? (<Redirect to="/" />) : children}
    </Fragment>
  )
}
export default RedirectLogin
