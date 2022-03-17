import Header from '../header/header';
import './shopping-cart.css';

const ShoppingCart = () => {
  return (
    <>
      <div className="shopping-cart">
        <Header></Header>
        <main className="main">
          <div>ToggleAddItemFormButton</div>
          <div>AddItemForm</div>
          <div>Cart Item list</div>
        </main>
        <aside>Aside</aside>
        <footer>Footer</footer>
      </div>
      <div>Checkoutdata</div>
      <div className="proceed-info invisible">You were redirected to checkout page...</div>
    </>
  )
}

export default ShoppingCart;