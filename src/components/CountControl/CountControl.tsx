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
const CountControl = (props: CountControlData) => {
  const {count, id} = props;

  return (
    <div className={`item-control-tab`}>
      <button className="controls-button item-control item-minus" data-item-id={id} onClick={decrementButtonClicked}>-</button>
      <div className={`item-quantity item-id-${id}`}>{count}</div>
      <button className="controls-button item-control item-plus" data-item-id={id} onClick={incrementButtonClicked}>+</button>
    </div>
  )
}

export default CountControl;


/**
 * Decrement item count
 * @param e mouse left button click event
 */
function decrementButtonClicked(e: React.MouseEvent<HTMLButtonElement>): void {
  /*store.dispatch( actions.countMinus(itemId) );*/
  const clickedButton = e.target as HTMLButtonElement;
  const itemId = clickedButton.dataset.itemId;
}

/**
 * Encrement item count
 * @param e mouse left button click event
 */
function incrementButtonClicked(e: React.MouseEvent<HTMLButtonElement>): void {
  /*store.dispatch( actions.countPlus(itemId) );*/
  const clickedButton = e.target as HTMLButtonElement;
  const itemId = clickedButton.dataset.itemId;
}

//TODO заменить на одну чистую функцию с передачей id