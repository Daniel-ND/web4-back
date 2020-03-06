package daniel.web4.service;

import daniel.web4.model.PointEntity;
import daniel.web4.model.PointObj;
import daniel.web4.model.UserEntity;
import daniel.web4.repository.PointRepository;
import daniel.web4.repository.UserRepository;
import daniel.web4.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PointService {
    @Autowired
    PointRepository pointRepository;

    public List<PointEntity> getAllPoints() {
        return this.pointRepository.findAll();
    }

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    UserRepository userRepository;

    public PointObj addPoint(PointObj point, String header) {
        String token = jwtUtil.getTokenFromHeader(header);
        System.out.println(token);
        String login = jwtUtil.extractUsername(token);
        System.out.println(login);
        UserEntity user = userRepository.findByLogin(login);
        System.out.println("ya TUT");
        PointEntity new_point = new PointEntity();
        System.out.println("ya TUT 2");
        new_point.setX(point.getX());
        System.out.println("x : " + point.getX());
        new_point.setY(point.getY());
        System.out.println("y : " + point.getY());
        new_point.setR(point.getR());
        System.out.println("r : " + point.getR());
        new_point.setUser(user);
        System.out.println("ya TUT 3");
        new_point.setRes(getResult(point));
        System.out.println("ya TUT 4");
        pointRepository.save(new_point);
        System.out.println("ya TUT 5");
        point.setRes(getResult(point));
        return point;

    }

    public List<PointObj> getPoints(String header) {
        //TODO
        System.out.println("WTF 1");
        String token = jwtUtil.getTokenFromHeader(header);
        System.out.println("WTF 2");
        String login = jwtUtil.extractUsername(token);
        System.out.println("WTF 3");
        List<PointEntity> points = pointRepository.findByUserLogin(login);
        System.out.println("WTF 4");
        List<PointObj> points_for_client = new ArrayList<>();

        for (PointEntity point : points) {
            PointObj p = new PointObj();
            p.setX(point.getX());
            p.setY(point.getY());
            p.setR(point.getR());
            p.setRes(point.isRes());
            points_for_client.add(p);
        }
        System.out.println(points_for_client.size());

        return points_for_client;
    }

    private boolean getResult (PointObj point){
        double x = point.getX();
        double y = point.getY();
        double r = point.getR();
        return ((Math.pow(y, 2) <= Math.pow(r/2, 2) - Math.pow(x, 2)) && (y >= 0) && (x <= 0)) ||
                ((y <= r)  && (x <= r) && (y >= 0) && (x >= 0)) ||
                ((-2 * y <= x + r) && (x <= 0) && (y <= 0));
    }

}
