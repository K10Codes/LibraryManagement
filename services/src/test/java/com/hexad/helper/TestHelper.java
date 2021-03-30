package com.hexad.helper;

import com.hexad.entity.Book;
import com.hexad.entity.MultiCopyBook;

import java.util.List;

public class TestHelper {

    public static final String BOOK_1 = "Book1";
    public static final String BOOK_ID_1 = "Id1";
    public static final String BOOK_ID_2 = "Id2";
    public static final String AUTHOR_1 = "Author1";
    public static final String BOOK_2 = "Book2";
    public static final String BOOK_3 = "Book3";
    private static final String AUTHOR_2 = "Author2";
    public static final String USER_1 = "User1";

    public static List<Book> getListOfBoks() {
        return List.of(new Book(BOOK_1, AUTHOR_1), new Book(BOOK_2, AUTHOR_2));
    }

    public static List<Book> getListOfMultiCopyBooks() {
        return List.of(new MultiCopyBook(BOOK_1, AUTHOR_1, 0), new MultiCopyBook(BOOK_2, AUTHOR_2, 3),
                new MultiCopyBook(BOOK_3, AUTHOR_2, 2));
    }
}