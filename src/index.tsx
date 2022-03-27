import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stateManagement';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './extra-styles/index.css';
import './extra-styles/reset.css';
import './extra-styles/media.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);