import { store } from '..';
import { ShopStateStep } from '../../interfaces/shopItemAction'
import * as storeDispatch from './shopItems'

describe('ActionCreators of shopItems testing', () => {
  it(`should go ${ShopStateStep.SHOW_SHOP} to state step`, () => {
    storeDispatch.goToShopStateStep(ShopStateStep.SHOW_SHOP);
    const expectation = store.getState().shopState.shopStateStep;
    expect(expectation).toBe(ShopStateStep.SHOW_SHOP);
  })
})