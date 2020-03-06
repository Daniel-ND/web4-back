package daniel.web4.repository;

import daniel.web4.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    boolean existsByLogin(String login);
    UserEntity findByLogin (String login);
}