package com.hexad.rest;

import com.hexad.entity.Book;
import com.hexad.entity.MultiCopyBook;
import com.hexad.service.Library;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
@RequestMapping("/api/library/books")
public class LibraryResource {

    private final Library library;

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Book> getAllBooks() {
        return library.getAllBooks();
    }

    @GetMapping(value = "/available", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Book> getAvailableBooks() {
        return library.getAvailableBooks();
    }



    @PostMapping(value = "/available/{bookId}/borrow")
    public void borrowBook(@PathVariable String bookId) throws Exception {
        library.issueBookToUser(bookId, getLoggedInUser());
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/issued")
    public List<Book> getBooksIssuedToUser() {
        return library.getBooksIssuedToUser(getLoggedInUser());
    }

    @GetMapping(value = "/availableCopies", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MultiCopyBook> getAvailableBookCopies() {
        return library.getAvailableBookCopies();
    }

    @PostMapping(value = "/availableCopies/{bookId}/borrow")
    public void borrowBookCopy(@PathVariable String bookId) throws Exception {
        library.issueBookCopyToUser(bookId, getLoggedInUser());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/{bookId}/return")
    public void returnBook(@PathVariable String bookId) throws Exception {
        library.returnBookRequest(bookId,getLoggedInUser());
    }


    /**
     * This would be read from a session. For the sake of this assignment hardcoding this to User1.
     *
     * @return
     */
    private String getLoggedInUser() {
        return "User1";
    }
}
