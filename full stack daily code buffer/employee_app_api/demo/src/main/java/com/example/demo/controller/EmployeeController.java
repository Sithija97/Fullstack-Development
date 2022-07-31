package com.example.demo.controller;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    private List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/employees/{id}")
    private Employee getEmployee(@PathVariable("id") long id) {
        return employeeService.getEmpleeById(id);
    }

    @PostMapping("/employees")
    private Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

     @PutMapping("/employees/{id}")
     private Employee updateEmployee(@RequestBody Employee employee,@PathVariable("id") Long id){
        return employeeService.updateEmployee(employee,id);
     }


    @DeleteMapping("/employees/delete/{id}")
    private void deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
    }
}
