import { Link } from "react-router-dom";
import '../sass/Navbar.scss'
export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Djurens ZOO</h1></Link>
      <ul>
        <li>
          <Link to="/">Djuren</Link>
        </li>
      </ul>
    </nav>
  );
};