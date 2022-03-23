import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import './ShopItemsForm.css';

/**
 * Returns ShopItemsForm component
 * @returns ShopItemsForm component
 */
const ShopItemsForm = (): JSX.Element => {
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
      {'Strange. No items in the shop?'}
    </div>
  )

  return (
    <>
      <div className="add-new-item"> {/* добавить invisible */}
        <h3 className="add-new-item-name">Add new item in to your cart</h3>
        <div className="search-input-wrapper">
          {/*<input ref={inputEl} id="search" type="search" className="search-input" placeholder="Type item name" onChange={ getSearchTerm }></input>*/}
          <div className="search-icon"></div>
        </div>
        <div className="shop-items-add">
          {/*<ShopItem term={searchTerm} />*/}
        </div>
      <hr className="items-horizontal-divider" />
      </div>
    </>
  )
}

export default ShopItemsForm;