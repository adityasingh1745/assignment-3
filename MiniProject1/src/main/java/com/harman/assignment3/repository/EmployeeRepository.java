package com.harman.assignment3.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.harman.assignment3.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{

}