import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles.css';

const Cart = () => {
    const { cartItems, removeItemFromCart, clearCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={`${item.type}-${item.id}`}>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeItemFromCart(item.id, item.type)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-right">Total:</td>
                        <td>${calculateTotal().toFixed(2)}</td>
                        <td>
                            <button onClick={clearCart}>Clear Cart</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;
