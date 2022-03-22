import useTypedSelector from '../../hooks/useTypedSelector';
import { StateStep } from '../../interfaces/cartItemAction';
import CartItemList from '../CartItemsList/CartItemList';
import CartSummary from '../CartSummary/CartSummary';
import CheckOutData from '../CheckOutData/CheckOutData';
import Footer from '../Footer/Footer';
import GoToStep from '../GoToStep/GoToStep';
import Header from '../Header/Header';
import './shopping-cart.css';

/**
 * returns ShoppingCart element
 * @returns ShoppingCart element
 */
const ShoppingCart = (): JSX.Element => {
  const {stateStep} = useTypedSelector(state => state.cartState);

  if (stateStep === StateStep.CHECKOUT) return (
    <div className="proceed-info invisible">You were redirected to checkout page...</div>
  )

  return (
    <>
      <div className="shopping-cart">
        <Header />
        <main className={`main ${stateStep === StateStep.CART_MANAGE ? '' : 'overlay'}`}>
          <div>ToggleAddItemFormButton</div>
          <div>AddItemForm</div>
          <h2 className="cart-name">Items in your cart</h2>
          <CartItemList />
        </main>
        <aside className={`aside ${stateStep === StateStep.CART_MANAGE ? '' : 'overlay'}`}>
          <div >
            <CartSummary />
          </div>
        </aside>
        <Footer />
      </div>
      {stateStep === 'CHECKOUT_CHECK' ? <CheckOutData /> : <></>}
    </>
  )
}

export default ShoppingCart;