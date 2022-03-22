import { StateStep } from '../../interfaces/cartItemAction';
import GoToStep from '../GoToStep/GoToStep';
import SummaryTable from '../SummaryTable/SummaryTable';
import './CheckOutData.css'

/**
 * Returns CheckOutData component
 * @returns CheckOutData component
 */
const CheckOutData = ():JSX.Element => {
  return (
    <div className="checkout-data">
      <h4 className="checkout-data-name">Your cart summary</h4>
      <SummaryTable />
      <GoToStep extraClass="proceed-button" name="Proceed" step={StateStep.CHECKOUT} />
      <GoToStep extraClass="proceed-button" name="Back" step={StateStep.CART_MANAGE} />
    </div>
  )
}

export default CheckOutData;