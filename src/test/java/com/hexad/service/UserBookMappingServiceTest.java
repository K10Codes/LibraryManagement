package com.hexad.service;

import com.hexad.entity.Book;
import com.hexad.entity.MultiCopyBook;
import com.hexad.entity.UserBookMapping;
import com.hexad.repo.UserBookMappingRepository;
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

class UserBookMappingServiceTest {


    private UserBookMappingService userBookMappingService;
    private UserBookMappingRepository userBookMappingRepository;

    @BeforeEach
    void setup() {
        userBookMappingRepository = mock(UserBookMappingRepository.class);
        userBookMappingService = new UserBookMappingService(userBookMappingRepository);
    }

    @Test
    void issueBookWhenNoneIssuedToUser() throws Exception {
        when(userBookMappingRepository.findByUserId(USER_1)).thenReturn(Optional.empty());
        userBookMappingService.issueBook(USER_1, BOOK_1);
        ArgumentCaptor<UserBookMapping> userBookCaptor = ArgumentCaptor.forClass(UserBookMapping.class);
        verify(userBookMappingRepository, times(1)).save(userBookCaptor.capture());
        assertEquals(BOOK_1, userBookCaptor.getValue().getBorrowedBooks().get(0));
    }


    @Test
    void issueBookWhenOneBookAlreadyIssuedToUser() throws Exception {
        UserBookMapping userBookMapping = new UserBookMapping(USER_1, new ArrayList<>(singletonList(BOOK_1)));
        when(userBookMappingRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBookMapping));
        userBookMappingService.issueBook(USER_1, BOOK_2);
        ArgumentCaptor<UserBookMapping> userBookCaptor = ArgumentCaptor.forClass(UserBookMapping.class);
        verify(userBookMappingRepository, times(1)).save(userBookCaptor.capture());
        assertEquals(BOOK_1, userBookCaptor.getValue().getBorrowedBooks().get(0));
        assertEquals(BOOK_2, userBookCaptor.getValue().getBorrowedBooks().get(1));
    }


    @Test
    void cantIssueBookIfTwoAlreadyIssued() {
        UserBookMapping userBookMapping = getUserBook();
        when(userBookMappingRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBookMapping));
        Exception exception = assertThrows(Exception.class, () -> userBookMappingService.issueBook(USER_1, "Book3"));
        assertEquals("Can not issue more than 2 books", exception.getMessage());

        verify(userBookMappingRepository, never()).save(any(UserBookMapping.class));

    }

    @Test
    void getIssuedBooks() {
        UserBookMapping userBookMapping = getUserBook();
        when(userBookMappingRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBookMapping));
        assertEquals(List.of(BOOK_ID_1, BOOK_ID_2), userBookMappingService.getIssuedBooks(USER_1));
    }

    private UserBookMapping getUserBook() {
        return new UserBookMapping(USER_1, new ArrayList<>(List.of(BOOK_ID_1, BOOK_ID_2)));
    }

    @Test
    void cantIssueBookIfSameBookAlreadyIssued() throws Exception {
        UserBookMapping userBookMapping = getUserBook();
        userBookMapping.getBorrowedBooks().remove(1);
        when(userBookMappingRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBookMapping));
        Exception exception = assertThrows(Exception.class, () -> userBookMappingService.issueBook(USER_1, new MultiCopyBook(BOOK_ID_1, BOOK_1, AUTHOR_1, 2)));
        assertEquals("This book has already been issued", exception.getMessage());

    }


    @Test
    void issueBookIfIssuedBooksLessThanTwoAndSameBookNotAlreadyIssued() throws Exception {
        UserBookMapping userBookMapping = getUserBook();
        userBookMapping.getBorrowedBooks().remove(0);
        when(userBookMappingRepository.findByUserId(USER_1)).thenReturn(Optional.of(userBookMapping));
        Book book = new MultiCopyBook(BOOK_ID_1, BOOK_1, AUTHOR_1, 2);
        userBookMappingService.issueBook(USER_1, book);
        ArgumentCaptor<UserBookMapping> userBookCaptor = ArgumentCaptor.forClass(UserBookMapping.class);
        verify(userBookMappingRepository, times(1)).save(userBookCaptor.capture());
        assertEquals(BOOK_ID_2, userBookCaptor.getValue().getBorrowedBooks().get(0));
        assertEquals(BOOK_ID_1, userBookCaptor.getValue().getBorrowedBooks().get(1));
    }
}