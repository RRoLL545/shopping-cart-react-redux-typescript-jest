import { ItemData } from "./itemData";

export enum ShopItemsActionTypes {
  FETCH_SHOP_ITEMS = 'FETCH_SHOP_ITEMS',
  FETCH_SHOP_ITEMS_SUCCESS = 'FETCH_SHOP_ITEMS_SUCCESS',
  FETCH_SHOP_ITEMS_ERROR = 'FETCH_SHOP_ITEMS_ERROR',
  GO_TO_SHOP_STATE_STEP = 'GO_TO_SHOP_STATE_STEP'
}

/**
 * Values of Shop State Steps Names
 */
 export enum ShopStateStep {
  NO_ACTION = 'NO_ACTION',
  FETCH_SHOP = 'FETCH_SHOP',
  SHOW_SHOP = 'SHOW_SHOP',
  HIDE_SHOP = 'HIDE_SHOP'
}

/**
 * Fetch Shop Items Action interface
 */
 interface FetchShopItemsAction {
  type: ShopItemsActionTypes.FETCH_SHOP_ITEMS
}

/**
 * Fetch Shop Items Success Action interface
 */
interface FetchShopItemsSuccessAction {
  type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
  payload: ItemData[]
}

/**
 * Fetch Shop Items Action with Error interface
 */
interface FetchShopItemsErrorAction {
  type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_ERROR,
  payload: string
}

/**
 * Go To Shop State Step Action interface
 */
 interface GoToShopStateStep {
  type: ShopItemsActionTypes.GO_TO_SHOP_STATE_STEP,
  payload: ShopStateStep
}

/**
 * Shop items action types
 */
 export type ShopItemsAction =  FetchShopItemsAction | 
                                FetchShopItemsSuccessAction | 
                                FetchShopItemsErrorAction |
                                GoToShopStateStep;