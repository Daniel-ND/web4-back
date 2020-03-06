package daniel.web4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "USER_TABLE")
@Getter
@Setter
public class UserEntity implements Serializable {

    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String login;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<PointEntity> points;

    public UserEntity(String login, String password, ArrayList<Object> objects) {
    }

    public UserEntity() {

    }
}