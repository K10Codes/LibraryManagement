package com.hexad.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hexad.entity.Book;
import com.hexad.entity.MultiCopyBook;
import com.hexad.helper.TestHelper;
import com.hexad.service.Library;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class LibraryResourceTest {

    private static final String USER_1 = "User1";
    private Library library;
    private MockMvc mockMvc;

    @BeforeEach
    void setup() {
        library = mock(Library.class);
        LibraryResource libraryResource = new LibraryResource(library);
        mockMvc = MockMvcBuilders.standaloneSetup(libraryResource).build();
    }

    @Test
    void noBooksReturned() throws Exception {
        List<Book> books = Collections.EMPTY_LIST;
        when(library.getAvailableBooks()).thenReturn(books);
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/api/library/books/all")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library, times(1)).getAllBooks();
        assertEquals("[]", mvcResult.getResponse().getContentAsString());
    }

    @Test
    void returnListOfAvailableBooks() throws Exception {
        List<Book> books = TestHelper.getListOfBoks();
        when(library.getAvailableBooks()).thenReturn(books);
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/api/library/books/available")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library, times(1)).getAvailableBooks();
        assertEquals(new ObjectMapper().writeValueAsString(books), mvcResult.getResponse().getContentAsString());
    }


    @Test
    void borrowBook() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/library/books/available/book1/borrow")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library,times(1)).issueBookToUser("book1",USER_1);

    }

    @Test
    void getBooksIssuedByUser() throws Exception {
        List<Book> books = TestHelper.getListOfBoks();
        when(library.getBooksIssuedToUser(USER_1)).thenReturn(books);
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/api/library/books/issued")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library, times(1)).getBooksIssuedToUser(USER_1);
        assertEquals(new ObjectMapper().writeValueAsString(books), mvcResult.getResponse().getContentAsString());
    }

    @Test
    void returnListOfAvailableBooksWithCopies() throws Exception {
        List<Book> books = TestHelper.getListOfMultiCopyBooks();
        List<MultiCopyBook> multiCopyBooks = books.stream().map(MultiCopyBook::new).collect(Collectors.toList());
        when(library.getAvailableBookCopies()).thenReturn(multiCopyBooks);
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/api/library/books/availableCopies")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library, times(1)).getAvailableBookCopies();
        assertEquals(new ObjectMapper().writeValueAsString(books), mvcResult.getResponse().getContentAsString());
    }

    @Test
    void borrowABookThatHasCopies() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/library/books/availableCopies/book1/borrow")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library,times(1)).issueBookCopyToUser("book1",USER_1);

    }


    @Test
    void returnBookIssuedByUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/library/books/book1/return")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library,times(1)).returnBookRequest("book1",USER_1);

    }

}