import React, { Fragment } from 'react'
import Menu from './containers/Menu'
import NewDishForm from './components/NewDishForm'
import './App.css'

//Redux-y things!
import store from './redux/store/index'
import { addMenu } from './redux/actions/index'

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
