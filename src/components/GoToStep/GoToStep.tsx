import { StateStep } from '../../interfaces/cartItemAction';
import { goToStateStep } from '../../stateManagement/actionCreators/cartItems';
import './GoToStep.css';

/**
 * GoToStep component props interface
 */
interface GoToStepButton {
  name: string
  extraClass: string,
  step: StateStep
}

/**
 * Returns GoToNextStep component
 * @param props component customization input data
 * @returns GoToNextStep component
 */
const GoToStep = (props: GoToStepButton): JSX.Element => {
  const {extraClass, name, step} = props;
  
  return (
    <div className={`${extraClass}-wrapper`}>
      <button className={`controls-button ${extraClass}`} data-step={step} onClick={goToStep}>{name}</button>
    </div>
  )
}

export default GoToStep;

/**
 * Change state step
 * @param e mouse left button click event
 */
const goToStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const step: StateStep = clickedButton.dataset.step as unknown as StateStep;
  goToStateStep(step);
}