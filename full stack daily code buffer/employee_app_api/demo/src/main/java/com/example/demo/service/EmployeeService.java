package com.example.demo.service;

import com.example.demo.model.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getEmployees();


    Employee addEmployee(Employee employee);

    void deleteEmployee(long id);

    Employee getEmpleeById(long id);

    Employee updateEmployee(Employee employee, Long id);
}

