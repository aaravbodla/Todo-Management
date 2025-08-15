package com.Aarav.Todo.Management.repository;

import com.Aarav.Todo.Management.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
