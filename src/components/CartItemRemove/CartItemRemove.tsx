import { removeCartItem } from '../../stateManagement/actionCreators/cartItems';
import './CartItemRemove.css';

/**
 * Returns CartItemRemove element
 * @param props 
 * @returns 
 */
const CartItemRemove = (props: {id: number}): JSX.Element => {
  const {id} = props;
  return (
    <div className="item-delete-wrapper">
      <button className="controls-button item-control item-delete" data-item-id={id} onClick={removeItemFromCart}>X</button>
    </div>
  )
}

export default CartItemRemove;

/**
 * Remove Cart Item from the Cart
 * @param e - mouse left button click event
 */
 function removeItemFromCart(e: React.MouseEvent<HTMLButtonElement>): void {
  const clickedButton = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedButton.dataset.itemId as unknown as string, 10);
  //console.log('removed', itemId);
  // store.dispatch( actions.deleteCartItem(deleteCartItemId) );
  removeCartItem(itemId);
}
