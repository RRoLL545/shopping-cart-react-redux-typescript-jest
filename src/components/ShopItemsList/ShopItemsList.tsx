import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ItemData } from '../../interfaces/itemData';
import ShopItemView from '../ShopItemView/ShopItemView';
import './ShopItemsList.css';

/**
 * Returns ShopItemsList component
 * @param props fragment to search in shop items name
 * @returns ShopItemsList component
 */
const ShopItemsList = (props: {keyWord: string}): JSX.Element => {
  const {keyWord} = props;
  const {errorMessage, errorStatus, itemsLoading, shopItems} = useTypedSelector(state => state.shopState);
  const {fetchShopItems} = useActions();
  useEffect(() => {
    fetchShopItems();
  }, []);
  
  if (itemsLoading) {
    return <h1>Loading...</h1>
  }
  if (errorStatus) {
    return <h1>{errorMessage}</h1>
  }
  if (!shopItems.length) return (
    <div className="shop-items-list">
      {'Strange. There are no items in the shop?'}
    </div>
  )

  const foundShopItems: ItemData[] = keyWord ? shopItems.filter( item => {
    return item.name.toLowerCase().replace(/\s/g, '').includes(keyWord.toLowerCase());
  }) : shopItems;

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