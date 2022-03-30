import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../stateManagement/reducers';
import CartSummary from './CartSummary';

describe('CartSummary component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  it('should render CartSummary component', () => {
    render(<Provider store={store}><CartSummary /></Provider>)
    expect(screen.getByText('Cart summary')).toBeEnabled();
    expect(screen.getByText('Checkout')).toBeEnabled();
    expect(screen.getByRole('table')).toBeEnabled()
  })
})