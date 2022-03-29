import { render, screen } from '@testing-library/react';
import SummaryTable from './SummaryTable';
import { Provider } from 'react-redux';
import { CartItemsActionTypes } from '../../interfaces/cartItemAction';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../../stateManagement/reducers';
import { ItemData } from '../../interfaces/itemData';

describe('SummaryTable component testing', () => {
  const mockItems: ItemData[] = [
    {
      id: 1,
      name: 'any-name-1',
      price: 100,
      count: 10,
      imageUrl: 'any-url-1'
    },
    {
      id: 2,
      name: 'any-name-2',
      price: 200,
      count: 20,
      imageUrl: 'any-url-2'
    }
  ];
  let store = createStore(rootReducer, applyMiddleware(thunk));

  it('should render SummaryTable component without data while its being fetching or cart is empty', () => {
    render(<Provider store={store}><SummaryTable /></Provider>);
    const summaryTable = screen.getByRole('table');
      
    expect(summaryTable).toBeEnabled();
    expect(summaryTable.classList.contains('items-summary-table')).toBeTruthy();
    expect(screen.getByText('Product item name')).toBeEnabled();
    expect(screen.getByText('Price')).toBeEnabled();
    expect(screen.getByText('Count')).toBeEnabled();
    expect(screen.getByText('Total')).toBeEnabled();
    expect(screen.getByText(/Total amount:/)).toBeEnabled();
    expect(screen.getAllByRole('row').length).toBe(2); // tr of thead and tr of tfoot
  })

  it('should not render SummaryTable component because of loading', () => {
    store.dispatch({
      type: CartItemsActionTypes.FETCH_CART_ITEMS
    })
    render(<Provider store={store}><SummaryTable /></Provider>);
    const summaryTable = screen.queryByRole('table');
    expect(summaryTable).toBeNull();
  })

  it('should not render SummaryTable component because of error', () => {
      store.dispatch({
        type: CartItemsActionTypes.FETCH_CART_ITEMS_ERROR,
        payload: 'Any error message'
      })
      render(<Provider store={store}><SummaryTable /></Provider>);
      const summaryTable = screen.queryByRole('table');
      expect(summaryTable).toBeNull();
    })

  
  it('should render SummaryTable component with data', () => {
    store.dispatch({
      type: CartItemsActionTypes.FETCH_CART_ITEMS_SUCCESS,
      payload: mockItems
    })
    render(<Provider store={store}><SummaryTable /></Provider>);
    const summaryTable = screen.getByRole('table');
      
    expect(summaryTable).toBeEnabled();
    expect(summaryTable.classList.contains('items-summary-table')).toBeTruthy();
    expect(screen.getByText('Product item name')).toBeEnabled();
    expect(screen.getByText('Price')).toBeEnabled();
    expect(screen.getByText('Count')).toBeEnabled();
    expect(screen.getByText('Total')).toBeEnabled();
    expect(screen.getByText(/Total amount:/)).toBeEnabled();
    expect(screen.getAllByRole('row').length).toBe(mockItems.length + 2); // + tr of thead and tr of tfoot
  })
})