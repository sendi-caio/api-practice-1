/* eslint-disable prefer-object-spread */

const initialState = {
  isLoggedIn: false,
}
function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'loggedIn':
      return Object.assign({}, state, { isLoggedIn: true })
    case 'loggedOut':
      return Object.assign({}, state, { isLoggedIn: false })
    default:
      return state
  }
}

export default authReducer
