import React from 'react'
import { Link } from 'react-router-dom'

const styling = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
}

function HelperNavigation() {
  return (
    <nav style={styling}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  )
}
export default HelperNavigation
