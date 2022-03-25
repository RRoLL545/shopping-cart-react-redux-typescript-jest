import React, { useState } from 'react';
import ShopItemsList from '../ShopItemsList/ShopItemsList';
import './ShopItemsForm.css';

/**
 * Returns ShopItemsForm component
 * @returns ShopItemsForm component
 */
const ShopItemsForm = (): JSX.Element => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const getSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <>
      <div className="add-new-item">
        <h3 className="add-new-item-name">Add new item in to your cart</h3>
        <div className="search-input-wrapper">
          <input id="search" type="search" className="search-input" placeholder="Type item name" onChange={getSearchTerm} />
          <div className="search-icon"></div>
        </div>
        <ShopItemsList keyWord={searchTerm}/>
      <hr className="items-horizontal-divider" />
      </div>
    </>
  )
}

export default ShopItemsForm;