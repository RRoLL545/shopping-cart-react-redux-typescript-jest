import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ShopItemsActionTypes } from '../../interfaces/shopItemAction';
import { rootReducer } from '../../stateManagement/reducers';
import fakeItems from '../../utils/fakeItemsData';
import ShopItemsForm from './ShopItemsForm';

describe('ShopItemsForm component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  it('should render ShopItemsForm component and transfer input data to ShopItemList component', () => {
    store.dispatch({
      type: ShopItemsActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
      payload: fakeItems
    });
    render(<Provider store={store}><ShopItemsForm /></Provider>);
    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeEnabled();
    expect(screen.getByText(/Add new items in to your cart/)).toBeEnabled();

    userEvent.type(searchbox, 'lol');
    expect(searchbox).toHaveValue('lol');
    const filteredItems = screen.getAllByRole('button');
    expect(filteredItems.length === 2).toBeTruthy();
  })
  
})