import { ItemData } from '../../interfaces/itemData';
import CartItemRemove from '../CartItemRemove/CartItemRemove';
import CountControl from '../CountControl/CountControl';
import './CartItemView.css';

/**
 * Returns CartItemView component
 * @param props item data
 * @returns CartItemView component
 */
const CartItemView = (props: ItemData): JSX.Element => {
  const {id, imageUrl, name, price, count} = props;
  
  return (
    <div className={`cart-item cart-item-${id}`} key={id}>
      <img src={imageUrl } alt={name} className="item-img"></img>
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <div>Price: {price} rub.</div>
      </div>
      <div className="item-controls">
        <CountControl id={id} count={count}/>
        <CartItemRemove id={id} />
      </div>
    </div>
  )
}

export default CartItemView;
