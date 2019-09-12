import React, { Fragment } from 'react'
import Dish from '../components/Dish'
import { connect } from 'react-redux'

const Menu = props => {
  console.log(props)
  return(
    <Fragment>
      <h1>Menu</h1>
      { props.menu.map(item => <Dish key={item.id} dishDeets={item} />) }
    </Fragment>
  )
}

const mapStateToProps = state => {
  return { menu: state.menu }
}

export default connect(mapStateToProps)(Menu)