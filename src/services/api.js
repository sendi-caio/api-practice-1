/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */

import Axios from 'axios'
import { store } from '../store'
import user from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}`,
}
const api = Axios.create(config)

const notSecuredEndPoint = ['/signin', '/login', '/register']

api.interceptors.response.use(
  (response) => response,
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
    if (!notSecuredEndPoint.includes(reqConfig.url)) {
      if (!user.isLogin()) {
        store.dispatch({ type: 'loggedOut' })
        throw new Axios.Cancel('Operation canceled by the user.')
      }
    }
    return reqConfig
  },
  (error) => Promise.reject(error),
)

api.interceptors.request.use(
  (reqConfig) => {
    if (!notSecuredEndPoint.includes(reqConfig.url)) {
      reqConfig.headers.common.Authorization = `Bearer ${user.getToken()}`
    }
    return reqConfig
  },
)

export function registerUser(params) {
  return api.post('/register', params)
}

export async function loginUser(params) {
  return api.post('/signin', params).then(
    (response) => {
      const { data } = response
      user.logIn(data.accessToken)
      return true
    },
    () => (false),
  )
}

export function createPost(params) {
  return api.post('/posts', params)
}

export function getPost() {
  return api.get('/posts')
}

export function getPaginatedPost(page, perPage) {
  return api.get(`/posts?_limit=${perPage}&_page=${page}`)
}

export function getPostById(postId) {
  return api.get(`/posts/${postId}`)
}

export function updatePost(postId, params) {
  return api.put(`/posts/${postId}`, params)
}

export function deletePost(postId) {
  return api.delete(`/posts/${postId}`)
}
