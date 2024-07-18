package com.pcstore.service.impl;

import com.pcstore.entity.Cart;
import com.pcstore.repo.CartRepository;
import com.pcstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll();
    }

    @Override
    public Cart addToCart(int productId, String productName, double price, int quantity) {
        Cart cartItem = new Cart();
        cartItem.setProductId(productId);
        cartItem.setProductName(productName);
        cartItem.setPrice(price);
        cartItem.setQuantity(quantity);
        return cartRepository.save(cartItem);
    }

    @Override
    public void removeFromCart(int cartId) {
        cartRepository.deleteById(cartId);
    }

    @Override
    public void clearCart() {
        cartRepository.deleteAll();
    }
}
