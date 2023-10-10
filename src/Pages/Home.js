import React from "react";
import Header from "../Header.js";
import Nav from "../Nav.js"
import Main from "../Main.js"
import Footer from "../Footer.js";

function Home() {
  return (
    <div className='Home'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
