/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */

import Axios from 'axios'
import { store } from '../store'
import user from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}/v1`,
}
const api = Axios.create(config)

api.interceptors.response.use(
  (response) => {
    // if (response.config.url === '/posts') console.log({ response })
    console.log(response)
    return response
  },
  (error) => {
    //
    if (error && error.response && error.response.status) {
      const status = error.response.status
      if (status === 401 || status === 403) {
        user.logOut()
        store.dispatch({ type: 'loggedOut' })
      }
    }
    return Promise.reject(error)
  },
)

api.interceptors.request.use(
  (reqConfig) => {
    if (!['/signin', '/login', '/register'].includes(reqConfig.url)) {
      if (!user.isLogin()) {
        store.dispatch({ type: 'loggedOut' })
        throw new Axios.Cancel('Operation canceled by the user.')
      }
    }
    return reqConfig
  },
  (error) => Promise.reject(error),
)

export function registerUser(params) {
  return api.post('/register', params)
}

export async function loginUser(params) {
  return api.post('/signin', params).then(
    (response) => {
      const { data } = response
      // Cookies.set('token', data.accessToken)
      user.logIn(data.accessToken)
      return true
    },
    () => (false),
  )
}

const configWithHeaders = {
  headers: {
    Authorization: `Bearer ${user.getToken()}`,
  },
}

export function createPost(params) {
  return api.post('/posts', params, configWithHeaders)
}

export function getPost() {
  return api.get('/posts')
}

export function getPaginatedPost(page, perPage) {
  return api.get(`/posts?_limit=${perPage}&_page=${page}`, configWithHeaders)
}

export function getPostById(postId) {
  return api.get(`/posts/${postId}`, configWithHeaders)
}

export function updatePost(postId, params) {
  return api.put(`/posts/${postId}`, params, configWithHeaders)
}

export function deletePost(postId) {
  return api.delete(`/posts/${postId}`, configWithHeaders)
}
