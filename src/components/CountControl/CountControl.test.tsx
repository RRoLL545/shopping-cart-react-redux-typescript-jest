import { render, screen } from '@testing-library/react';
import CountControl from './CountControl';

describe('CountControl component testing', () => {
  const props = {
    count: 10,
    id: 1
  }
  it(`should render CountControl component which contains button with text "+" and data-item-id="${props.id}"`, () => {
    render(<CountControl count={props.count} id={props.id} />)
    const incrementButton = screen.getByText('+');

    expect(incrementButton).toBeEnabled();
    expect(incrementButton.dataset.itemId).toBe(`${props.id}`);
  })
  
  it(`should render CountControl component which contains button with text "-" and data-item-id="${props.id}"`, () => {
    render(<CountControl count={props.count} id={props.id} />)
    const decrementButton = screen.getByText('-');

    expect(decrementButton).toBeEnabled();
    expect(decrementButton.dataset.itemId).toBe(`${props.id}`);
  })

  it(`should render CountControl component which contains div with textContent "${props.count}"`, () => {
    render(<CountControl count={props.count} id={props.id} />)
    const countElement = screen.getByText(`${props.count}`);

    expect(countElement).toBeEnabled();
  })
})