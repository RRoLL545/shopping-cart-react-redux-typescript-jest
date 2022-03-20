import { ItemData } from '../../interfaces/itemData';
import './CartItemView.css';

/**
 * Returns CartItemView component
 * @returns CartItemView component
 */
const CartItemView = (props: ItemData): JSX.Element => {
  const {id, imageUrl, name, price, quantity} = props;
  
  return (
    <div className={`cart-item cart-item-${id}`} key={id}>
      <img src={imageUrl } alt={name} className="item-img"></img>
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <div>Price: {price} rub.</div>
      </div>
      <div className="item-controls">
        {/*<QuantityControl quantity={quantity} id={id} />
        <ItemDelete id={id} />*/}
        'Controls'
      </div>
    </div>
  )
}

export default CartItemView;
