import Logo from "./Assets/rectangular logo.jpg"
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="Footer">
        <section class="box5">
        <img src={Logo} alt="little lemon square logo" width={150} height={233}></img>
       <div class="doormat">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/bookingpage">Reservations</Link></li>
          <li><Link to="/orderonline">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        </div> 
        <div class="contact">
          <h3>Contact</h3>
          <ul>
            <li>123 E. 456 S. 16th Street</li>
            <li>Chicago, IL. 23432</li>
            <li>(123)-234-4567</li>
            <li><a href="little.lemon@gmail.com.html">little.lemon@gmail.com</a></li>
          </ul>
        </div>
        <div class="socials">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="facebook.com">Facebook</a></li>
            <li><a href="instagram.com">Instagram</a></li>
            <li><a href="x.com">X</a></li>
          </ul>
        </div>
        </section>
      </footer>
    );
  }

  export default Footer;