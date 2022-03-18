import axios from "axios";
import { Dispatch } from "react";
import { CartItemsAction, CartItemsActionTypes } from "../../interfaces/cartItemAction";
import {cartItemsUrl} from '../../config/url';


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
          payload: response.data
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