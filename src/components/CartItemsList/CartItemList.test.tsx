import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CartItemsActionTypes, StateStep } from '../../interfaces/cartItemAction';
import { rootReducer } from '../../stateManagement/reducers';
import fakeItems from '../../utils/fakeItemsData';
import CartItemList from './CartItemList';

describe('CartItemList component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  [
    {
      input: {
        state: StateStep.FETCH_CART_ITEMS
      },
      result: 'Loading...'
    },
    {
      input: {
        state: StateStep.CART_MANAGE
      },
      result: 'Your cart is empty.'
    }
  ].forEach(testCase => {
    it(`should render CartItemList component with "${testCase.result}"`, () => {
      store.dispatch({
        type: CartItemsActionTypes.GO_TO_STATE_STEP,
        payload: testCase.input.state
      });
      render(<Provider store={store}><CartItemList /></Provider>);
      expect(screen.getByText(testCase.result)).toBeEnabled();
    })
  });
  
  it('should render CartItemList component with error message', () => {
    store.dispatch({
      type: CartItemsActionTypes.FETCH_CART_ITEMS_ERROR,
      payload: 'any-error-message'
    })
    render(<Provider store={store}><CartItemList /></Provider>);
    expect(screen.getByText('any-error-message')).toBeEnabled();
  })

  it('should render CartItemList component with list of cart items', () => {
    store.dispatch({
      type: CartItemsActionTypes.FETCH_CART_ITEMS_SUCCESS,
      payload: fakeItems
    })
    render(<Provider store={store}><CartItemList /></Provider>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length === fakeItems.length * 3).toBeTruthy();
  })
})