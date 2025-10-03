package BackEnd.repository;

import BackEnd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // This correctly tells the database how to find a user by their email
    User findByEmail(String email);
}