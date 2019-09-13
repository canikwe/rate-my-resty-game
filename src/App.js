import React, { Fragment } from 'react'
import Menu from './containers/Menu'
import NewDishForm from './components/NewDishForm'
import Nav from './components/Nav'
import './App.css'
import '../node_modules/uikit/dist/css/uikit-core.css'
import '../node_modules/uikit/dist/js/uikit-core.js'

//Redux-y things!
import store from './redux/store/store'
import { addMenu } from './redux/actions/menuActions'

window.store = store
window.addMenu = addMenu


const App = () => {
  return (
    <Fragment>
      <Menu />
      <NewDishForm />
    </Fragment>
  );
}

export default App;
