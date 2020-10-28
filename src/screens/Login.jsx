import React from 'react'
import LoginForm from '../components/form/Login'
import CenterVHLayout from '../layouts/CenterVH'

function Login() {
  return (
    <CenterVHLayout style={{ maxWidth: '500px' }}>
      <LoginForm />
    </CenterVHLayout>
  )
}

export default Login
