import NavBar from '../NavBar/NavBar';
import './Header.css';

/**
 * Returns Header element
 * @returns Header element
 */
const Header = (): JSX.Element => {
  return (
    <>
      <header className="header">
      <div className="optimax-logo optimax-logo-header">
        <h1 className="h1-invisible">Shopping cart</h1>
      </div>
      <NavBar additionalClassName={"navigation-bar-header"}/>
    </header>
    </>
  )
}

export default Header