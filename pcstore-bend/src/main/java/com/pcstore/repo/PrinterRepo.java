package com.pcstore.repo;

import com.pcstore.entity.Printer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories

public interface PrinterRepo extends JpaRepository<Printer, Integer> {
    List<Printer> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(String keyword, String keyword1, String keyword2);
}
