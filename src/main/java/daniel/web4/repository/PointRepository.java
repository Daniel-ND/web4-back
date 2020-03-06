package daniel.web4.repository;

import daniel.web4.model.PointEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepository extends JpaRepository<PointEntity, Long> {
    List<PointEntity> findByUserLogin(String login);
}
