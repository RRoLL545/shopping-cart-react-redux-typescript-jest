import useTypedSelector from '../../hooks/useTypedSelector';
import { ShopStateStep } from '../../interfaces/shopItemAction';
import { goToShopStateStep } from '../../stateManagement/actionCreators/shopItems';
import './ToggleShopForm.css'

/**
 * Returns ToggleShopForm component
 * @returns ToggleShopForm component
 */
const ToggleShopForm = ():JSX.Element => {
  const {shopStateStep} = useTypedSelector(state => state.shopState)
  return (
    <div className="toggle-button-wrapper">
      <button className={`controls-button toggle-button ${
        shopStateStep === ShopStateStep.SHOW_SHOP || shopStateStep === ShopStateStep.FETCH_SHOP ? 
        'button-rotated' : 
        ''
      }`} 
              data-shop-state={shopStateStep} 
              onClick={toggleShopForm}
      ></button>
    </div>
  )
}

export default ToggleShopForm;

/**
 * Change shop state step
 * @param e mouse left button click event
 */
const toggleShopForm = (e: React.MouseEvent<HTMLButtonElement>):void => {
  const clickedButton = e.target as HTMLButtonElement;
  const currentShopState: ShopStateStep = clickedButton.dataset.shopState as unknown as ShopStateStep;
  switch (currentShopState) {
    case ShopStateStep.NO_ACTION:
      goToShopStateStep(ShopStateStep.FETCH_SHOP);
      break;
    case ShopStateStep.HIDE_SHOP:
      goToShopStateStep(ShopStateStep.SHOW_SHOP);
      break;
    default:
      goToShopStateStep(ShopStateStep.HIDE_SHOP);
      break;
  }
}