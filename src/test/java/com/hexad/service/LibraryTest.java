package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.helper.TestHelper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.List;

import static com.hexad.helper.TestHelper.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class LibraryTest {

    private Library library;
    private BookService bookService;
    private UserBookService userBookService;

    @BeforeEach
    void setup() {
        bookService = mock(BookService.class);
        userBookService = mock(UserBookService.class);
        library = new Library(bookService, userBookService);
    }

    @Test
    void getAvailableBooksInLibrary() {
        List<Book> books = TestHelper.getListOfBoks();
        when(bookService.getAvailableBooks()).thenReturn(books);
        assertEquals(books, library.getAvailableBooks());

    }

    @Test
    void cantIssueBookIfNotFound() throws Exception {
        when(bookService.getBook(BOOK_1)).thenThrow(new Exception("Book not found"));
        assertThrows(Exception.class, () -> library.issueBookToUser(BOOK_1, USER_1));
        verify(bookService, never()).save(any());
    }

    @Test
    void notIssueBookIfUserIssueFails() throws Exception {
        Book book = new Book(BOOK_1, AUTHOR_1);
        when(bookService.getBook(BOOK_1)).thenReturn(book);
        doThrow(new Exception()).when(userBookService).issueBook(USER_1, BOOK_1);
        assertThrows(Exception.class, () -> library.issueBookToUser(BOOK_1, USER_1));
        verify(bookService, never()).save(any());
    }

    @Test
    void issueBookShouldUpdateBook() throws Exception {
        Book book = new Book(BOOK_1, AUTHOR_1);
        when(bookService.getBook(BOOK_1)).thenReturn(book);
        library.issueBookToUser(BOOK_1, USER_1);
        ArgumentCaptor<Book> bookArgCaptor = ArgumentCaptor.forClass(Book.class);
        verify(bookService, times(1)).save(bookArgCaptor.capture());
        assertFalse(bookArgCaptor.getValue().canBeIssued());
    }

    @Test
    void getBooksIssuedToUser() {
        List<String> bookIds = List.of(BOOK_1, BOOK_2);
        when(userBookService.getIssuedBooks(USER_1)).thenReturn(bookIds);
        List<Book> books = getListOfBoks();
        when(bookService.getBooks(bookIds)).thenReturn(books);
        assertEquals(books, library.getBooksIssuedToUser(USER_1));
    }

}