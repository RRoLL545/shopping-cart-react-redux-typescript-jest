import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import CartItemView from '../CartItemView/CartItemView';
import './CartItemList.css';

/**
 * Returns CartItemList element
 * @returns CartItemList element
 */
const CartItemList = (): JSX.Element => {
  const {ItemsLoading, cartItems, errorMessage, errorStatus} = useTypedSelector(state => state.cartState);

  const {fetchCartItems} = useActions();

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (ItemsLoading) {
    return <h1>Loading...</h1>
  }
  if (errorStatus) {
    return <h1>{errorMessage}</h1>
  }
  if (!cartItems.length) return (
    <div className="cart-items">
      {'Your cart is empty.'}
    </div>
  )
  
  return (
    <>
    {cartItems.map(cartItem => {
      return (
        <CartItemView id={cartItem.id} imageUrl={cartItem.imageUrl} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} key={cartItem.id}/>
      )
    })}
    </>
  )
}

export default CartItemList;
