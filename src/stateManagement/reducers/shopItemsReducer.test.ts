import { shopItemsReducer } from './shopItemsReducer';
import * as fakeItems from '../../utils/fakeItemsData';
import { ShopState } from '../../interfaces/shopState';
import { ShopItemsAction, ShopItemsActionTypes, ShopStateStep } from '../../interfaces/shopItemAction';

describe('shopItemsReducer testing', () => {
  const initialState: ShopState = {
    shopItems: [],
    itemsLoading: false,
    errorMessage: '',
    errorStatus: false,
    shopStateStep: ShopStateStep.NO_ACTION
  };

  [
    {
      description: 'should return initial state (default)',
      inputAction: {},
      inputState: undefined,
      resultState: initialState
    },
    {
      description: 'should return state with shopStateStep equal to ShopStateStep.SHOW_SHOP when fetching shop items',
      inputAction: {
        payload: fakeItems.default[0],
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS
      },
      inputState: initialState,
      resultState: {
        shopItems: [],
        itemsLoading: true,
        errorMessage: '',
        errorStatus: false,
        shopStateStep: ShopStateStep.SHOW_SHOP
      }
    },
    {
      description: 'should return corresponding state when fetching shop items',
      inputAction: {
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS
      },
      inputState: initialState,
      resultState: {
        shopItems: [],
        itemsLoading: true,
        errorMessage: '',
        errorStatus: false,
        shopStateStep: ShopStateStep.SHOW_SHOP
      }
    },
    {
      description: 'should return corresponding state when shop items fetch is done successfully',
      inputAction: {
        payload: fakeItems.default,
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS
      },
      inputState: initialState,
      resultState: {
        shopItems: [...fakeItems.default],
        itemsLoading: false,
        errorMessage: '',
        errorStatus: false,
        shopStateStep: ShopStateStep.SHOW_SHOP
      }
    },
    {
      description: 'should return corresponding state when shop items fetch is trowed an error',
      inputAction: {
        payload: 'any-error-message',
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_ERROR
      },
      inputState: initialState,
      resultState: {
        shopItems: [],
        itemsLoading: false,
        errorMessage: 'any-error-message',
        errorStatus: true,
        shopStateStep: ShopStateStep.SHOW_SHOP
      }
    }
  ].forEach(testCase => {
    it(`${testCase.description}`, () => {
      expect(shopItemsReducer(testCase.inputState, testCase.inputAction as ShopItemsAction)).toEqual(testCase.resultState);
    })
  });
})