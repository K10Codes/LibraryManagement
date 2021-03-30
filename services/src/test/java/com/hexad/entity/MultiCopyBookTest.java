package com.hexad.entity;

import org.junit.jupiter.api.Test;

import static com.hexad.helper.TestHelper.AUTHOR_1;
import static com.hexad.helper.TestHelper.BOOK_1;
import static org.junit.jupiter.api.Assertions.*;

class MultiCopyBookTest {

    @Test
    void issueBooksWithMultipleCopies() {
        MultiCopyBook book = new MultiCopyBook(BOOK_1, AUTHOR_1, 2);
        assertTrue(book.canBeIssued());
    }

    @Test
    void cantIssueBookWithZeroCopies() {
        MultiCopyBook book = new MultiCopyBook(BOOK_1, AUTHOR_1, 0);
        assertFalse(book.canBeIssued());
    }

/*
    @Test
    void cantIssueBookWhichIsMarkedIssued() {

        MultiCopyBook book = new MultiCopyBook(BOOK_1, AUTHOR_1);
        book.markIssued(true);
        assertFalse(new MultiCopyBook(book).canBeIssued());

    }
*/

    @Test
    void markIssuedIfMultipleCopies() {
        MultiCopyBook book = new MultiCopyBook(BOOK_1, AUTHOR_1, 2);
        book.markIssued(true);
        assertTrue(book.canBeIssued());
        assertEquals(1, book.getCopies());
    }


    @Test
    void markIssuedIfLastCopy() {
        MultiCopyBook book = new MultiCopyBook(BOOK_1, AUTHOR_1, 1);
        book.markIssued(true);
        assertFalse(book.canBeIssued());
    }


    @Test
    void markAvailable() {
        MultiCopyBook book = new MultiCopyBook(BOOK_1, AUTHOR_1, 1);
        book.markIssued(false);
        assertEquals(2, book.getCopies());
    }
}