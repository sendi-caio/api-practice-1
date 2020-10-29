import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import RegisterForm from '../components/form/Register'
import CenterVHLayout from '../layouts/CenterVH'

function Register() {
  return (
    <Fragment>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <CenterVHLayout style={{ maxWidth: '500px' }}>
        <RegisterForm />
      </CenterVHLayout>
    </Fragment>
  )
}

export default Register
