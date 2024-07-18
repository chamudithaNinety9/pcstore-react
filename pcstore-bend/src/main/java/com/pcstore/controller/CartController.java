package com.pcstore.controller;

import com.pcstore.entity.Cart;
import com.pcstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> getCartItems() {
        return cartService.findAll();
    }

    @PostMapping("/add")
    public Cart addToCart(@RequestParam int productId, @RequestParam String productName,
                          @RequestParam double price, @RequestParam int quantity) {
        return cartService.addToCart(productId, productName, price, quantity);
    }

    @DeleteMapping("/remove/{id}")
    public void removeFromCart(@PathVariable int id) {
        cartService.removeFromCart(id);
    }

    @DeleteMapping("/clear")
    public void clearCart() {
        cartService.clearCart();
    }
}
