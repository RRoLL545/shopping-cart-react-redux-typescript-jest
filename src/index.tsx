import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stateManagement';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './extra-styles/index.css';
import './extra-styles/reset.css';
import './extra-styles/media.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);