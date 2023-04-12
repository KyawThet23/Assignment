package com.kth.student.dao;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kth.student.ds.Student;

public interface StudentDao extends JpaRepository<Student, Integer>{

	@Query("SELECT e FROM Student e WHERE e.name LIKE %:name%")
	List<Student> findByStudentName(@Param("name")String name);

	@Query("select e from Student e where e.year like %:year%")
	Set<Student> 	findAllByYear(@Param("year")String year);

}
