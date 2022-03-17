import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stateManagement';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);