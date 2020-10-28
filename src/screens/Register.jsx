import React from 'react'
import RegisterForm from '../components/form/Register'
import CenterVHLayout from '../layouts/CenterVH'

function Register() {
  return (
    <CenterVHLayout style={{ maxWidth: '500px' }}>
      <RegisterForm />
    </CenterVHLayout>
  )
}

export default Register
