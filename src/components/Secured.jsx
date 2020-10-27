import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Secured({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <Fragment>
      {isLoggedIn ? children : (<Redirect to="/login" />)}
    </Fragment>
  )
}
export default Secured
