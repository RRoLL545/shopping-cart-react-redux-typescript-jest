import * as storeDispatch from './cartItems'
import * as fakeItems from '../../utils/fakeItemsData';
import { StateStep } from '../../interfaces/cartItemAction';
import { CartState } from '../../interfaces/cartState';
import { store } from "..";

describe('ActionCreators of cartItems testing', () => {

  it('should add item to Cart', () => {
    storeDispatch.addShopItemToCart(fakeItems.default[0]);
    const expectation = store.getState().cartState;
    const result: CartState = {
      cartItems: [fakeItems.default[0]],
      itemsLoading: false,
      errorMessage: '',
      errorStatus: false,
      stateStep: StateStep.CART_MANAGE
    };
    expect(expectation).toEqual(result);
  })
  it('should increase item count in Cart', () => {
    storeDispatch.incrementItemCount(1);
    const expectation = store.getState().cartState;
    const result: CartState = {
      cartItems: [fakeItems.fakeItemIncreased],
      itemsLoading: false,
      errorMessage: '',
      errorStatus: false,
      stateStep: StateStep.CART_MANAGE
    };
    expect(expectation).toEqual(result);
  })
  it('should decrease item count in Cart', () => {
    storeDispatch.incrementItemCount(1);
    const expectation = store.getState().cartState;
    const result: CartState = {
      cartItems: [fakeItems.default[0]],
      itemsLoading: false,
      errorMessage: '',
      errorStatus: false,
      stateStep: StateStep.CART_MANAGE
    };
    expect(expectation).toEqual(result);
  })
  it('should remove item in Cart', () => {
    storeDispatch.removeCartItem(1);
    const expectation = store.getState().cartState;
    const result: CartState = {
      cartItems: [],
      itemsLoading: false,
      errorMessage: '',
      errorStatus: false,
      stateStep: StateStep.CART_MANAGE
    };
    expect(expectation).toEqual(result);
  })
})