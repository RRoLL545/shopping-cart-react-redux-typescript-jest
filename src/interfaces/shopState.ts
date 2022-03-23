import { ItemData } from "./itemData";


/**
 * Shop state data
 */
 export interface ShopState {
  /**
   * Data of current items in the shop
   */
   shopItems: ItemData[] | [],

  /**
   * Shop items data loading state
   */
  itemsLoading: boolean,

  /**
   * Error status of loading shop items data
   */
  errorStatus: boolean,

  /**
   * Error message
   */
  errorMessage: string
}