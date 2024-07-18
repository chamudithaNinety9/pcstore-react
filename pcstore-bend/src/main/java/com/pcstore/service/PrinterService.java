package com.pcstore.service;

import com.pcstore.entity.Printer;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

public interface PrinterService {

    List<Printer> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(String keyword, String keyword1, String keyword2);

    List<Printer> findAll(Sort id);

    Printer save(Printer printer);

    Optional<Printer> findById(int id);

    void delete(Printer printer);
}
