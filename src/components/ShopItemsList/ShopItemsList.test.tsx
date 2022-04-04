import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ShopItemsActionTypes, ShopStateStep } from '../../interfaces/shopItemAction';
import { rootReducer } from '../../stateManagement/reducers';
import ShopItemsList from './ShopItemsList';

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
})