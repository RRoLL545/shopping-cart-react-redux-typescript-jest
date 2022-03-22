import CartItemList from '../CartItemsList/CartItemList';
import CartSummary from '../CartSummary/CartSummary';
import CheckOutData from '../CheckOutData/CheckOutData';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './shopping-cart.css';

/**
 * returns ShoppingCart element
 * @returns ShoppingCart element
 */
const ShoppingCart = (): JSX.Element => {
  return (
    <>
      <div className="shopping-cart">
        <Header />
        <main className="main">
          <div>ToggleAddItemFormButton</div>
          <div>AddItemForm</div>
          <h2 className="cart-name">Items in your cart</h2>
          <CartItemList />
        </main>
        <aside className="aside">
          <div >
            <CartSummary />
          </div>
        </aside>
        <Footer />
      </div>
      <CheckOutData />
      <div className="proceed-info invisible">You were redirected to checkout page...</div>
    </>
  )
}

export default ShoppingCart;