import { Link } from "react-router-dom";
import '../sass/Navbar.scss'
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Startsida</Link>
        </li>
        <li>
          <Link to="/animals">Till Zoo</Link>
        </li>
      </ul>
    </nav>
  );
};