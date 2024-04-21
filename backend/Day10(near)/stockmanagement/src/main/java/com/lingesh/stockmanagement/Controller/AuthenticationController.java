package com.lingesh.stockmanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lingesh.stockmanagement.constant.Api;
import com.lingesh.stockmanagement.dto.request.AuthenticationRequest;
import com.lingesh.stockmanagement.dto.request.RegisterRequest;
import com.lingesh.stockmanagement.dto.Response.AuthenticationResponse;
import com.lingesh.stockmanagement.Model.User;
import com.lingesh.stockmanagement.Repository.UserRepo;
import com.lingesh.stockmanagement.Service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication")
@CrossOrigin("*")
public class AuthenticationController {

    private final UserService userservice;

    @Autowired
    public UserRepo ur;

    @Autowired
    public UserService usr;

    @PostMapping("/signup")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = userservice.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registeration completed")
        : ResponseEntity.badRequest().body("Username or email already exists!");
    }
    
    @PostMapping("/login")
    @Operation(summary = "User can login ", description = "Allows users to login by providing the registered details.")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(userservice.userAuthentication(request));
    }

    @GetMapping("/getuserdata")
    public List<User> getuser()
    {
        return ur.findAll();
    }
    @GetMapping("/getuserdata/{uid}")
    public User getuserbyid(@PathVariable int uid)
    {
        return usr.getusingid(uid);
    }

    @PutMapping("/edituser/{uid}")
    public String edit(@RequestBody User us,@PathVariable long uid)
    {
        us.setUid(uid);
        return usr.edituser(us);
    }
}
