package com.lingesh.stockmanagement.Service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.lingesh.stockmanagement.Model.User;
import com.lingesh.stockmanagement.Model.enumerate.Role;
import com.lingesh.stockmanagement.Repository.UserRepo;
import com.lingesh.stockmanagement.dto.Response.AuthenticationResponse;
import com.lingesh.stockmanagement.dto.request.AuthenticationRequest;
import com.lingesh.stockmanagement.dto.request.RegisterRequest;
import com.lingesh.stockmanagement.util.JwtUtil;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByUsername(request.getUsername());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .mobilenum(request.getMobilenum())
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }
    
    public String edituser(User us)
    {
        userRepository.save(us);
        return "updated successfully";
    }

    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .username(user.getUsername())
                .uid(user.getUid())
                .role(user.getRole())
                .email(user.getEmail())
                .mobilenum(user.getMobilenum())
                .password(user.getPassword())
                .isEnabled(user.getIsEnabled())
                .build();
    }
}
