import { render, screen } from '@testing-library/react';
import GoToStep from './GoToStep';

describe('GoToStep component testing', () => {
  const props = {
    extraClass: 'any-class-name',
    name: 'any-name',
    step: 'any-step'
  }
  it(`should render GoToStep component which contains button with text "${props.name}" and data "${props.step}"`, () => {
    render(<GoToStep extraClass={props.extraClass} name={props.name} step={props.step} />);
    const goToStepButton = screen.getByRole('button');

    expect(goToStepButton).toBeEnabled();
    expect(goToStepButton.textContent).toBe(props.name);
    expect(goToStepButton.dataset.step).toBe(props.step);
  })
})