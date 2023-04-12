package com.kth.student.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.kth.student.dao.StuSubDao;
import com.kth.student.dao.SubjectDao;
import com.kth.student.ds.StudentSubject;
import com.kth.student.ds.Subject;
import com.kth.student.payload.MarkDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kth.student.dao.StudentDao;
import com.kth.student.ds.Student;
import com.kth.student.payload.StudentDto;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StudentService {

	@Autowired
	private StudentDao repository;
	@Autowired
	private SubjectDao subjectRepository;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private StuSubDao stuSubRepo;

	@Transactional
	public void create(StudentDto request) {

		Student student = dtoToEntity(request);

		Set<Subject> subjects = subjectRepository.findByYearLevel(request.getYear());
		student.setSubjects(subjects);

		repository.save(student);
	}
	
	public List<StudentDto> listAllStudent() {
		
		List<Student> students = repository.findAll();
		
		return students.stream()
		.map(student -> entityToDto(student))
		.collect(Collectors.toList());
		
	}
	
	public StudentDto updateStudent(int id, StudentDto request) {
		
		Student existingStudent = 
				repository.findById(id)
				.orElseThrow(EntityNotFoundException::new);
		
		existingStudent.setName(request.getName() == null ?
				existingStudent.getName() : request.getName());
		
		existingStudent.setEmail(request.getEmail() == null ?
				existingStudent.getEmail() : request.getEmail());
		
		existingStudent.setPhone(request.getPhone() == null ?
				existingStudent.getPhone() : request.getPhone());
		
		existingStudent.setDob(request.getDob() == null ?
				existingStudent.getDob() : request.getDob());
		
		existingStudent.setGender(request.getGender() == null ?
				existingStudent.getGender() : request.getGender());
		
		existingStudent.setYear(request.getYear() == null ?
				existingStudent.getYear() : request.getYear());
		
		repository.save(existingStudent);
		StudentDto dto = entityToDto(existingStudent);
		return dto;
		
	}
	
	public void deleteStudentById(int id) {
		repository.deleteById(id);
	}

	public List<Student> searchByName(String name) {
		return repository.findByStudentName(name);
	}

	public Set<StudentDto> getAllByYear(String name) {
		Set<Student> students = repository.findAllByYear(name);
		return students.stream()
				.map(student -> entityToDto(student))
				.collect(Collectors.toSet());
	}
	
	private Student dtoToEntity(StudentDto dto) {
		Student student = mapper.map(dto, Student.class);
		return student;
	}

	private StudentDto entityToDto(Student student) {
		StudentDto dto = mapper.map(student, StudentDto.class);
		return dto;
	}

	@Transactional
	public StudentSubject addMark(int stuId, int subId , Integer mark) {

		StudentSubject existing = stuSubRepo.findByStuAndSub(stuId , subId)
				.orElseThrow(EntityNotFoundException::new);

	
			existing.setMark(mark);

		stuSubRepo.save(existing);
		return existing;
	}

	public StudentDto getStudentById(int id) {
		Student student = repository.findById(id).orElseThrow(null);
		return entityToDto(student);
	}

	public List<MarkDto[]> findmarkById(int studentId) {
		return stuSubRepo.findMarkById(studentId);
	}
}