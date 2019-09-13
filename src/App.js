import React, { Fragment } from 'react'
import Menu from './containers/Menu'
import NewDishForm from './components/NewDishForm'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import { Route, Switch } from 'react-router-dom'
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
      <Nav />
      <Switch>
        <Route path='/new' component={ NewDishForm } />
        <Route exact path='/' component={ Menu } />
        <Route component={ NotFound } />
      </Switch>
    </Fragment>
  );
}

export default App;
