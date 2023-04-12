package com.kth.student.payload;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MarkDto {

    private String name;
    private Integer mark;
    private int subId;
    private String semester;
}
