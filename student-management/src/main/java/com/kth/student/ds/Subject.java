package com.kth.student.ds;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String yearLevel;
	private String semester;

	@ManyToMany(mappedBy = "subjects")
	private Set<Student> students = new HashSet<>();
	
}
