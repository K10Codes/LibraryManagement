package com.hexad.repo;

import com.hexad.entity.UserBookMapping;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserBookMappingRepository extends MongoRepository<UserBookMapping, String> {
    Optional<UserBookMapping> findByUserId(String userId);
}
