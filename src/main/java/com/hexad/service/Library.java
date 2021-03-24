package com.hexad.service;

import com.hexad.entity.Book;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class Library {

    private final BookService bookService;
    private final UserBookService userBookService;

    public List<Book> getAvailableBooks() {
        return bookService.getAvailableBooks();
    }

    public void issueBookToUser(String bookId, String userId) throws Exception {
        Book book = bookService.getBook(bookId);
        if (!book.canBeIssued()) {
            throw new Exception("Book already issued.");
        }
        userBookService.issueBook(userId, bookId);
        book.markIssued(true);
        bookService.save(book);
    }

    public List<Book> getBooksIssuedToUser(String userId) {
        List<String> issuedBooks = userBookService.getIssuedBooks(userId);
        return bookService.getBooks(issuedBooks);

    }

    public void returnBook(String userId, String bookId) {
    }
}
