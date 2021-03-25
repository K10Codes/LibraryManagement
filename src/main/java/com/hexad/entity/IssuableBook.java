package com.hexad.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssuableBook extends Book {

    @Getter(AccessLevel.PRIVATE)
    private boolean isIssued;

    public IssuableBook(String name, String author) {
        super(name, author);
    }

    public IssuableBook(String name, String author, boolean isIssued) {
        super(name, author);
        this.isIssued = isIssued;
    }

    public IssuableBook(Book book) {
        this(book.getName(), book.getAuthor());
        this.setId(book.getId());
        if (book instanceof IssuableBook) {
            this.isIssued = ((IssuableBook) book).isIssued();
        } else {
            this.isIssued = false;
        }
    }

    public boolean canBeIssued() {
        return !this.isIssued;
    }

    public void markIssued(Boolean isIssued) {
        this.isIssued = isIssued;
    }

}
