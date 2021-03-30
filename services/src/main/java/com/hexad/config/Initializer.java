package com.hexad.config;

import com.hexad.entity.Book;
import com.hexad.entity.IssuableBook;
import com.hexad.entity.MultiCopyBook;
import com.hexad.entity.UserBookMapping;
import com.hexad.repo.BookRepository;
import com.hexad.repo.UserBookMappingRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class Initializer {
    private final BookRepository bookRepository;

    private final UserBookMappingRepository userBookMappingRepository;

    @EventListener
    public void appReady(ApplicationReadyEvent event) {

        bookRepository.save(List.of(new Book("Book1", "Author1"),
                new Book("Book2", "Author2"),
                new IssuableBook("Book3", "Author3", false),
                new IssuableBook("Book4", "Author1", false),
                new MultiCopyBook("Book5", "Author2", 4),
                new MultiCopyBook("Book6", "Author3", 3)));

        userBookMappingRepository.save(List.of(new UserBookMapping("User1", List.of()), new UserBookMapping("User2", List.of())));

    }
}
