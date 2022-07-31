package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;

@Entity
@Table(name = "Employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="employee_Id")
    private Long Id;

    @Column(name="firstName")
    private String firstName;

    @Column(name="secondName")
    private String secondName;

    @Column(name="email")
    private String email;

    public Employee() {

    }

    public Employee(String firstName, String secondName, String email) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email =email;
    }

    public Long getId() {
        return Id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
