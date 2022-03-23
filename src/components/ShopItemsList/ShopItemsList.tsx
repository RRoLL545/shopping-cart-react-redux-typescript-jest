import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import ShopItem from '../ShopItem/ShopItem';
import './ShopItemsList.css';

const ShopItemsList = () => {
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
  if (!shopItems.length) return ( // TODO change className
    <div className="cart-items">
      {'Strange. There are no items in the shop?'}
    </div>
  )

  return (
    <div className="shop-items-list">LOL</div>
  )
}

export default ShopItemsList;