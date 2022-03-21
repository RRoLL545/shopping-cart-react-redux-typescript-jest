import axios from "axios";
import { Dispatch } from "react";
import { CartItemsAction, CartItemsActionTypes } from "../../interfaces/cartItemAction";
import {cartItemsUrl} from '../../config/url';
import { store } from "..";

/**
 * Fetch cart items data
 * @returns 
 */
export const fetchCartItems = () => {
  return async (dispatch: Dispatch<CartItemsAction>) => {
    try {
      dispatch({
        type: CartItemsActionTypes.FETCH_CART_ITEMS
      });
      const response = await axios.get(cartItemsUrl);
      setTimeout(() => {
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
 * Dispatch action DECREMENT_CART_ITEM_COUNT to cart item reducer
 * @param id id of decreasing count item
 */
export const decrementItemCount = (id: number): void => {
  store.dispatch({
    type: CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT,
    payload: id
  })
}

