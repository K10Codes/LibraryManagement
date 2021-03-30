package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.entity.IssuableBook;
import com.hexad.entity.MultiCopyBook;
import com.hexad.repo.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@AllArgsConstructor
@Service
public class BookService {
    private final BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> getAvailableBooks() {
        return bookRepository.findAll().stream()
                .map(IssuableBook::new).filter(e -> e.canBeIssued()).collect(toList());
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

    public List<MultiCopyBook> getAvailableBookCopies() {
        return bookRepository.findAll().stream().map(MultiCopyBook::new).filter(e -> e.canBeIssued())
                .collect(toList());
    }

    public void issueBook(IssuableBook book) {
        book.markIssued(true);
        this.save(book);
    }

    public <T extends IssuableBook> void markAsAvailable(T book) {
        book.markIssued(false);
        this.save(book);
    }
}
