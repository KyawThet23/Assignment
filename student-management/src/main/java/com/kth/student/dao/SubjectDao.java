package com.kth.student.dao;

import com.kth.student.ds.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;

public interface SubjectDao extends JpaRepository<Subject,Integer> {
	
	@Query("Select s from Subject s where s.yearLevel Like %:year%")
    Set<Subject> findByYearLevel(@Param("year") String year);
}
