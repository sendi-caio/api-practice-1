/* eslint-disable import/prefer-default-export */

import Axios from 'axios'
import user from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}/api/v1`,
}
const api = Axios.create(config)

export function registerUser(params) {
  return api.post('/register', params)
}

export async function loginUser(params) {
  try {
    const response = api.post('/signin', params)
    const { data } = response
    user.logIn(data.accessToken)
    return true
  } catch (e) {
    return false
  }
}

export function createPost(params) {
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${user.getToken()}`,
    },
  })
}
