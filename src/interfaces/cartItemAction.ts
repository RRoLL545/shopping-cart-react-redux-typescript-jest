import { ItemData } from "./itemData";

/**
 * Values of Cart items action types
 */
export enum CartItemsActionTypes {
  FETCH_CART_ITEMS = 'FETCH_CART_ITEMS',
  FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS',
  FETCH_CART_ITEMS_ERROR = 'FETCH_CART_ITEMS_ERROR',
  DECREMENT_CART_ITEM_COUNT = 'DECREMENT_CART_ITEM_COUNT',
  INCREMENT_CART_ITEM_COUNT = 'INCREMENT_CART_ITEM_COUNT'
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
  payload: ItemData[]
}

/**
 * Fetch Cart Items Action with Error interface
 */
interface FetchCartItemsErrorAction {
  type: CartItemsActionTypes.FETCH_CART_ITEMS_ERROR,
  payload: string
}

/**
 * Decrement Cart Item Count interface
 */
interface DecrementCartItemCount {
  type: CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT,
  payload: number
}

/**
 * Increment Cart Item Count interface
 */
interface IncrementCartItemCount {
  type: CartItemsActionTypes.INCREMENT_CART_ITEM_COUNT,
  payload: number
}

/**
 * Cart items action types
 */
export type CartItemsAction = FetchCartItemsAction | 
                              FetchCartItemsSuccessAction | 
                              FetchCartItemsErrorAction |
                              DecrementCartItemCount |
                              IncrementCartItemCount;