import '../../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navlink active' : 'navlink'
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'navlink active' : 'navlink'
            }
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
