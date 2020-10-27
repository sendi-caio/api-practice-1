import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ButtonLogOut from './ButtonLogOut'

const styling = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
}

function HelperNavigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <nav style={styling}>
      {/* { !isLoggedIn && <Link to="/">Home</Link> } */}
      { !isLoggedIn && <Link to="/login">Login</Link> }
      { !isLoggedIn && <Link to="/register">Register</Link> }
      { isLoggedIn && <ButtonLogOut /> }
    </nav>
  )
}
export default HelperNavigation
