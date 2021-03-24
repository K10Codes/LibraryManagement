package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.helper.TestHelper;
import com.hexad.repo.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static com.hexad.helper.TestHelper.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class BookServiceTest {

    private BookService bookService;
    private BookRepository bookRepository;

    @BeforeEach
    void setup() {
        bookRepository = mock(BookRepository.class);
        bookService = new BookService(bookRepository);
    }

    @Test
    void getBooks() {
        List<Book> books = TestHelper.getListOfBoks();
        books.get(1).markIssued(true);
        when(bookRepository.findAll()).thenReturn(books);
        List<Book> avBooks = bookService.getAvailableBooks();
        assertEquals(1, avBooks.size());
        assertEquals(BOOK_1, avBooks.get(0).getName());
    }

    @Test
    void getBook() throws Exception {
        Book book = new Book(BOOK_1, AUTHOR_1);
        when(bookRepository.findById(BOOK_1)).thenReturn(Optional.of(book));
        assertEquals(book, bookService.getBook(BOOK_1));
    }

    @Test
    void throwExIfBookNotFound() {
        when(bookRepository.findById(BOOK_1)).thenReturn(Optional.empty());
        assertThrows(Exception.class, () -> bookService.getBook(BOOK_1));
    }

    @Test
    void save() {
        Book book = new Book(BOOK_1, AUTHOR_1);
        bookService.save(book);
        verify(bookRepository, times(1)).save(book);
    }

    @Test
    void getBooksByIds() {
        List<String> bookIds = List.of(BOOK_1, BOOK_2);
        List<Book> books = getListOfBoks();
        when(bookRepository.findByIdIn(bookIds)).thenReturn(books);
        assertEquals(books, bookService.getBooks(bookIds));

    }
}