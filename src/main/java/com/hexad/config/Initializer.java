package com.hexad.config;

import com.hexad.entity.Book;
import com.hexad.entity.UserBook;
import com.hexad.repo.BookRepository;
import com.hexad.repo.UserBookRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class Initializer {
    private final BookRepository bookRepository;

    private final UserBookRepository userBookRepository;

    @EventListener
    public void appReady(ApplicationReadyEvent event) {

        bookRepository.save(List.of(new Book("Book1", "Author1"),
                new Book("Book2", "Author2"),
                new Book("Book3", "Author3")));

        userBookRepository.save(List.of(new UserBook("User1", List.of()), new UserBook("User2", List.of())));

    }
}
