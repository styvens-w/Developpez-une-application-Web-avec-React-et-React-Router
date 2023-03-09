import '../../styles/Header/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="header-navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
