import { combineReducers } from "redux";
import { cartItemsReducer } from "./cartItemsReducer";

export const rootReducer = combineReducers({
  cartState: cartItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>;