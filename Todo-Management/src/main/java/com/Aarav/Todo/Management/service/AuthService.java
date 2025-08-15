package com.Aarav.Todo.Management.service;

import com.Aarav.Todo.Management.dto.JwtAuthResponse;
import com.Aarav.Todo.Management.dto.LoginDto;
import com.Aarav.Todo.Management.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);
    JwtAuthResponse login(LoginDto loginDto);
}
