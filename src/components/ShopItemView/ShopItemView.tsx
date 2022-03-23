import { ItemData } from '../../interfaces/itemData';
import './ShopItemView.css';

/**
 * Returns ShopItemView component
 * @param props item data
 * @returns ShopItemView component
 */
const ShopItemView = (props: ItemData): JSX.Element => {
  const {id, imageUrl, name, price} = props;

  return (
    <div key={id} className={`shop-item shop-item-${id}`}>
      <img src={ imageUrl } alt={ name } className={`shop-item-img shop-item-img-${id}`}></img>
      <h4 className="shop-item-name">{name}</h4>
      <div className={`item-price-${id}`}>{price} rub.</div>
      <button className={`controls-button shop-item-add shop-item-add-${id}`}>Add</button>
    </div>
  )
}

export default ShopItemView;