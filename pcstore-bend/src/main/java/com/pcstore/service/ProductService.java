package com.pcstore.service;

import com.pcstore.entity.Product;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(String keyword, String keyword1, String keyword2);

    List<Product> findAll(Sort id);

    Product save(Product product);

    Optional<Product> findById(int id);

    void delete(Product product);
}
