import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles.css'; // Importing the combined styles

const Navbar = () => {
    const { cartItems } = useCart();

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/printers">Printers</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
