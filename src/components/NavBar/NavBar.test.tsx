import { render, screen } from '@testing-library/react';
import NavBar from './NavBar'


describe('NavBar component testing', () => {
  [
    {
      input: '',
      classToCheck: 'navigation-bar',
      result: 'navigation-bar'
    },
    {
      input: 'header',
      classToCheck: 'header',
      result: 'navigation-bar header'
    },
    {
      input: 'footer',
      classToCheck: 'footer',
      result: 'navigation-bar footer'
    }
  ].forEach(testCase => {
    it(`should render NavBar component with class "${testCase.result}"`, () => {
      render(<NavBar additionalClassName={testCase.input} />);
      const navBar = screen.getByRole('navigation');
      expect(navBar).toBeEnabled();
      expect(navBar.classList.contains(testCase.classToCheck)).toBeTruthy();
    })
  })
});