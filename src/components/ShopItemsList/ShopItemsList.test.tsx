import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ShopItemsActionTypes, ShopStateStep } from '../../interfaces/shopItemAction';
import { rootReducer } from '../../stateManagement/reducers';
import ShopItemsList from './ShopItemsList';
import fakeItems from '../../utils/fakeItemsData';


describe('ShopItemsList component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  
  [
    {
      input: {
        state: ShopStateStep.NO_ACTION,
        keyWord: ''
      },
      result: 'no render'
    },
    {
      input: {
        state: ShopStateStep.HIDE_SHOP,
        keyWord: ''
      },
      result: 'no render'
    }
  ].forEach(testCase => {
    it('should not render ShopItemsList component', () => {
      store.dispatch({
        type: ShopItemsActionTypes.GO_TO_SHOP_STATE_STEP,
        payload: testCase.input.state
      })
      render(<Provider store={store}><ShopItemsList keyWord={testCase.input.keyWord} /></Provider>);
      expect(screen.queryByText('Strange. There are no items in the shop?')).toBeNull();
      expect(screen.queryByText('Wait a moment...')).toBeNull();
      expect(screen.queryByText('Find items to add them in your cart')).toBeNull();
      expect(screen.queryByText('Add')).toBeNull();
    })
  });

  it(`should render ShopItemsList component with "Wait a moment"`, () => {
    store.dispatch({
      type: ShopItemsActionTypes.GO_TO_SHOP_STATE_STEP,
      payload: ShopStateStep.FETCH_SHOP
    })
    render(<Provider store={store}><ShopItemsList keyWord='' /></Provider>);
      expect(screen.getByText(/Wait a moment/)).toBeEnabled();
    })

  it(`should render ShopItemsList component with "Strange. There are no items in the shop?"`, () => {
    store.dispatch({
      type: ShopItemsActionTypes.GO_TO_SHOP_STATE_STEP,
      payload: ShopStateStep.SHOW_SHOP
    })
    render(<Provider store={store}><ShopItemsList keyWord='' /></Provider>);
    expect(screen.getByText(/Strange. There are no items in the shop/)).toBeEnabled();
  })

  it('should render ShopItemsForm component with error message', () => {
    store.dispatch({
      type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_ERROR,
      payload: 'any-error-message'
    })
    render(<Provider store={store}><ShopItemsList keyWord='' /></Provider>);
    expect(screen.getByText('any-error-message')).toBeEnabled();
  })

  it('should render ShopItemsForm component with success message', () => {
    store.dispatch({
      type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
      payload: fakeItems
    })
    render(<Provider store={store}><ShopItemsList keyWord='' /></Provider>);
    expect(screen.getByText('Find items to add them in your cart')).toBeEnabled();
  })

  it('should render ShopItemsForm component with no matches message', () => {
    store.dispatch({
      type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
      payload: fakeItems
    })
    render(<Provider store={store}><ShopItemsList keyWord='any-bad-keyword' /></Provider>);
    expect(screen.getByText('No items with input text found! No matches!')).toBeEnabled();
  });

  [
    {
      input: '4',
      result: 1
    },
    {
      input: 'any',
      result: 5
    },
    {
      input: 'lol',
      result: 2
    }
  ].forEach(testCase => {
    it(`should render ${testCase.result} items`, () => {
      store.dispatch({
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
        payload: fakeItems
      });
      render(<Provider store={store}><ShopItemsList keyWord={testCase.input} /></Provider>);
      const filteredItems = screen.getAllByRole('button');
      expect(filteredItems.length === testCase.result).toBeTruthy();
    })
  })
})