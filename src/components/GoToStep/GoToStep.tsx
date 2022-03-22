import './GoToStep.css';

/**
 * GoToStep component props interface
 */
interface GoToStepButton {
  name: string
  extraClass: string,
  step: string
}

/**
 * Returns GoToNextStep component
 * @param props component customization input data
 * @returns GoToNextStep component
 */
const GoToStep = (props: GoToStepButton): JSX.Element => {
  const {extraClass, name, step} = props;
  console.log(extraClass, name, step);
  return (
    <div className={`${extraClass}-wrapper`}>
      <button className={`controls-button ${extraClass}`} data-step={step} onClick={goToStep}>{name}</button>
    </div>
  )
}

export default GoToStep;


const goToStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
  const clickedButton = e.target as HTMLButtonElement;
  const step: string = clickedButton.dataset.step as unknown as string;
  console.log(step);
}