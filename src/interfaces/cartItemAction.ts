import { ItemData } from "./itemData";

/**
 * Values of Cart items action types
 */
export enum CartItemsActionTypes {
  FETCH_CART_ITEMS = 'FETCH_CART_ITEMS',
  FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS',
  FETCH_CART_ITEMS_ERROR = 'FETCH_CART_ITEMS_ERROR'
}

/**
 * Fetch Cart Items Action interface
 */
interface FetchCartItemsAction {
  type: CartItemsActionTypes.FETCH_CART_ITEMS
}

/**
 * Fetch Cart Items Success Action interface
 */
interface FetchCartItemsSuccessAction {
  type: CartItemsActionTypes.FETCH_CART_ITEMS_SUCCESS,
  payload: ItemData[],
}

/**
 * Fetch Cart Items Action with Error interface
 */
interface FetchCartItemsErrorAction {
  type: CartItemsActionTypes.FETCH_CART_ITEMS_ERROR,
  payload: string
}

/**
 * Cart items action types
 */
export type CartItemsAction = FetchCartItemsAction | 
                              FetchCartItemsSuccessAction | 
                              FetchCartItemsErrorAction;