import { render, screen } from '@testing-library/react';
import CartItemView from './CartItemView';

describe('CartItemView component testing', () => {
  const props = {
    id: 1,
    imageUrl: 'any-url',
    name: 'any-name',
    price: 10,
    count: 1
  }
  const regExpPrice = new RegExp(`${props.price}`);
  it(`should render CartItemView component`, () => {
    render(<CartItemView id={props.id} imageUrl={props.imageUrl} name={props.name} price={props.price} count={props.count} />);

    expect(screen.getByRole('img')).toBeEnabled();
    expect(screen.getByText(props.name)).toBeEnabled();
    expect(screen.getByText(regExpPrice)).toBeEnabled();
  })
})