import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../stateManagement/reducers';
import CartItemList from './CartItemList';

describe('CartItemList component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  it(`should render CartItemList component with "Loading"`, async () => {
    render(<Provider store={store}><CartItemList /></Provider>);
    expect(screen.getByText('Loading...')).toBeEnabled();
  })
})