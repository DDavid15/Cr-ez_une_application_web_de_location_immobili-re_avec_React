import { NavLink } from "react-router-dom";
import logo from "../assets/logo-header.svg"; // à adapter selon le nom de ton fichier

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
