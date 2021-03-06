import axios from "axios";
import { Dispatch } from "react";
import { CartItemsAction, CartItemsActionTypes, StateStep } from "../../interfaces/cartItemAction";
import {cartItemsUrl} from '../../config/url';
import { store } from "..";
import { ItemData } from "../../interfaces/itemData";

/**
 * Dispatch Fetch cart items data action
 * @returns 
 */
export const fetchCartItems = () => {
  return async (dispatch: Dispatch<CartItemsAction>) => {
    try {
      dispatch({
        type: CartItemsActionTypes.FETCH_CART_ITEMS
      });
      const response = await axios.get(cartItemsUrl);
      setTimeout(() => { // emulation of waiting response from server process
        dispatch({
          type: CartItemsActionTypes.FETCH_CART_ITEMS_SUCCESS,
          payload: response.data.items
        });
      }, 800);
    } catch(error) {
      dispatch({
        type: CartItemsActionTypes.FETCH_CART_ITEMS_ERROR,
        payload: 'Error to load chosen cart items. Please try later.'
      })
    }
  }
}

/**
 * Dispatch decrement cart item count action
 * @param id id of decreasing count item
 */
export const decrementItemCount = (id: number): void => {
  store.dispatch({
    type: CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT,
    payload: id
  })
}

/**
 * Dispatch increment cart item count action
 * @param id id of increasing count item
 */
 export const incrementItemCount = (id: number): void => {
  store.dispatch({
    type: CartItemsActionTypes.INCREMENT_CART_ITEM_COUNT,
    payload: id
  })
}

/**
 * Dispatch remove cart item action
 * @param id id of removing item
 */
export const removeCartItem = (id: number): void => {
  store.dispatch({
    type: CartItemsActionTypes.REMOVE_CART_ITEM,
    payload: id
  })
}

/**
 * Dispatch go to state step action
 * @param step state step name
 */
export const goToStateStep = (step: StateStep): void => {
  store.dispatch({
    type: CartItemsActionTypes.GO_TO_STATE_STEP,
    payload: step
  })
}

/**
 * Dispatch add shop item to the cart action
 * @param shopItem shop item data
 */
export const addShopItemToCart = (shopItem: ItemData): void => {
  store.dispatch({
    type: CartItemsActionTypes.ADD_ITEM_TO_CART,
    payload: shopItem
  })
}