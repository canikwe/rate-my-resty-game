import React from 'react'
import { connect } from 'react-redux'
import { addMenu } from '../redux/actions/menuActions'

const NewDishForm = props => {
  console.log(props)
  const submitMenu = e => {
    e.preventDefault()
    const dummyMenu = { name: `I'm a new menu`, id: Math.floor(Math.random() * 10000)}
    props.addMenu(dummyMenu)
  }

  return(
    <div>
      <h3>I am a form for a new menu item</h3>
      <form onSubmit={ submitMenu }>
        <label htmlFor='name'>Name:</label>
        <input type='text'name='name'/>
        <label htmlFor='id'>id:</label>
        <input type='number' name='id' />
        <input type='submit' value='Create New Menu!' />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return { addMenu: menu => dispatch(addMenu(menu)) }
}

export default connect(null, mapDispatchToProps)(NewDishForm)