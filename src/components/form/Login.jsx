/* eslint-disable jsx-a11y/label-has-for */

import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../services/api'

function Login() {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  function callLoginUser(data) {
    loginUser(data).then(
      (isLogin) => {
        if (isLogin) {
          dispatch({ type: 'loggedIn' })
        }
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(callLoginUser)}>
      <div>
        <label>Email</label>
        <input type="text" name="email" ref={register} />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" ref={register} />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
