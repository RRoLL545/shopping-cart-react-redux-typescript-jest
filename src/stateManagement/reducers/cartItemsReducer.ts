import { CartItemsAction, CartItemsActionTypes } from "../../interfaces/cartItemAction"
import { CartState } from "../../interfaces/cartState"


/**
 * Initial state of the Cart
 */
const initialState: CartState = {
  cartItems: [],
  itemsLoading: false,
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
  const itemsList = state.cartItems;

  switch (action.type) {
    case CartItemsActionTypes.FETCH_CART_ITEMS:
      return {
        itemsLoading: true,
        cartItems: [],
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.FETCH_CART_ITEMS_SUCCESS:
      return {
        itemsLoading: false,
        cartItems: action.payload,
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.FETCH_CART_ITEMS_ERROR:
      return {
        itemsLoading: false,
        cartItems: [],
        errorMessage: action.payload,
        errorStatus: true
      }
    case CartItemsActionTypes.DECREMENT_CART_ITEM_COUNT:
      itemsList.forEach(item => {
        if(item.id === action.payload) {
          if(item.count > 1) item.count--
        }
      })
      return {
        itemsLoading: false,
        cartItems: [...itemsList],
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.INCREMENT_CART_ITEM_COUNT:
      itemsList.forEach(item => {
        if(item.id === action.payload) item.count++
      })
      return {
        itemsLoading: false,
        cartItems: [...itemsList],
        errorMessage: '',
        errorStatus: false
      }
    case CartItemsActionTypes.REMOVE_CART_ITEM:
      return {
        itemsLoading: false,
        cartItems: [...itemsList.filter(item => item.id !== action.payload)],
        errorMessage: '',
        errorStatus: false
      }
    default:
      return state;
  }
}