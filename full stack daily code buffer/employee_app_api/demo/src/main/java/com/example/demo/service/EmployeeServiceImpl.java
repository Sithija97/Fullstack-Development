package com.example.demo.service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    final
    EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees;
    }

    @Override
    public Employee addEmployee(Employee employee) {
        employeeRepository.save(employee);
        return employee;
    }

    @Override
    public void deleteEmployee(long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if(employee.isPresent()) {
            employeeRepository.deleteById(id);
        }
    }

    @Override
    public Employee getEmpleeById(long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if(employee.isPresent()){
            return employee.get();
        }
        return null;
    }

    @Override
    public Employee updateEmployee(Employee employee, Long id) {
        Optional<Employee> employee_ = employeeRepository.findById(id);
        if(employee_.isPresent()){
            Employee updatedEmployee = employee_.get();
            updatedEmployee.setFirstName(employee.getFirstName());
            updatedEmployee.setSecondName(employee.getSecondName());
            updatedEmployee.setEmail(employee.getEmail());
            return employeeRepository.save(updatedEmployee);
        }
        return employee;
    }


}
