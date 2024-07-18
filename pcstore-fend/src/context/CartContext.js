import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load initial cart items from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        // Save cart items to localStorage whenever they change
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (newItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id && item.type === newItem.type);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === newItem.id && item.type === newItem.type
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
    };

    const removeItemFromCart = (itemId, itemType) => {
        setCartItems(prevItems => {
            const item = prevItems.find(item => item.id === itemId && item.type === itemType);
            if (item.quantity > 1) {
                return prevItems.map(item =>
                    item.id === itemId && item.type === itemType
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevItems.filter(item => !(item.id === itemId && item.type === itemType));
            }
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItemFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
