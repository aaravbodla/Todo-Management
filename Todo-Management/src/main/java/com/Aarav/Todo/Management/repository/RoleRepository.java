package com.Aarav.Todo.Management.repository;

import com.Aarav.Todo.Management.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String Name);
}
