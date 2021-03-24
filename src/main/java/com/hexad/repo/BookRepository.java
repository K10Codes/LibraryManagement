package com.hexad.repo;

import com.hexad.entity.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends MongoRepository<Book, String> {

    Optional<Book> findById(String id);

    List<Book> findByIdIn(List<String> bookIds);
}
