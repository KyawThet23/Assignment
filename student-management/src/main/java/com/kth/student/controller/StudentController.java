package com.kth.student.controller;

import java.util.List;
import java.util.Set;

import com.kth.student.payload.MarkDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kth.student.ds.Student;
import com.kth.student.ds.StudentSubject;
import com.kth.student.payload.StudentDto;
import com.kth.student.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private StudentService service;
	@Autowired
	private EntityManager entityManager;
	@PostMapping("/create")
	String createStudent(@RequestBody StudentDto request) {
		
		service.create(request);
		return "Created successfully!";
		
	}
	
	@PostMapping("/mark/{stuId}/{subId}/{request}")
	StudentSubject addMark(
			@PathVariable int stuId,
			@PathVariable int subId,
			@PathVariable int request){
		return service.addMark( stuId , subId , request);
	}

//	find subject and mark for one student
	@GetMapping("/mark/{studentId}")
	public List<MarkDto[]> getSubjectsForStudent(@PathVariable int studentId) {
		String hql = "SELECT s.name, ss.mark, ss.subject.id , s.semester "
				+ "FROM StudentSubject ss JOIN ss.subject s "
				+ "WHERE ss.student.id = :studentId";
		Query query = entityManager.createQuery(hql);
		query.setParameter("studentId", studentId);
		List<MarkDto[]> results = query.getResultList(); 
		return results;
	}
	
	@GetMapping("/list")
	List<StudentDto> ListAllStudent() {
		return service.listAllStudent();
	}
	
	@PutMapping("/update/{id}")
	StudentDto updateStudent(@RequestBody StudentDto request,
							 @PathVariable int id) {
		return service.updateStudent(id,request);
	}
	
	@DeleteMapping("/delete/{id}")
	String deleteStudent(@PathVariable int id) {
		service.deleteStudentById(id);
		return "Delete Successfully";
	}
	
	@GetMapping("/search/{name}")
	List<Student> searchByName(@PathVariable String name) {
		return service.searchByName(name);
	}

	@GetMapping("/year/{name}")
	Set<StudentDto> getAllByYear(@PathVariable String name){
		return service.getAllByYear(name);
	}
	@GetMapping("/{id}")
	StudentDto getById(@PathVariable int id) {
		return service.getStudentById(id);
	}
}
