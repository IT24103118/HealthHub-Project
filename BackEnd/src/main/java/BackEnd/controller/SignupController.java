package BackEnd.controller;

import BackEnd.exception.UserNotFoundException;
import BackEnd.model.User;
import BackEnd.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
public class SignupController {

    @Autowired
    private UserRepository userRepository;

    // Corrected endpoint to match the frontend call
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    // Corrected login logic
    @PostMapping("/login")
    public User login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");
        
        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user; // Success
        } else {
            throw new UserNotFoundException(0L);
        }
    }
    
    // Helper function to see all users
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
}