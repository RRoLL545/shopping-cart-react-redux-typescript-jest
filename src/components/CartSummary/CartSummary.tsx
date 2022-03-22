import { StateStep } from '../../interfaces/cartItemAction';
import GoToStep from '../GoToStep/GoToStep';
import SummaryTable from '../SummaryTable/SummaryTable';
import './CartSummary.css'

/**
 * Returns CartSummary component
 * @returns CartSummary component
 */
const CartSummary = ():JSX.Element => {
  return (
    <div className="summary">
      <h2 className="summary-name">Cart summary</h2>
      <SummaryTable />
      <GoToStep extraClass="total-checkout" name="Checkout" step={StateStep.CHECKOUT_CHECK} />
    </div>
  )
}

export default CartSummary;