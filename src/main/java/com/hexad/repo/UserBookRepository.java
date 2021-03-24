package com.hexad.repo;

import com.hexad.entity.UserBook;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserBookRepository extends MongoRepository<UserBook, String> {
    Optional<UserBook> findByUserId(String userId);
}
