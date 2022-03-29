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
      input: 'any-class-name',
      classToCheck: 'any-class-name',
      result: 'navigation-bar any-class-name'
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