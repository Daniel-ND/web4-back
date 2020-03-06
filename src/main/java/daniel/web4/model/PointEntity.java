package daniel.web4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "POINTS")
@Getter
@Setter

public class PointEntity {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "X")
    private double x;

    @Column(name = "Y")
    private double y;

    @Column(name = "R")
    private double r;

    @Column(name = "RES")
    private boolean res;

    @ManyToOne
    @JoinColumn(name="USER_ID", referencedColumnName="LOGIN")
    private UserEntity user;

}