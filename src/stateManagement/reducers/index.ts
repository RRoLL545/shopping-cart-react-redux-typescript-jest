import { combineReducers } from "redux";
import { cartItemsReducer } from "./cartItemsReducer";
import { shopItemsReducer } from "./shopItemsReducer";

export const rootReducer = combineReducers({
  cartState: cartItemsReducer,
  shopState: shopItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>;