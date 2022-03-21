import { decrementItemCount, incrementItemCount } from '../../stateManagement/actionCreators/cartItems';
import './CountControl.css'

/**
 * interface for input data of CountControl component
 */
interface CountControlData {
  id: number,
  count: number
}

/**
 * Returns CountControl component
 * @param props - item id and item count in the cart
 * @returns CountControl component
 */
const CountControl = (props: CountControlData): JSX.Element => {
  const {count, id} = props;

  return (
    <div className={`item-control-tab`}>
      <button className="controls-button item-control item-minus" data-item-id={id} onClick={decrementCartItemCount}>-</button>
      <div className={`item-quantity item-id-${id}`}>{count}</div>
      <button className="controls-button item-control item-plus" data-item-id={id} onClick={incrementCartItemCount}>+</button>
    </div>
  )
}

export default CountControl;

/**
 * Decrement item count
 * @param e mouse left button click event
 */
const decrementCartItemCount = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedButton.dataset.itemId as unknown as string, 10);
  //TODO error
  decrementItemCount(itemId);
}

/**
 * Increment item count
 * @param e mouse left button click event
 */
const incrementCartItemCount = (e: React.MouseEvent<HTMLButtonElement>): void =>{
  const clickedButton = e.target as HTMLButtonElement;
  const itemId: number = parseInt(clickedButton.dataset.itemId as unknown as string, 10);
  //TODO error
  incrementItemCount(itemId);
}

//TODO заменить на одну чистую функцию с передачей id и textContent