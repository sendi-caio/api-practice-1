/* eslint-disable import/prefer-default-export */

import Axios from 'axios'
import Cookies from 'js-cookie'
import user from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}/v1`,
}
const api = Axios.create(config)

export function registerUser(params) {
  return api.post('/register', params)
}

export async function loginUser(params) {
  return api.post('/signin', params).then(
    (response) => {
      const { data } = response
      Cookies.set('token', data.accessToken)
      return true
    },
    () => (false),
  )
}

export function createPost(params) {
  console.log(user.getToken())
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${user.getToken()}`,
    },
  })
}
