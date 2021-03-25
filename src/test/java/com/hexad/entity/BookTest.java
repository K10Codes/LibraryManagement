package com.hexad.entity;

import org.junit.jupiter.api.Test;

import static com.hexad.helper.TestHelper.AUTHOR_1;
import static com.hexad.helper.TestHelper.BOOK_1;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class IssuableBookTest {

    @Test
    void canBeIssued() {
        IssuableBook book = new IssuableBook(BOOK_1, AUTHOR_1);
        assertTrue(book.canBeIssued());
    }

    @Test
    void markAsIssued() {
        IssuableBook book = new IssuableBook(BOOK_1, AUTHOR_1);
        book.markIssued(true);
        assertFalse(book.canBeIssued());
        book.markIssued(false);
        assertTrue(book.canBeIssued());

    }
}