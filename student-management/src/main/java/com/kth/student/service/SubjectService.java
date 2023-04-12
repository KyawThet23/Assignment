package com.kth.student.service;

import com.kth.student.dao.SubjectDao;
import com.kth.student.ds.Subject;
import com.kth.student.payload.SubjectDto;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SubjectService {

    @Autowired
    private SubjectDao repository;
    @Autowired
    private ModelMapper mapper;


    public void createSubject(SubjectDto request) {
        Subject subject = dtoToEntity(request);
        repository.save(subject);
    }

    private Subject dtoToEntity(SubjectDto dto){
        Subject subject = mapper.map(dto,Subject.class);
        return subject;
    }

    private SubjectDto entityToDto(Subject subject){
        SubjectDto dto = mapper.map(subject, SubjectDto.class);
        return dto;
    }

    public List<SubjectDto> getAllSubject() {

       List<Subject> subjects =  repository.findAll();

       return subjects.stream()
               .map(subject -> entityToDto(subject))
               .collect(Collectors.toList());
    }

    public SubjectDto updateSubject(int id, SubjectDto dto) {

        Subject oldSubject = repository.findById(id)
                .orElseThrow(EntityNotFoundException::new);

        oldSubject.setName(dto.getName() == null ?
                oldSubject.getName() : dto.getName());

        oldSubject.setSemester(dto.getSemester() == null ?
                oldSubject.getSemester() : dto.getSemester());

        oldSubject.setYearLevel(dto.getYearLevel() == null ?
                oldSubject.getYearLevel() : dto.getYearLevel());

        SubjectDto returnDto = entityToDto(oldSubject);
        repository.save(oldSubject);
        return returnDto;
    }

    public void deleteSubject(int id) {
        repository.deleteById(id);
    }

    public List<SubjectDto> getAllByYear(String year) {

        Set<Subject> subjects = repository.findByYearLevel(year);

        return subjects.stream()
                .map(subject -> entityToDto(subject))
                .collect(Collectors.toList());
    }
}
