import './NavBar.css'

/**
 * Returns NavBar element
 * @param props additional class name to component
 * @returns NavBar element
 */
const NavBar = (props: {additionalClassName: string}): JSX.Element => {
  const {additionalClassName} = props;
  return (
    <nav className={`navigation-bar ${additionalClassName}`}>
      <ul className="navigation-bar-list ">
        <li><a href="/" className="navigation-bar-item">Main page</a></li>
        <li><a href="/" className="navigation-bar-item">Catalogue</a></li>
        <li><a href="/" className="navigation-bar-item">Support</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;