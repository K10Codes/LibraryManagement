package com.hexad.service;

import com.hexad.entity.UserBook;
import com.hexad.repo.UserBookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserBookService {

    private final UserBookRepository userBookRepository;

    public void issueBook(String userId, String bookId) throws Exception {
        UserBook userBook = userBookRepository.findByUserId(userId).orElse(new UserBook());
        List<String> borrowedBooks = userBook.getBorrowedBooks();
        if (borrowedBooks.size() == 2) {
            throw new Exception("Can not issue more than 2 books");
        }
        borrowedBooks.add(bookId);
        userBookRepository.save(userBook);
    }

    public List<String> getIssuedBooks(String userId) {
        return userBookRepository.findByUserId(userId).map(UserBook::getBorrowedBooks).orElse(List.of());
    }

}
