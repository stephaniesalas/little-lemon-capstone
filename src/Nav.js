import Logo from "./Assets/Logo .svg"; // with import
function Nav() {
    return (
      <nav className="Nav">
        <img src={Logo} alt="Little Lemon Logo"/>
        <ul>
          <li><a href="home.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="menu.html">MENU</a></li>
          <li><a href="reservations.html">RESERVATIONS</a></li>
          <li><a href="order_online.html">ORDER ONLINE</a></li>
          <li><a href="login.html">LOGIN</a></li>
        </ul>
      </nav>
    );
  }

  export default Nav;