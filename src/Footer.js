import Logo from "./Assets/rectangular logo.jpg"
function Footer() {
    return (
      <footer className="Footer">
        <img src={Logo} alt=""></img>
        <ul>
          <li><a href="home.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="menu.html">MENU</a></li>
          <li><a href="reservations.html">RESERVATIONS</a></li>
          <li><a href="order_online.html">ORDER ONLINE</a></li>
          <li><a href="login.html">LOGIN</a></li>
        </ul>
      </footer>
    );
  }

  export default Footer;