import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import ProductsServices from './pages/ProductsServices';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Common Navigation on all pages */}
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Common Footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

