import React from 'react'
import Dish from '../components/Dish'
import { connect } from 'react-redux'

const Menu = props => {
  const { menu } = props

  return(
    <>
      <h1>Menu</h1>
      <div className='uk-grid-small' data-uk-grid>
        {
          menu.length === 0 ?
          <p>You have no menus to rate! Please add some :)</p> :
         menu.map(item => <Dish key={item.id} dishDeets={item} />) 
        }
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return { menu: state.menu }
}

export default connect(mapStateToProps)(Menu)