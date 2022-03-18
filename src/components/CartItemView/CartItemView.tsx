import useTypedSelector from '../../hooks/useTypedSelector';
import './CartItemView.css';

/**
 * Returns CartItemView component
 * @returns CartItemView component
 */
const CartItemView = (): JSX.Element => {
  const {cartItems} = useTypedSelector(state => state.cartState);

  if (!cartItems.length) return (
    <>
    <h2 className="cart-name">Items in your cart</h2>
      <div className="cart-items">
        {'Cart is empty.'}
      </div>
    </>
  )
  
  return (
    <>
      {cartItems.map(cartItem => {
        const {id, imageUrl, name, price, quantity} = cartItem;
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
      })}
    </>
  )
}

export default CartItemView;