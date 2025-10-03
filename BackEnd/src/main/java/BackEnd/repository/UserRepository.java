package BackEnd.repository;

import BackEnd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // This now correctly searches by the 'email' field, which exists in your User model.
    User findByEmail(String email);
}