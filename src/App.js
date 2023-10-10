import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from "./Pages/Home";
import About from './Pages/About';
import OrderOnline from './Pages/OrderOnline';
import Login from './Pages/Login';
import BookingPage from './Pages/BookingPage';
import Menu from './Pages/Menu';
import Specials from './Pages/Specials';

function App() {
  return (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to ="/" />}/>
          <Route path="/about" element={<About />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
  );
}

export default App;
