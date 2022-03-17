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
          <div>Cart Item list</div>
        </main>
        <aside>Aside</aside>
        <Footer />
      </div>
      <div>Checkoutdata</div>
      <div className="proceed-info invisible">You were redirected to checkout page...</div>
    </>
  )
}

export default ShoppingCart;