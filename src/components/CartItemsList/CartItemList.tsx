import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { StateStep } from '../../interfaces/cartItemAction';
import CartItemView from '../CartItemView/CartItemView';
import './CartItemList.css';

/**
 * Returns CartItemList element
 * @returns CartItemList element
 */
const CartItemList = (): JSX.Element => {
  const {itemsLoading, cartItems, errorMessage, errorStatus, stateStep} = useTypedSelector(state => state.cartState);

  const {fetchCartItems} = useActions();

  useEffect(() => {
    stateStep === StateStep.FETCH_CART_ITEMS && fetchCartItems();
  });

  if (itemsLoading) {
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
        <CartItemView id={cartItem.id} imageUrl={cartItem.imageUrl} name={cartItem.name} price={cartItem.price} count={cartItem.count} key={cartItem.id}/>
      )
    })}
    </>
  )
}

export default CartItemList;
