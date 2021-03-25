package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.entity.IssuableBook;
import com.hexad.entity.MultiCopyBook;
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
    private UserBookMappingService userBookMappingService;

    @BeforeEach
    void setup() {
        bookService = mock(BookService.class);
        userBookMappingService = mock(UserBookMappingService.class);
        library = new Library(bookService, userBookMappingService);
    }

    @Test
    void getAllBooks() {
        List<Book> books = TestHelper.getListOfBoks();
        when(bookService.getAllBooks()).thenReturn(books);
        assertEquals(books, library.getAllBooks());
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
        verify(userBookMappingService, never()).issueBook(anyString(), anyString());
    }

    @Test
    void notIssueBookIfUserIssueFails() throws Exception {
        Book book = new Book(BOOK_1, AUTHOR_1);
        when(bookService.getBook(BOOK_1)).thenReturn(book);
        doThrow(new Exception()).when(userBookMappingService).issueBook(USER_1, BOOK_1);
        assertThrows(Exception.class, () -> library.issueBookToUser(BOOK_1, USER_1));
        verify(bookService, never()).save(any());
    }

    @Test
    void issueBookShouldUpdateBook() throws Exception {
        Book book = new Book(BOOK_1, AUTHOR_1);
        book.setId(BOOK_ID_1);
        when(bookService.getBook(BOOK_ID_1)).thenReturn(book);
        library.issueBookToUser(BOOK_ID_1, USER_1);
        ArgumentCaptor<IssuableBook> bookArgCaptor = ArgumentCaptor.forClass(IssuableBook.class);
        verify(bookService, times(1)).issueBook(bookArgCaptor.capture());
        assertEquals(BOOK_ID_1, bookArgCaptor.getValue().getId());
        verify(userBookMappingService, times(1)).issueBook(USER_1, BOOK_ID_1);
    }

    @Test
    void getBooksIssuedToUser() {
        List<String> bookIds = List.of(BOOK_1, BOOK_2);
        when(userBookMappingService.getIssuedBooks(USER_1)).thenReturn(bookIds);
        List<Book> books = getListOfBoks();
        when(bookService.getBooks(bookIds)).thenReturn(books);
        assertEquals(books, library.getBooksIssuedToUser(USER_1));
    }

    @Test
    void issueBookCopyForUser() throws Exception {
        Book book = new MultiCopyBook(BOOK_ID_1, BOOK_1, AUTHOR_1, 2);
        when(bookService.getBook(BOOK_ID_1)).thenReturn(book);
        library.issueBookCopyToUser(BOOK_ID_1, USER_1);
        ArgumentCaptor<MultiCopyBook> bookArgCaptor = ArgumentCaptor.forClass(MultiCopyBook.class);
        verify(userBookMappingService, times(1)).issueBook(eq(USER_1), bookArgCaptor.capture());
        assertEquals(2, bookArgCaptor.getValue().getCopies());
        assertEquals(BOOK_ID_1, bookArgCaptor.getValue().getId());

        verify(bookService, times(1)).issueBook(bookArgCaptor.capture());
        assertTrue(bookArgCaptor.getValue().canBeIssued());
    }
}