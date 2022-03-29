import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component testing', () => {
  it(`should render Footer component`, () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeEnabled();
  })

  const navBarExtraClassName = 'navigation-bar-footer';
  it(`should render NavBar component with className="${navBarExtraClassName}" in Footer`, () => {
    render(<Footer />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeEnabled();
     expect(navBar.classList.contains(navBarExtraClassName)).toBeTruthy();
  })
})