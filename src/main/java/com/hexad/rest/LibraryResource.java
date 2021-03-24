package com.hexad.rest;

import com.hexad.entity.Book;
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

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Book> getAvailableBooks() {
        return library.getAvailableBooks();
    }


    @PostMapping(value = "/{bookId}/borrow")
    public void borrowBook(@PathVariable String bookId, @RequestParam String userId) throws Exception {
        library.issueBookToUser(bookId, userId);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/{userId}")
    public List<Book> getBooksIssuedToUser(@PathVariable String userId) {
        return library.getBooksIssuedToUser(userId);
    }

    @PatchMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/{userId}/{bookId}")
    public void returnBook(@PathVariable String userId, @PathVariable String bookId) {
        library.returnBook(userId, bookId);
    }

}
