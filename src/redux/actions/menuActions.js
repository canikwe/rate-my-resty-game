import { ADD_MENU, REMOVE_MENU } from './types'

export const addMenu = payload => ({type: ADD_MENU, payload}) //payload is a new menu oobject

export const removeMenu = payload => ({type: REMOVE_MENU, payload}) //payload is a menu id (integer)