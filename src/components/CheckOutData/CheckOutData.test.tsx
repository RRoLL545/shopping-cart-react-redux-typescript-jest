import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../stateManagement/reducers';
import CheckOutData from './CheckOutData';

describe('CheckOutData component testing', () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));

  it('should render CheckOutData component', () => {
    render(<Provider store={store}><CheckOutData /></Provider>)
    expect(screen.getByText('Your cart summary')).toBeEnabled();
    expect(screen.getByText('Proceed')).toBeEnabled();
    expect(screen.getByText('Back')).toBeEnabled();
    expect(screen.getByRole('table')).toBeEnabled()
  })
})