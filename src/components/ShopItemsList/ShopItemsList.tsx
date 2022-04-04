import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ItemData } from '../../interfaces/itemData';
import { ShopStateStep } from '../../interfaces/shopItemAction';
import ShopItemView from '../ShopItemView/ShopItemView';
import './ShopItemsList.css';

/**
 * Returns ShopItemsList component
 * @param props fragment to search in shop items name
 * @returns ShopItemsList component
 */
const ShopItemsList = (props: {keyWord: string}): JSX.Element => {
  const {keyWord} = props;
  const {errorMessage, errorStatus, itemsLoading, shopItems, shopStateStep} = useTypedSelector(state => state.shopState);
  const {fetchShopItems} = useActions();
  useEffect(() => {
    shopStateStep === ShopStateStep.FETCH_SHOP && fetchShopItems();
  }, []);
  
  if (shopStateStep === ShopStateStep.NO_ACTION || shopStateStep === ShopStateStep.HIDE_SHOP) {
    return <></>
  }
  if (itemsLoading) {
    return (
      <div className="shop-items-list">
        Wait a moment...
      </div>
    )
  }
  if (errorStatus) {
    return (
      <div className="shop-items-list">
        {errorMessage}
      </div>
    )
  }
  if (!shopItems.length) return (
    <div className="shop-items-list">
      Strange. There are no items in the shop?
    </div>
  )
  if (!keyWord) return (
    <div className="shop-items-list">
      Find items to add them in your cart
    </div>
  )

  const foundShopItems: ItemData[] = shopItems.filter( item => {
    return item.name.toLowerCase().replace(/\s/g, '').includes(keyWord.toLowerCase());
  });

  if(!foundShopItems.length) return (
    <div className="shop-items-list">
      No items with input text found! No matches!
    </div>
  )

  return (
    <div className="shop-items-list">
      {foundShopItems.map(shopItem => {
        return (
          <ShopItemView id={shopItem.id} imageUrl={shopItem.imageUrl} name={shopItem.name} price={shopItem.price} count={shopItem.count} key={shopItem.id}/>
        )
      })}
    </div>
  )
}

export default ShopItemsList;