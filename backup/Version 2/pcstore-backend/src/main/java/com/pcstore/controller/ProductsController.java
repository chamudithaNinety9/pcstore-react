package com.pcstore.controller;
import com.pcstore.dto.ProductDto;
import com.pcstore.entity.Product;
import com.pcstore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.InputStream;
import java.nio.file.*;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(@RequestParam(required = false) String keyword) {
        if (keyword != null && !keyword.trim().isEmpty()) {
            return productService.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(keyword, keyword, keyword);
        } else {
            return productService.findAll(Sort.by(Sort.Direction.DESC, "id"));
        }
    }

    @PostMapping("/create")
    public Product createProduct(@Valid @ModelAttribute ProductDto productDto, BindingResult result) {

        //save image file
        MultipartFile image = productDto.getImageFile();
        Date createdAt = new Date();
        String storageFileName = createdAt.getTime() + "__" + image.getOriginalFilename();

        try{
            String uploadDir = "public/images/";
            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)){
                Files.createDirectories(uploadPath);
            }

            try(InputStream inputStream = image.getInputStream()){
                Files.copy(inputStream, Paths.get(uploadDir + storageFileName),
                        StandardCopyOption.REPLACE_EXISTING);
            }

        }catch (Exception e){
            System.out.println("Exception: " + e.getMessage());
        }

        Product product = new Product();
        product.setName(productDto.getName());
        product.setBrand(productDto.getBrand());
        product.setCategory(productDto.getCategory());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setCreatedAt(createdAt);
        product.setImage_file_name(storageFileName);

        return productService.save(product);
    }

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable int id) {

        return productService.findById(id);
    }

    @PutMapping("/edit/{id}")
    public Product updateProduct(@PathVariable int id, @Valid @ModelAttribute ProductDto productDto, BindingResult result) throws Exception {

        Product product = productService.findById(id).orElseThrow(() -> new Exception("Product not found"));

        if (result.hasErrors()) {
            throw new Exception("Validation errors");
        }

        if (!productDto.getImageFile().isEmpty()) {
            String uploadDir = "public/images/";
            Path oldImagePath = Paths.get(uploadDir + product.getImage_file_name());

            try {
                Files.delete(oldImagePath);
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
            }

            MultipartFile image = productDto.getImageFile();
            Date createdAt = new Date();
            String storageFileName = createdAt.getTime() + "__" + image.getOriginalFilename();

            try (InputStream inputStream = image.getInputStream()) {
                Files.copy(inputStream, Paths.get(uploadDir + storageFileName), StandardCopyOption.REPLACE_EXISTING);
            }

            product.setImage_file_name(storageFileName);
        }

        product.setName(productDto.getName());
        product.setBrand(productDto.getBrand());
        product.setCategory(productDto.getCategory());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());

        return productService.save(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable int id) throws Exception {
        Product product = productService.findById(id).orElseThrow(() -> new Exception("Product not found"));

        Path imagePath = Paths.get("public/images/" + product.getImage_file_name());

        try {
            Files.delete(imagePath);
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }

        productService.delete(product);
    }
}
