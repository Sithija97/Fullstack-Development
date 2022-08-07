package com.employee;

public class Employee {
    String name;
    Integer age;
    static Double salary;
    String location;

    public Employee(String name, Integer age, Double salary, String location) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.location = location;
    }

    void raiseSalary(Integer value) {
        System.out.println("\n"+this.name+"'s"+" salary incremented by :"+value);
        this.salary = this.salary + value;
    }

    static Double getSalary() {
        return salary;
    }
}
