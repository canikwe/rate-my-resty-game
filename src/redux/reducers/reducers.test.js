import React from 'react'
import reducers from '../reducers/reducers'


describe('Reducers - NewDishForm', () => { //Test suite
  it(`no pizza's have been added1`, () => { //individual tests
    const action = {type: '@@INIT'}

    expect(reducers(undefined, action)).toEqual({ menu: [] })
  }) //Shallowly checks objects

  it(`adds menus to the store`, () => {
    const action = {type: 'ADD_MENU', payload: {id: 1, name: 'new menu item here'}}

    expect(reducers(
      {
        menu: [] 
      }, action)).toEqual({ 
        menu: [{ id: 1, name: 'new menu item here' }] 
      })
  })

  it('it removes a menu item from the array', () => {
    const action = {type: 'REMOVE_MENU', payload: 1}

    expect(reducers(
      {menu: [{ id: 1, name: 'new menu item here' }]}, action
    )).toEqual({menu: []})
  })
})