import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
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
  
  return (
    <div>Items list</div>
  )
}

export default CartItemList