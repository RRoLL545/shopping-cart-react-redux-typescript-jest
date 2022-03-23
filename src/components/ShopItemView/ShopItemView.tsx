import { ItemData } from '../../interfaces/itemData';
import { addShopItemToCart } from '../../stateManagement/actionCreators/cartItems';
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
      <button className={`controls-button shop-item-add shop-item-add-${id}`}
              data-item-id={id}
              data-item-image-url={imageUrl}
              data-item-name={name}
              data-item-price={price}
              onClick={addItemToCart}
      >Add</button>
    </div>
  )
}

export default ShopItemView;

/**
 * Add shop item to the cart
 * @param e mouse left button click event
 */
const addItemToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const itemData: ItemData = {
    count: 1,
    id: parseInt(clickedButton.dataset.itemId as unknown as string, 10),
    imageUrl: clickedButton.dataset.itemImageUrl as unknown as string,
    name: clickedButton.dataset.itemName as unknown as string,
    price: parseInt(clickedButton.dataset.itemPrice as unknown as string, 10),
  };
  
  addShopItemToCart(itemData);
}