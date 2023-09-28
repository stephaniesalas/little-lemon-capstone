import Logo from "./Assets/rectangular logo.jpg"
function Footer() {
    return (
      <footer className="Footer">
        <section class="box5">
        <img src={Logo} alt="little lemon square logo" width={150} height={233}></img>
       <div class="doormat">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="reservations.html">Reservations</a></li>
          <li><a href="order_online.html">Order Online</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
        </div> 
        <div class="contact">
          <h3>Contact</h3>
          <ul>
            <li>123 E 456 S, 16th Street</li>
            <li>Chicago, IL 23432</li>
            <li>123-234-4567</li>
            <li><a href="little.lemon@gmail.com.html">little.lemon@gmail.com</a></li>
          </ul>
        </div>
        <div class="socials">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="facebook.com/littlelemon.html">Facebook</a></li>
            <li><a href="instagram.com/littlelemon.html">Instagram</a></li>
            <li><a href="x.com/littlelemon.html.">X</a></li>
          </ul>
        </div>
        </section>
      </footer>
    );
  }

  export default Footer;