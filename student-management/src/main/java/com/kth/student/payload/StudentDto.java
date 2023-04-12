package com.kth.student.payload;

import java.util.Date;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

@Data
public class  StudentDto{
	Integer id;
	String name;
	String email;
	String phone;
	@DateTimeFormat(pattern = "MM-dd-yyyy")
	Date dob;
	String gender;
	String year;
}
