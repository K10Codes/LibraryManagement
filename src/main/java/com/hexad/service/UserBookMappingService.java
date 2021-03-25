package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.entity.UserBookMapping;
import com.hexad.repo.UserBookMappingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserBookMappingService {

    private final UserBookMappingRepository userBookMappingRepository;

    public void issueBook(String userId, String bookId) throws Exception {
        UserBookMapping userBookMapping = userBookMappingRepository.findByUserId(userId).orElse(new UserBookMapping());
        List<String> borrowedBooks = userBookMapping.getBorrowedBooks();
        if (borrowedBooks.size() == 2) {
            throw new Exception("Can not issue more than 2 books");
        }
        borrowedBooks.add(bookId);
        userBookMappingRepository.save(userBookMapping);
    }

    public List<String> getIssuedBooks(String userId) {
        return userBookMappingRepository.findByUserId(userId).map(UserBookMapping::getBorrowedBooks).orElse(List.of());
    }


    public void issueBook(String userId, Book book) throws Exception {
        UserBookMapping userBookMapping = userBookMappingRepository.findByUserId(userId).orElse(new UserBookMapping());
        List<String> borrowedBooks = userBookMapping.getBorrowedBooks();
        if (borrowedBooks.size() == 2) {
            throw new Exception("Can not issue more than 2 books");
        }
        if(borrowedBooks.contains(book.getId())){
            throw new Exception("This book has already been issued");
        }
        borrowedBooks.add(book.getId());
        userBookMappingRepository.save(userBookMapping);
    }
}
