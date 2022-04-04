import { render, screen } from '@testing-library/react';
import ShopItemView from './ShopItemView';

describe('ShopItemView component testing', () => {
  const props = {
    id: 1,
    imageUrl: 'any-url',
    name: 'any-name',
    price: 10,
    count: 1
  }
  const regExpPrice = new RegExp(`${props.price}`);
  it(`should render ShopItemView component`, () => {
    render(<ShopItemView id={props.id} imageUrl={props.imageUrl} name={props.name} price={props.price} count={props.count} />);

    const button = screen.getByRole('button');

    expect(screen.getByRole('img')).toBeEnabled();
    expect(screen.getByText(props.name)).toBeEnabled();
    expect(screen.getByText(regExpPrice)).toBeEnabled();
    expect(button.classList.contains(`shop-item-add-${props.id}`)).toBeTruthy();
  })
})