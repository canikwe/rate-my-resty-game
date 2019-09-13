import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMenu } from '../redux/actions/menuActions'

class NewDishForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      image: '',
      desc: ''
    }
  }

  submitMenu = e => {
    e.preventDefault()
    const dummyMenu = { 
      id: Math.floor(Math.random() * 10000),
      name: this.state.name,
      image: this.state.image,
      desc: this.state.desc
    }
    this.props.addMenu(dummyMenu)
    this.setState({ name: '', image: '', desc: '' })
  }

  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h3>I am a form for a new menu item</h3>
        <form onSubmit={ this.submitMenu }>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleForm}
          />
          <label htmlFor='image'>image:</label>
          <input
            type='text'
            name='image'
            value={this.state.image}
            onChange={this.handleForm}
          />
          <label htmlFor='desc'>Description:</label>
          <input
            type='text'
            name='desc'
            value={this.state.desc}
            onChange={this.handleForm}
          />
          <input type='submit' value='Create New Menu!' />
        </form>
      </div>
    )

  }

}

const mapDispatchToProps = dispatch => {
  return { addMenu: menu => dispatch(addMenu(menu)) }
}

export default connect(null, mapDispatchToProps)(NewDishForm)