package com.hexad.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@NoArgsConstructor
public class Book {

    @Id
    private String id;
    private String name;
    private String author;


    public Book(String name, String author) {
        this.name = name;
        this.author = author;
    }

}
