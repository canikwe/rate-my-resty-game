import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { shallow } from 'enzyme'

describe('App', () => {
  const app = shallow(<App />)

  it('renders the Nav container', () => {
    expect(app.find('Nav').exists()).toBe(true)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('makes sure Jest is actually working', () => {
    expect(true).toBe(true)
  })
})

