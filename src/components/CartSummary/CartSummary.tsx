import SummaryTable from '../SummaryTable/SummaryTable';
import './CartSummary.css'

const CartSummary = () => {
  return (
    <div className="summary">
      <h2 className="summary-name">Cart summary</h2>
      <SummaryTable />
    </div>
  )
}

export default CartSummary;