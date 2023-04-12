package com.kth.student.dao;

import com.kth.student.ds.StudentSubject;

import java.util.List;
import java.util.Optional;

import com.kth.student.payload.MarkDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StuSubDao extends JpaRepository<StudentSubject,Long> {

	@Query("select s from StudentSubject s where s.student.id=:stuId and s.subject.id=:subId")
	Optional<StudentSubject> findByStuAndSub(@Param("stuId") Integer stuId,
									         @Param("subId") Integer subId);

	@Query("select new com.kth.student.payload.MarkDto(subject.name,stusub.mark)" +
			"from StudentSubject stusub join stusub.subject subject " +
			"where stusub.student.id = :studentId")
	List<MarkDto[]> findMarkById(int studentId);
}
