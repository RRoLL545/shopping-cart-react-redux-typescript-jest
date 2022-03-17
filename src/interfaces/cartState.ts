import { ItemData } from "./itemData";

/**
 * Cart state data
 */
export interface CartState {
  /**
   * Data of current items in the cart
   */
  cartItems: ItemData[] | [],

  /**
   * Cart items data loading state
   */
  ItemsLoading: boolean,

  /**
   * Error status of loading cart items data
   */
  errorStatus: boolean,

  /**
   * Error message
   */
  errorMessage: string
}