import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Printers from './pages/Printers';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateProduct from './pages/CreateProduct';
import CreatePrinter from './pages/CreatePrinter';
import EditProduct from './pages/EditProduct';
import EditPrinter from './pages/EditPrinter';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/printers" element={<Printers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/printers/create" element={<CreatePrinter />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="/printers/edit/:id" element={<EditPrinter />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
