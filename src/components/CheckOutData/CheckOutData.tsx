import SummaryTable from '../SummaryTable/SummaryTable';
import './CheckOutData.css'

/**
 * Returns CheckOutData component
 * @returns CheckOutData component
 */
const CheckOutData = ():JSX.Element => {
  return (
    <div className="checkout-data invisible">
      <h4 className="checkout-data-name">Your cart summary</h4>
      <SummaryTable />
      {/*<ProceedButton />*/
      /*TODO кнопка вернуться*/}
    </div>
  )
}

export default CheckOutData;