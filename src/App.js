import React, { Fragment } from 'react';
import Menu from './containers/Menu'
import NewDishForm from './components/NewDishForm'
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Menu />
      <NewDishForm />
    </Fragment>
  );
}

export default App;
