package com.hexad.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Document
public class UserBookMapping {

    @Id
    private String id;
    private String userId;
    private List<String> borrowedBooks = new ArrayList<>();

    public UserBookMapping(String userId, List<String> borrowedBooks) {
        this.borrowedBooks = borrowedBooks;
        this.userId = userId;
    }
}
