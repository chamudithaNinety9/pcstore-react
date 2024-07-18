package com.pcstore.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

@Table(name = "printers")

public class Printer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String name;
    public String brand;
    public String category;

    public double price;

    @Column(columnDefinition = "TEXT")
    public String description;

    public Date createdAt;

    public String image_file_name;

}

