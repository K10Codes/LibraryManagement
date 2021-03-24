package com.hexad.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
public class Book {

    @Id
    private String id;

    public Book(String name, String author) {
        this.name = name;
        this.author = author;
    }

    private String name;
    private String author;
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    private boolean isIssued;

    public boolean canBeIssued() {
        return !this.isIssued;
    }

    public void markIssued(boolean isIssued) {
        this.isIssued = isIssued;
    }

}
