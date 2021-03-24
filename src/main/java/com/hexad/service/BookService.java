package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.repo.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class BookService {
    private final BookRepository bookRepository;

    public List<Book> getAvailableBooks() {
        return bookRepository.findAll().stream().filter(e -> e.canBeIssued()).collect(Collectors.toList());
    }

    public Book getBook(String id) throws Exception {
        return bookRepository.findById(id).orElseThrow(() -> new Exception("No book found"));
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getBooks(List<String> bookIds) {
        return bookRepository.findByIdIn(bookIds);
    }
}
