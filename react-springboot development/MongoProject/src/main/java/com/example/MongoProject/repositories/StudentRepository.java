package com.example.MongoProject.repositories;

import com.example.MongoProject.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository <Student, Long> {

}
