package com.harman.assignment3.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.harman.assignment3.model.Employee;
import com.harman.assignment3.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	// for all the data
	@GetMapping("/employees")
	private List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	
	// for retrieving a specific data
	@GetMapping("/employees/{id}")
	private Employee getEmployeeById(@PathVariable("id") long id) {
		return employeeService.getEmployeeById(id);
	}
	
	// for deleting a specific data
	@DeleteMapping("/employees/{id}")
	private void deleteEmployee(@PathVariable("id") long id) {
		employeeService.deleteEmployee(id);
	}
	
	// for saving the data
	@PostMapping("/employees")
	private long saveData(@RequestBody Employee employee) {
		employeeService.createEmployee(employee);
		return employee.getId();
	}
	
	//for updating the data
	@PutMapping("/employees/{id}")
	private Employee updateEmployee(@RequestBody Employee employee,@PathVariable("id") long id) {
		employeeService.updateEmployee(employee,id);
		return employee;
	}
}
