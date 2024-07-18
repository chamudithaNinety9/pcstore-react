package com.pcstore.service;

import com.pcstore.entity.Cart;

import java.util.List;

public interface CartService {

    List<Cart> findAll();

    Cart addToCart(int productId, String productName, double price, int quantity);

    void removeFromCart(int cartId);

    void clearCart();
}
