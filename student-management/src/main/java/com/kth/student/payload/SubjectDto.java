package com.kth.student.payload;

import lombok.Data;

@Data
public class SubjectDto {

    private Integer id;
    private String name;
    private String yearLevel;
    private String semester;
}
