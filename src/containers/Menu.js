import React, { Component, Fragment } from 'react'
import Dish from '../components/Dish'
import { connect } from 'react-redux'

const Menu = props => {
  const { menu } = props

  return(
    <Fragment>
      <h1>Menu</h1>
      <div className='uk-grid-small' data-uk-grid>
        { menu.map(item => <Dish key={item.id} dishDeets={item} />) }
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return { menu: state.menu }
}

export default connect(mapStateToProps)(Menu)