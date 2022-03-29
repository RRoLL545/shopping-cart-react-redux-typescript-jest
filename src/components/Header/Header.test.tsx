import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component testing', () => {
  it(`should render Header component`, () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeEnabled();
  })

  const navBarExtraClassName = 'navigation-bar-header';
  it(`should render NavBar component with className="${navBarExtraClassName}" in Header`, () => {
    render(<Header />);
    const navBar = screen.getByRole('navigation');
    
    expect(navBar).toBeEnabled();
    expect(navBar.classList.contains(navBarExtraClassName)).toBeTruthy();
  })
})