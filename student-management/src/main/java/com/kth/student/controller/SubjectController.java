package com.kth.student.controller;

import com.kth.student.payload.SubjectDto;
import com.kth.student.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subject")
public class SubjectController {

    @Autowired
    private SubjectService service;

    @PostMapping("/create")
    public String createSubject(@RequestBody SubjectDto request){
        service.createSubject(request);
        return "Create Successfully";
    }

    @GetMapping("/list")
    public List<SubjectDto> listAllSubject(){
        return service.getAllSubject();
    }

    @PutMapping("/update/{id}")
    public SubjectDto updateSubject(@PathVariable int id,
                                    @RequestBody SubjectDto dto){
        return service.updateSubject(id,dto);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteSubject(@PathVariable int id){
        service.deleteSubject(id);
        return "Delete Successfully";
    }

    @GetMapping("/year/{year}")
    public List<SubjectDto> getAllSubjectByYear(@PathVariable String year){
        return service.getAllByYear(year);
    }
}