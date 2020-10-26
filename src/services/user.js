import Cookies from 'js-cookie'

function logOut() {
  Cookies.remove('token')
}

function logIn(token) {
  Cookies.set('token', token)
}

function getToken() {
  console.log('di panggil')
  return Cookies.get('token')
}

function isLogin() {
  return !!getToken()
}

export default {
  logOut,
  logIn,
  getToken,
  isLogin,
}
