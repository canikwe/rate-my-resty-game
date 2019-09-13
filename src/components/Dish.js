import React from 'react'
import { connect } from 'react-redux'
import { removeMenu } from '../redux/actions/menuActions'

const Dish = props => {
  const { dishDeets: { id, name }, removeMenu } = props

  return(
    <div className='card' onClick={() => removeMenu(id)}>
      <div className='uk-card .uk-card-small uk-card-default uk-grid-small'>
        <div className='uk-card-media-top'>
          <img src='https://www.rnz.co.nz/assets/news_crops/60885/eight_col_32917696_l.jpg?1531180823' alt='food' />
        </div>
        <div className='uk-card-body'>
          <h3 className='uk-card-title'>{ name } - { id }</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeMenu: id => dispatch(removeMenu(id))
  }
}

export default connect(null, mapDispatchToProps)(Dish)