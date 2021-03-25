package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.entity.IssuableBook;
import com.hexad.entity.MultiCopyBook;
import com.hexad.helper.TestHelper;
import com.hexad.repo.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.hexad.helper.TestHelper.*;
import static org.junit.jupiter.api.Assertions.*;
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
    void getAllBooks() {
        List<Book> books = TestHelper.getListOfBoks();
        when(bookRepository.findAll()).thenReturn(books);
        assertEquals(books, bookService.getAllBooks());
    }

    @Test
    void getAvailableBooks() {
        List<Book> books = new ArrayList<>(TestHelper.getListOfBoks());
        books.add(new IssuableBook(BOOK_3, AUTHOR_1, true));
        when(bookRepository.findAll()).thenReturn(books);
        List<Book> avBooks = bookService.getAvailableBooks();
        assertEquals(2, avBooks.size());
        assertEquals(BOOK_1, avBooks.get(0).getName());
        assertEquals(BOOK_2, avBooks.get(1).getName());
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

    @Test
    void getAvailableBookCopies() {
        List<Book> books = getListOfMultiCopyBooks();
        when(bookRepository.findAll()).thenReturn(books);
        List<MultiCopyBook> avBooks = bookService.getAvailableBookCopies();
        assertEquals(2, avBooks.size());
        assertEquals(BOOK_2, avBooks.get(0).getName());
        assertEquals(BOOK_3, avBooks.get(1).getName());
    }

    @Test
    void issueBook() {
        IssuableBook book = new IssuableBook(BOOK_1, AUTHOR_1);
        bookService.issueBook(book);
        ArgumentCaptor<IssuableBook> bookArgCaptor = ArgumentCaptor.forClass(IssuableBook.class);
        verify(bookRepository, times(1)).save(bookArgCaptor.capture());
        assertFalse(bookArgCaptor.getValue().canBeIssued());
    }
}