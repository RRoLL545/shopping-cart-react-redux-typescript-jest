import { render, screen } from '@testing-library/react';
import CartItemRemove from './CartItemRemove';

describe('CartItemRemove component testing', () => {
  const props = {
    id: 1
  }
  it(`should render CountControl component which contains button with data-item-id="${props.id}"`, () => {
    render(<CartItemRemove id={props.id} />)
    const removeButton = screen.getByRole('button');

    expect(removeButton).toBeEnabled();
    expect(removeButton.dataset.itemId).toBe(`${props.id}`);
  })
})