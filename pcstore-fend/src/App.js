import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import Printers from './pages/Printers';
import CreatePrinter from './pages/CreatePrinter';
import EditPrinter from './pages/EditPrinter';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css'; // Import the consolidated CSS file

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/create" element={<CreateProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/printers" element={<Printers />} />
                <Route path="/printers/create" element={<CreatePrinter />} />
                <Route path="/printers/edit/:id" element={<EditPrinter />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
