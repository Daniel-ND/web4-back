package daniel.web4.controllers;

import daniel.web4.model.PointObj;
import daniel.web4.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PointController {

    @Autowired
    private PointService pointService;

    @CrossOrigin
    @RequestMapping(value = "/addPoint", method = RequestMethod.POST)
    public PointObj addPoint(@RequestBody PointObj point, @RequestHeader(value = "Authorization") String header) {
        System.out.println("Запрос на добавление точечки!");
        System.out.println(header);
        return pointService.addPoint(point, header);
    }


    @CrossOrigin
    @RequestMapping(value = "/getPoints", method = RequestMethod.POST)
    public List<PointObj> getPoints(@RequestHeader(value = "Authorization") String header) {
        System.out.println("Запрос на получение точечек!");
        return pointService.getPoints(header);
    }
}
