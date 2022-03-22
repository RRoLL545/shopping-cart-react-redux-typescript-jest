import { ItemData } from "./itemData";

/**
 * Values of Cart items action types
 */
export enum CartItemsActionTypes {
  FETCH_CART_ITEMS = 'FETCH_CART_ITEMS',
  FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS',
  FETCH_CART_ITEMS_ERROR = 'FETCH_CART_ITEMS_ERROR',
  DECREMENT_CART_ITEM_COUNT = 'DECREMENT_CART_ITEM_COUNT',
  INCREMENT_CART_ITEM_COUNT = 'INCREMENT_CART_ITEM_COUNT',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  GO_TO_STATE_STEP = 'GO_TO_STATE_STEP'
}

/**
 * Values of State Steps Names
 */
export enum StateStep {
  CART_MANAGE = 'CART_MANAGE',
  CHECKOUT_CHECK = 'CHECKOUT_CHECK',
  CHECKOUT = 'CHECKOUT'
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
 * Decrement Cart Item Count Action interface
 */
interface DecrementCartItemCount {
  type: CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT,
  payload: number
}

/**
 * Increment Cart Item Count Action interface
 */
interface IncrementCartItemCount {
  type: CartItemsActionTypes.INCREMENT_CART_ITEM_COUNT,
  payload: number
}

/**
 * Remove Cart Item Action interface
 */
interface RemoveCartItem {
  type: CartItemsActionTypes.REMOVE_CART_ITEM,
  payload: number
}

interface GoToStateStep {
  type: CartItemsActionTypes.GO_TO_STATE_STEP,
  payload: StateStep
}

/**
 * Cart items action types
 */
export type CartItemsAction = FetchCartItemsAction | 
                              FetchCartItemsSuccessAction | 
                              FetchCartItemsErrorAction |
                              DecrementCartItemCount |
                              IncrementCartItemCount |
                              RemoveCartItem |
                              GoToStateStep;