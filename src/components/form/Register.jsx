/* eslint-disable jsx-a11y/label-has-for */

import React from 'react'

function Register() {
  return (
    <form>
      <div>
        <label>Nama</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
