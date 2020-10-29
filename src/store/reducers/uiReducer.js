const initialState = {
  activeTheme: 'yeti',
  themes: [
    'cosmo',
    'journal',
    'materia',
    'slate',
    'yeti',
    'solar',
  ],
}

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'ui.changeTheme': {
      return { ...state, activeTheme: action.theme }
    }
    default:
      return state
  }
}

export default uiReducer
