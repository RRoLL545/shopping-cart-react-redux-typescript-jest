import { Console } from "console";
import { CartItemsAction, CartItemsActionTypes } from "../../interfaces/cartItemAction"
import { CartState } from "../../interfaces/cartState"
import { ItemData } from "../../interfaces/itemData";


/**
 * Initial state of the Cart
 */
const initialState: CartState = {
  cartItems: [],
  ItemsLoading: false,
  errorMessage: '',
  errorStatus: false
}

/**
 * Cart items reducer
 * @param state - current store state
 * @param action - action to do
 * @returns new store state
 */
export const cartItemsReducer = (state: CartState = initialState, action: CartItemsAction): CartState => {
  //let nextState = state;
  switch (action.type) {
    case CartItemsActionTypes.FETCH_CART_ITEMS:
      return {
        ItemsLoading: true,
        cartItems: [],
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.FETCH_CART_ITEMS_SUCCESS:
      return {
        ItemsLoading: false,
        cartItems: action.payload,
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.FETCH_CART_ITEMS_ERROR:
      return {
        ItemsLoading: false,
        cartItems: [],
        errorMessage: action.payload,
        errorStatus: true
      }
    case CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT:
      const decrementItemsList = state.cartItems;
      decrementItemsList.forEach(item => {
        if(item.id === action.payload) {
          if(item.quantity > 1) item.quantity--
        }
      })
      return {
        ItemsLoading: false,
        cartItems: [...decrementItemsList],
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.INCREMENT_CART_ITEM_COUNT:
      const incrementItemsList = state.cartItems;
      incrementItemsList.forEach(item => {
        if(item.id === action.payload) item.quantity++
      })
      return {
        ItemsLoading: false,
        cartItems: [...incrementItemsList],
        errorMessage: '',
        errorStatus: false
      }
    default:
      return state;
  }
}