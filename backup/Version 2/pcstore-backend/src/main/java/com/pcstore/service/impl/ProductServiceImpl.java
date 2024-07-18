package com.pcstore.service.impl;
import com.pcstore.entity.Product;
import com.pcstore.repo.ProductsRepo;
import com.pcstore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductsRepo productsRepo;


    @Override
    public List<Product> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(String keyword, String keyword1, String keyword2) {
        return productsRepo.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(keyword, keyword1, keyword2);
    }

    @Override
    public List<Product> findAll(Sort id) {
        return productsRepo.findAll();
    }

    @Override
    public Product save(Product product) {
        return productsRepo.save(product);
    }

    @Override
    public Optional<Product> findById(int id) {
        return productsRepo.findById(id);
    }

    @Override
    public void delete(Product product) {
        productsRepo.delete(product);
    }
}
