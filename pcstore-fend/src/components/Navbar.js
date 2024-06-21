import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Importing the combined styles

const Navbar = () => (
    <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default Navbar;
