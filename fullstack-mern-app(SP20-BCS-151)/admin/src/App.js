import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import './App.css';
import Home from './components/layout/home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './products/Products.jsx';
import Services from './services/Services.jsx';
import Register from './components/views/auth/Register.jsx';
 


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;