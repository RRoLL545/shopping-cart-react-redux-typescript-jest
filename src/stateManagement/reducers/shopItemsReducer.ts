import { ShopItemsAction, ShopItemsActionTypes } from "../../interfaces/shopItemAction"
import { ShopState } from "../../interfaces/shopState"

/**
 * Initial state of the Shop
 */
 const initialState: ShopState = {
  shopItems: [],
  itemsLoading: false,
  errorMessage: '',
  errorStatus: false
}

export const shopItemsReducer = (state: ShopState = initialState, action: ShopItemsAction): ShopState => {
  switch (action.type) {
    case ShopItemsActionTypes.FETCH_SHOP_ITEMS:
      return {
        itemsLoading: true,
        shopItems: [],
        errorMessage: '',
        errorStatus: false
      }
    case ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS:
      return {
        itemsLoading: false,
        shopItems: action.payload,
        errorMessage: '',
        errorStatus: false
      }
    case ShopItemsActionTypes.FETCH_SHOP_ITEMS_ERROR:
      return {
        itemsLoading: false,
        shopItems: [],
        errorMessage: action.payload,
        errorStatus: true
      }
    default:
      return state;
  }
}