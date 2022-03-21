import { ItemData } from '../../interfaces/itemData';
import CountControl from '../CountControl/CountControl';
import './CartItemView.css';

/**
 * Returns CartItemView component
 * @param props item data
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
        <CountControl id={id} count={quantity}/>
      </div>
    </div>
  )
}

export default CartItemView;
