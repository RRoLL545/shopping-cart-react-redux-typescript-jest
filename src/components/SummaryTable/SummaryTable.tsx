import useTypedSelector from '../../hooks/useTypedSelector';
import './SummaryTable.css';

/**
 * Returns SummaryTable component
 * @returns SummaryTable component
 */
const SummaryTable = ():JSX.Element => {
  const tableHeadersNames: string[] = ['Product item name', 'Price', 'Count', 'Total'];
  const {itemsLoading, cartItems, errorStatus} = useTypedSelector(state => state.cartState)

  if (itemsLoading || errorStatus) return (<></>)

  const itemTotalsSummary: number[] = cartItems.map(item => item.count * item.price);
  const cartTotalSummary: number = itemTotalsSummary.length === 0 ? 0 : itemTotalsSummary.reduce( (total, current) => (total + current));

  return (
    <>
      <table className="items-summary-table">
          <thead>
            <tr>
              {tableHeadersNames.map( (tableName, i) => {
                return (
                  <td key={`tableName-${i}`} className="table-head-name">{tableName}</td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {cartItems.map( (item, i) => {
              return (
                <tr key={`row-${i}`}>
                  <td className="table-cell table-cell-width-big">{item.name}</td>
                  <td className="table-cell  table-cell-align-center">{item.price}</td>
                  <td className="table-cell table-cell-align-center">{item.count}</td>
                  <td className="table-cell">{item.count * item.price}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="table-cell summary-total" colSpan={4}>Total amount: <span className="summary-value">{cartTotalSummary}</span> rub.</td>
            </tr>
          </tfoot>
        </table>
    </>
  )
}

export default SummaryTable;