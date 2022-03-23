import axios from "axios";
import { Dispatch } from "react";
import { shopItemsUrl } from "../../config/url";
import { ShopItemsAction, ShopItemsActionTypes } from "../../interfaces/shopItemAction";

/**
 * Dispatch Fetch shop items data action
 * @returns 
 */
export const fetchShopItems = () => {
  return async (dispatch: Dispatch<ShopItemsAction>) => {
    try {
      dispatch({
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS
      });
      const response = await axios.get(shopItemsUrl);
      setTimeout(() => { // emulation of waiting response from server process
        dispatch({
          type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
          payload: response.data.items
        });
      }, 800);
    } catch (error) {
      dispatch({
        type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_ERROR,
        payload: 'Error to load items from the shop. Please try later.'
      })
    }
  }
}