import React from 'react'
import { connect } from 'react-redux'
import { removeMenu } from '../redux/actions/menuActions'

const Dish = props => {
  console.log(props)
  const { dishDeets: { id }, removeMenu } = props
  return(
    <div className='card' onClick={() => removeMenu(id)}>
      <p>Now rendering menu number { id }</p>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeMenu: id => dispatch(removeMenu(id))
  }
}

export default connect(null, mapDispatchToProps)(Dish)