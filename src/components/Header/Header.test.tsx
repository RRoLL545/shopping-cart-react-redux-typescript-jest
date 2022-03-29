import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component testing', () => {
  it(`should render Header component`, () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeEnabled();
  })
})