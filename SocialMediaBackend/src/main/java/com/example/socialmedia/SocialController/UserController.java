package com.example.socialmedia.SocialController;

import com.example.socialmedia.SocialEntity.UserEntity;
import com.example.socialmedia.SocialService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/userRegister")
    public  String  register(@RequestBody UserEntity user)
    {
        return service.register(user);
    }

    @PostMapping("/userLogin")
    public UserEntity login(@RequestBody UserEntity user)
    {
        return service.login(user);
    }
}
