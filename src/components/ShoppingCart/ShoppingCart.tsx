import useTypedSelector from '../../hooks/useTypedSelector';
import { StateStep } from '../../interfaces/cartItemAction';
import { ShopStateStep } from '../../interfaces/shopItemAction';
import CartItemList from '../CartItemsList/CartItemList';
import CartSummary from '../CartSummary/CartSummary';
import CheckOutData from '../CheckOutData/CheckOutData';
import ShopItemsForm from '../ShopItemsForm/ShopItemsForm';
import ToggleShopForm from '../ToggleShopForm/ToggleShopForm';
import './ShoppingCart.css';

/**
 * returns ShoppingCart element
 * @returns ShoppingCart element
 */
const ShoppingCart = (): JSX.Element => {
  const {stateStep} = useTypedSelector(state => state.cartState);
  const {shopStateStep} = useTypedSelector(state => state.shopState);

  if (stateStep === StateStep.CHECKOUT) return (
    <div className="proceed-info">You were redirected to checkout page...</div>
  )

  return (
    <>
      <div className="shopping-cart">
        <main className={`main ${stateStep === StateStep.CART_MANAGE ? '' : 'overlay'}`}>
          <ToggleShopForm />
          {(shopStateStep === ShopStateStep.SHOW_SHOP || shopStateStep === ShopStateStep.FETCH_SHOP) && <ShopItemsForm />}
          <h2 className="cart-name">Items in your cart</h2>
          <div className="cart-items">
            <CartItemList />
          </div>
        </main>
        <aside className={`aside ${stateStep === StateStep.CART_MANAGE ? '' : 'overlay'}`}>
            <CartSummary />
        </aside>
      </div>
      {stateStep === StateStep.CHECKOUT_CHECK ? <CheckOutData /> : <></>}
    </>
  )
}

export default ShoppingCart;