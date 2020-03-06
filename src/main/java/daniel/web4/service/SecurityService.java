package daniel.web4.service;

import daniel.web4.model.UserEntity;
import daniel.web4.model.UserObj;
import daniel.web4.repository.UserRepository;
import daniel.web4.util.JwtUtil;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class SecurityService implements UserDetailsService{

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private UserRepository userRepository;

    //TODO
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByLogin(s);
        System.out.println("loadUserByUsername");
        System.out.println(user.getLogin());
        System.out.println(user.getPassword());
        return new User(user.getLogin(), user.getPassword(), new ArrayList<>());
    }

    //TODO
    public String login(UserObj user) throws Exception {
        System.out.println("1");
        System.out.println(user.getLogin());
        System.out.println(user.getPassword());
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getLogin(), user.getPassword()));
        }catch (Exception e){
            throw new Exception("Exception in security service!");
        }

        System.out.println("2");
        UserDetails userDetails = loadUserByUsername(user.getLogin());
        System.out.println("3");
        String token = jwtTokenUtil.generateToken(userDetails.getUsername());
        System.out.println(token);
        return token;
    }

}