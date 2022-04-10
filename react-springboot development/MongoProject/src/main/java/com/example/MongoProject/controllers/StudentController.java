package com.example.MongoProject.controllers;

import com.example.MongoProject.model.Student;
import com.example.MongoProject.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    public StudentRepository studentRepository;

    @GetMapping(value = "/all")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @PostMapping(value = "/create")
    public String createStudent(@RequestBody Student student){
        Student insertedStudent = studentRepository.insert(student);
        return "student created: "+insertedStudent.getName();
    }
}
