package com.pcstore.service.impl;

import com.pcstore.entity.Printer;
import com.pcstore.repo.PrinterRepo;
import com.pcstore.service.PrinterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrinterServiceImpl implements PrinterService {

    @Autowired
    private PrinterRepo printerRepo;


    @Override
    public List<Printer> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(String keyword, String keyword1, String keyword2) {
        return printerRepo.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(keyword, keyword1, keyword2);
    }

    @Override
    public List<Printer> findAll(Sort id) {
        return printerRepo.findAll();
    }

    @Override
    public Printer save(Printer printer) {
        return printerRepo.save(printer);
    }

    @Override
    public Optional<Printer> findById(int id) {
        return printerRepo.findById(id);
    }

    @Override
    public void delete(Printer printer) {
        printerRepo.delete(printer);
    }


}
