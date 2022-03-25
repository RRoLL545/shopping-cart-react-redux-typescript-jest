import { ShopItemsAction, ShopItemsActionTypes, ShopStateStep } from "../../interfaces/shopItemAction"
import { ShopState } from "../../interfaces/shopState"

/**
 * Initial state of the Shop
 */
 const initialState: ShopState = {
  shopItems: [],
  itemsLoading: false,
  errorMessage: '',
  errorStatus: false,
  shopStateStep: ShopStateStep.NO_ACTION
}

export const shopItemsReducer = (state: ShopState = initialState, action: ShopItemsAction): ShopState => {
  switch (action.type) {
    case ShopItemsActionTypes.FETCH_SHOP_ITEMS:
      return {
        itemsLoading: true,
        shopItems: [],
        errorMessage: '',
        errorStatus: false,
        shopStateStep: ShopStateStep.FETCH_SHOP
      }
    case ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS:
      return {
        itemsLoading: false,
        shopItems: action.payload,
        errorMessage: '',
        errorStatus: false,
        shopStateStep: ShopStateStep.FETCH_SHOP
      }
    case ShopItemsActionTypes.FETCH_SHOP_ITEMS_ERROR:
      return {
        itemsLoading: false,
        shopItems: [],
        errorMessage: action.payload,
        errorStatus: true,
        shopStateStep: ShopStateStep.FETCH_SHOP
      }
    case ShopItemsActionTypes.GO_TO_SHOP_STATE_STEP:
      return {
        itemsLoading: false,
        shopItems: [...state.shopItems],
        errorMessage: '',
        errorStatus: false,
        shopStateStep: action.payload
      }
    default:
      return state;
  }
}