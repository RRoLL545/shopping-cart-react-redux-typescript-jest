import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CartItemsActionTypes, StateStep } from '../../interfaces/cartItemAction';
import { rootReducer } from '../../stateManagement/reducers';
import fakeItems from '../../utils/fakeItemsData';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart component testing', () => {
  let store= createStore(rootReducer, applyMiddleware(thunk));

  it('should render ShoppingCart component with main and aside tags', () => {
    render(<Provider store={store}><ShoppingCart /></Provider>);
    expect(screen.getByRole('main')).toBeEnabled();
    expect(screen.getByRole('complementary')).toBeEnabled();
  })

  it('should render CheckOutData component', () => {
    store.dispatch({
      type: CartItemsActionTypes.GO_TO_STATE_STEP,
      payload: StateStep.CHECKOUT_CHECK
    })
    render(<Provider store={store}><ShoppingCart /></Provider>);
    expect(screen.getByText('Proceed')).toBeEnabled();
  })

  it('should render ShoppingCart component with "You were redirected to checkout page..."', () => {
    store.dispatch({
      type: CartItemsActionTypes.GO_TO_STATE_STEP,
      payload: StateStep.CHECKOUT
    })
    render(<Provider store={store}><ShoppingCart /></Provider>);
    expect(screen.getByText('You were redirected to checkout page...')).toBeEnabled();
  })
})