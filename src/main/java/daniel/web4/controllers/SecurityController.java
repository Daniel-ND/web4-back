package daniel.web4.controllers;

import daniel.web4.model.AuthResponse;
import daniel.web4.model.UserEntity;
import daniel.web4.model.UserObj;
import daniel.web4.repository.UserRepository;
import daniel.web4.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class SecurityController {


    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @CrossOrigin
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity createAuthenticationToken(@RequestBody UserObj user) throws Exception {
        System.out.println("Пришел запрос на авторизацию");
        System.out.println(user.getLogin());
        System.out.println(user.getPassword());
        String token = "";
        try {
            token = securityService.login(user);
            System.out.println(token);
        }
        catch (Exception e) {
            System.out.println("Incorrect username or password");
            //throw new Exception("incorrect username or password");
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(new AuthResponse(token));
    }


    @CrossOrigin
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody UserObj user){
        System.out.println("Пришел запрос на регистрацию");
        System.out.println("Check_login:" + userRepository.existsByLogin(user.getLogin()));
        //Map<String, String> map = new HashMap<>();
        if (!userRepository.existsByLogin(user.getLogin())){
            UserEntity new_user = new UserEntity();
            new_user.setLogin(user.getLogin());
            new_user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(new_user);
            //map.put("reg", "true");
            //return map;
            return new ResponseEntity(HttpStatus.ACCEPTED);
        }else{
            return new ResponseEntity(HttpStatus.CONFLICT);
            //throw new Exception("Login exists");
        }
    }

}
