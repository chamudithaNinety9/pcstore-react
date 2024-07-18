package com.pcstore.controller;

import com.pcstore.dto.PrinterDto;
import com.pcstore.entity.Printer;
import com.pcstore.service.PrinterService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Sort;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3005")
@RequestMapping("/printers")
public class PrinterController {

    @Autowired
    private PrinterService printerService;

    @GetMapping
    public List<Printer> getAllPrinters(@RequestParam(required = false) String keyword) {
        if (keyword != null && !keyword.trim().isEmpty()) {
            return printerService.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(keyword, keyword, keyword);
        } else {
            return printerService.findAll(Sort.by(Sort.Direction.DESC, "id"));
        }
    }

    @PostMapping("/create")
    public Printer createPrinter(@Valid @ModelAttribute PrinterDto printerDto, BindingResult result) {

        //save image file
        MultipartFile image = printerDto.getImageFile();
        Date createdAt = new Date();
        String storageFileName = createdAt.getTime() + "__" + image.getOriginalFilename();

        try {
            String uploadDir = "public/images/";
            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            try (InputStream inputStream = image.getInputStream()) {
                Files.copy(inputStream, Paths.get(uploadDir + storageFileName),
                        StandardCopyOption.REPLACE_EXISTING);
            }

        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }

        Printer printer = new Printer();
        printer.setName(printerDto.getName());
        printer.setBrand(printerDto.getBrand());
        printer.setCategory(printerDto.getCategory());
        printer.setPrice(printerDto.getPrice());
        printer.setDescription(printerDto.getDescription());
        printer.setCreatedAt(createdAt);
        printer.setImage_file_name(storageFileName);

        return printerService.save(printer);
    }

    @GetMapping("/{id}")
    public Optional<Printer> getPrinterById(@PathVariable int id) {
        return printerService.findById(id);
    }

    @PutMapping("/edit/{id}")
    public Printer updatePrinter(@PathVariable int id, @Valid @ModelAttribute PrinterDto printerDto, BindingResult result) throws Exception {

        Printer printer = printerService.findById(id).orElseThrow(() -> new Exception("Printer not found"));

        if (result.hasErrors()) {
            throw new Exception("Validation errors");
        }

        if (!printerDto.getImageFile().isEmpty()) {
            String uploadDir = "public/images/";
            Path oldImagePath = Paths.get(uploadDir + printer.getImage_file_name());

            try {
                Files.delete(oldImagePath);
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
            }

            MultipartFile image = printerDto.getImageFile();
            Date createdAt = new Date();
            String storageFileName = createdAt.getTime() + "__" + image.getOriginalFilename();

            try (InputStream inputStream = image.getInputStream()) {
                Files.copy(inputStream, Paths.get(uploadDir + storageFileName), StandardCopyOption.REPLACE_EXISTING);
            }

            printer.setImage_file_name(storageFileName);
        }

        printer.setName(printerDto.getName());
        printer.setBrand(printerDto.getBrand());
        printer.setCategory(printerDto.getCategory());
        printer.setPrice(printerDto.getPrice());
        printer.setDescription(printerDto.getDescription());

        return printerService.save(printer);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePrinter(@PathVariable int id) throws Exception {
        Printer printer = printerService.findById(id).orElseThrow(() -> new Exception("Printer not found"));

        Path imagePath = Paths.get("public/images/" + printer.getImage_file_name());

        try {
            Files.delete(imagePath);
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }

        printerService.delete(printer);
    }
}
