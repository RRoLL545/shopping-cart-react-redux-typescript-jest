import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ShopItemsActionTypes, ShopStateStep } from '../../interfaces/shopItemAction';
import { rootReducer } from '../../stateManagement/reducers';
import ToggleShopForm from './ToggleShopForm';

describe('ToggleShopForm component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  [
    {
      input: ShopStateStep.NO_ACTION,
      result: 'without'
    },
    {
      input: ShopStateStep.FETCH_SHOP,
      result: 'with'
    },
    {
      input: ShopStateStep.SHOW_SHOP,
      result: 'with'
    },
    {
      input: ShopStateStep.HIDE_SHOP,
      result: 'without'
    }
  ].forEach(testCase => {
    it(`should render ToggleShopForm component ${testCase.result} className "button-rotated"`, () => {
      store.dispatch({
        type: ShopItemsActionTypes.GO_TO_SHOP_STATE_STEP,
        payload: testCase.input
      })
      render(<Provider store={store}><ToggleShopForm /></Provider>)

      const button = screen.getByRole('button')
      
      expect(button).toBeEnabled();
      expect(
        button.classList.contains('controls-button') && 
        button.classList.contains('toggle-button') &&
        (
          (button.classList.contains('button-rotated') && testCase.result === 'with') ||
          (!button.classList.contains('button-rotated') && testCase.result === 'without')
        )
      ).toBeTruthy();
    });
  });
})