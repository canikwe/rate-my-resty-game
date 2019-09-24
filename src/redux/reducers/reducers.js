import { ADD_MENU, REMOVE_MENU } from '../actions/types'
import { combineReducers } from 'redux';
// import { menus } from '../../FakeDB'

const menuReducer = (state = [], action) => {
  //create a copy of the original state to manipulate and return later
  let newState = [...state]

  switch (action.type) {
    case ADD_MENU:
      newState.push(action.payload) //payload should be a menu object
      break
    case REMOVE_MENU:
      newState = newState.filter(m => m.id !== action.payload) //payload should be an id (integer)
      break
    default:
      return newState
  }
  return newState
}

const rootReducer = combineReducers({
  menu: menuReducer
})

export default rootReducer