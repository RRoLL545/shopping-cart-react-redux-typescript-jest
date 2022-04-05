import { CartItemsAction, CartItemsActionTypes, StateStep } from '../../interfaces/cartItemAction';
import { CartState } from '../../interfaces/cartState';
import { cartItemsReducer } from './cartItemsReducer';
import * as fakeItems from '../../utils/fakeItemsData';

describe('cartItemsReducer testing', () => {
  const initialState: CartState = {
    cartItems: [],
    itemsLoading: false,
    errorMessage: '',
    errorStatus: false,
    stateStep: StateStep.FETCH_CART_ITEMS
  };

  [
    {
      description: 'should return initial state (default)',
      inputAction: {},
      inputState: undefined,
      resultState: initialState
    },
    {
      description: 'should add item to Cart',
      inputAction: {
        payload: fakeItems.default[0],
        type: CartItemsActionTypes.ADD_ITEM_TO_CART
      },
      inputState: initialState,
      resultState: {
        cartItems: [fakeItems.default[0]],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      }
    },
    {
      description: 'should delete item with id 3 from Cart',
      inputAction: {
        payload: 3,
        type: CartItemsActionTypes.REMOVE_CART_ITEM
      },
      inputState: {
        cartItems: [...fakeItems.default],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      },
      resultState: {
        cartItems: [...fakeItems.fakeItemsReduced],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      }
    },
    {
      description: 'should decrease item with id 2 count in Cart',
      inputAction: {
        payload: 2,
        type: CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT
      },
      inputState: {
        cartItems: [...fakeItems.default],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      },
      resultState: {
        cartItems: [...fakeItems.fakeItemsDecreased],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      }
    },
    {
      description: 'should not decrease item with id 1 count in Cart',
      inputAction: {
        payload: 1,
        type: CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT
      },
      inputState: {
        cartItems: [...fakeItems.default],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      },
      resultState: {
        cartItems: [...fakeItems.default],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      }
    },
    {
      description: 'should increase item with id 1 count in Cart',
      inputAction: {
        payload: 1,
        type: CartItemsActionTypes.INCREMENT_CART_ITEM_COUNT
      },
      inputState: {
        cartItems: [...fakeItems.default],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      },
      resultState: {
        cartItems: [...fakeItems.fakeItemsIncreased],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        stateStep: StateStep.CART_MANAGE
      }
    }
  ].forEach(testCase => {
    it(`${testCase.description}`, () => {
      expect(cartItemsReducer(testCase.inputState, testCase.inputAction as CartItemsAction)).toEqual(testCase.resultState);
    })
  });
})