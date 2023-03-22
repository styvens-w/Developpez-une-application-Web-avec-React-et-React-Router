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
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
