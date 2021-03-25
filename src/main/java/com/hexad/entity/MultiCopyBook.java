package com.hexad.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MultiCopyBook extends IssuableBook {

    private int copies;

    public MultiCopyBook(String name, String author, int copies) {
        super(name, author);
        this.copies = copies;
    }

    public MultiCopyBook(String id, String name, String author, int copies) {
        this(name, author, copies);
        this.setId(id);
    }

    public MultiCopyBook(Book book) {
        super(book);
        if (book instanceof MultiCopyBook) {
            this.copies = ((MultiCopyBook) book).getCopies();
        } else {
            this.copies = 1;
        }
    }

    @Override
    public boolean canBeIssued() {
        return super.canBeIssued() && this.copies > 0;
    }

    @Override
    public void markIssued(Boolean isIssued) {
        if (isIssued) {
            this.copies--;
        } else {
            this.copies++;
        }
    }
}
