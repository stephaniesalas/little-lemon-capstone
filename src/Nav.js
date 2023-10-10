import Logo from "./Assets/Logo .svg";
import { Link } from "react-router-dom";
import React from "react";

function Nav() {
    return (
      <nav className="Nav">
        <Link to="/"><img src={Logo} alt="Little Lemon Logo" width={235}/></Link>
        <ul className="Navmenu">
          <li><Link to="/" className="Navmenu-item">HOME</Link></li>
          <li><Link to="/about" className="Navmenu-item">ABOUT</Link></li>
          <li><Link to="/menu" className="Navmenu-item">MENU</Link></li>
          <li><Link to="/bookingpage" className="Navmenu-item">RESERVATIONS</Link></li>
          <li><Link to="/orderonline" className="Navmenu-item">ORDER ONLINE</Link></li>
          <li><Link to="/login" className="Navmenu-item">LOGIN</Link></li>
        </ul>
      </nav>
    );
  }

  export default Nav;