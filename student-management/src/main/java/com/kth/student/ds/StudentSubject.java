package com.kth.student.ds;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "student_subject")
@Data
public class StudentSubject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @Column(name = "mark")
    private Integer mark = 0;

}