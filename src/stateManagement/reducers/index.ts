import { combineReducers } from "redux";
import { cartItemsReducer } from "./cartItemsReducer";

export const rootReducer = combineReducers({
  cartItems: cartItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>;