package com.pcstore.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PrinterDto {

    @NotEmpty(message = "Field is required")
    private String name;

    @NotEmpty(message = "Field is required")
    private String brand;

    @NotEmpty(message = "Field is required")
    private String category;

    @Min(0)
    private double price;

    @Size(min = 10, message = "should contain at least 10 characters")
    @Size(max = 2000, message = "cannot exceed 2000 characters")
    private String description;

    private MultipartFile imageFile;
}
