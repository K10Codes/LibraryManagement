package com.hexad.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hexad.entity.Book;
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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class LibraryResourceTest {

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
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/api/library/books")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library, times(1)).getAvailableBooks();
        assertEquals("[]", mvcResult.getResponse().getContentAsString());
    }

    @Test
    void returnListOfAvailableBooks() throws Exception {
        List<Book> books = TestHelper.getListOfBoks();
        when(library.getAvailableBooks()).thenReturn(books);
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/api/library/books")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();
        verify(library, times(1)).getAvailableBooks();
        assertEquals(new ObjectMapper().writeValueAsString(books), mvcResult.getResponse().getContentAsString());
    }

    @Test
    void borrowBook() throws Exception {
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/api/library/books/book1/borrow")
                .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();

    }
}