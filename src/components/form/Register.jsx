/* eslint-disable jsx-a11y/label-has-for */

import React from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../services/api'

function Register() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div>
        <label>Email</label>
        <input type="text" name="email" ref={register} />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" ref={register} />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
