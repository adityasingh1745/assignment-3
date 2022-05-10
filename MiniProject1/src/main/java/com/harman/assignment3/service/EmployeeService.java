package com.harman.assignment3.service;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harman.assignment3.model.Employee;
import com.harman.assignment3.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;
	
	// getting all the data
	public List<Employee> getAllEmployees(){
		List<Employee> employee = new ArrayList<>();
		employeeRepository.findAll().forEach(employees -> employee.add(employees));
		return employee;
	}
	
	// get a specific data
	public Employee getEmployeeById(long id) {
		return employeeRepository.findById(id).get();
	}
	
	// saving a specific record
	public void createEmployee(Employee employee){
		employeeRepository.save(employee);
	}
	
	//delete a specific record
	public void deleteEmployee(long id) {
		employeeRepository.deleteById(id);
	}
	
	//updating a record
	public void updateEmployee(Employee employee, long id) {
		Employee emp = employeeRepository.findById(id).get();
		emp.setFirst_name(employee.getFirst_name());
		emp.setEmail_id(employee.getEmail_id());
		emp.setLast_name(employee.getLast_name());
		employeeRepository.save(emp);
	}	
}
