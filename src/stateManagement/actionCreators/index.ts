import * as CartItemsCreator from './cartItems';
import * as ShopItemsCreator from './shopItems'

export const ActionCreator = {
  ...CartItemsCreator,
  ...ShopItemsCreator
}
 //default ActionCreator;