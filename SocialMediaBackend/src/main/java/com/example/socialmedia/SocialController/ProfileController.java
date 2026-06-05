package com.example.socialmedia.SocialController;

import com.example.socialmedia.SocialEntity.ProfileEntity;
import com.example.socialmedia.SocialService.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProfileController {

    @Autowired
    public ProfileService service;

    @PostMapping("/addProfile")
    public ProfileEntity addProfile(@RequestBody ProfileEntity pro)
    {
        return service.addProfile(pro);
    }

    @GetMapping("/getProfile/{userId}")
    public ProfileEntity getProfile(@PathVariable int userId)
    {
        return service.getProfile(userId);
    }
}
