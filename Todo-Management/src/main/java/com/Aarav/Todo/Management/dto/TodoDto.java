package com.Aarav.Todo.Management.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Data Transfer Object widely used Design pattern for transferring data
// advantage of having a DTO, we dont need to share the Jpa entity, it may contain sensitive info like passwords etc
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {
    private Long id;
    private String title;
    private String description;
    private boolean completed;

}
