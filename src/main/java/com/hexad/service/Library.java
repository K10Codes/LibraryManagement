package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.entity.IssuableBook;
import com.hexad.entity.MultiCopyBook;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class Library {

    private final BookService bookService;
    private final UserBookMappingService userBookMappingService;

    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    public List<Book> getAvailableBooks() {
        return bookService.getAvailableBooks();
    }

    public void issueBookToUser(String bookId, String userId) throws Exception {
        IssuableBook book = new IssuableBook(bookService.getBook(bookId));
        if (!book.canBeIssued()) {
            throw new Exception("Book already issued.");
        }
        userBookMappingService.issueBook(userId, bookId);
        bookService.issueBook(book);
    }

    public List<Book> getBooksIssuedToUser(String userId) {
        List<String> issuedBooks = userBookMappingService.getIssuedBooks(userId);
        return bookService.getBooks(issuedBooks);
    }

    public List<MultiCopyBook> getAvailableBookCopies() {
        return bookService.getAvailableBookCopies();
    }

    public void issueBookCopyToUser(String bookId, String userId) throws Exception {
        MultiCopyBook book = new MultiCopyBook(bookService.getBook(bookId));
        if (!book.canBeIssued()) {
            throw new Exception("Book can not be issued.");
        }
        userBookMappingService.issueBook(userId, book);
        bookService.issueBook(book);
    }


    public void takeReturnBookRequest(String bookId, String userId) throws Exception {
        Book book = bookService.getBook(bookId);

    }
}
