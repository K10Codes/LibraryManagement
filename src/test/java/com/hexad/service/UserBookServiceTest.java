package com.hexad.service;

import com.hexad.entity.UserBook;
import com.hexad.repo.UserBookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.hexad.helper.TestHelper.*;
import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class UserBookServiceTest {


    private UserBookService userBookService;
    private UserBookRepository userBookRepository;

    @BeforeEach
    void setup() {
        userBookRepository = mock(UserBookRepository.class);
        userBookService = new UserBookService(userBookRepository);
    }

    @Test
    void issueBookWhenNoneIssuedToUser() throws Exception {
        when(userBookRepository.findByUserId(USER_1)).thenReturn(Optional.empty());
        userBookService.issueBook(USER_1, BOOK_1);
        ArgumentCaptor<UserBook> userBookCaptor = ArgumentCaptor.forClass(UserBook.class);
        verify(userBookRepository, times(1)).save(userBookCaptor.capture());
        assertEquals(BOOK_1, userBookCaptor.getValue().getBorrowedBooks().get(0));
    }


    @Test
    void issueBookWhenOneBookAlreadyIssuedToUser() throws Exception {
        UserBook userBook = new UserBook(USER_1, new ArrayList<>(singletonList(BOOK_1)));
        when(userBookRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBook));
        userBookService.issueBook(USER_1, BOOK_2);
        ArgumentCaptor<UserBook> userBookCaptor = ArgumentCaptor.forClass(UserBook.class);
        verify(userBookRepository, times(1)).save(userBookCaptor.capture());
        assertEquals(BOOK_1, userBookCaptor.getValue().getBorrowedBooks().get(0));
        assertEquals(BOOK_2, userBookCaptor.getValue().getBorrowedBooks().get(1));
    }


    @Test
    void cantIssueBookIfTwoAlreadyIssued() {
        UserBook userBook = getUserBook();
        when(userBookRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBook));
        Exception exception = assertThrows(Exception.class, () -> userBookService.issueBook(USER_1, "Book3"));
        assertEquals("Can not issue more than 2 books", exception.getMessage());

        verify(userBookRepository, never()).save(any(UserBook.class));

    }

    @Test
    void getIssuedBooks() {
        UserBook userBook = getUserBook();
        when(userBookRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBook));
        assertEquals(List.of(BOOK_1, BOOK_2), userBookService.getIssuedBooks(USER_1));
    }

    private UserBook getUserBook() {
        return new UserBook(USER_1, List.of(BOOK_1, BOOK_2));
    }

}