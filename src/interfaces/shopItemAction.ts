import { ItemData } from "./itemData";

export enum ShopItemsActionTypes {
  FETCH_SHOP_ITEMS = 'FETCH_SHOP_ITEMS',
  FETCH_SHOP_ITEMS_SUCCESS = 'FETCH_SHOP_ITEMS_SUCCESS',
  FETCH_SHOP_ITEMS_ERROR = 'FETCH_SHOP_ITEMS_ERROR'
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
 * Shop items action types
 */
 export type ShopItemsAction =  FetchShopItemsAction | 
                                FetchShopItemsSuccessAction | 
                                FetchShopItemsErrorAction;