package com.example.socialmedia.SocialService;

import com.example.socialmedia.SocialEntity.UserEntity;
import com.example.socialmedia.SocialRepo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public String register(UserEntity user )
    {
        UserEntity exisiting=repo.findByEmail(user.getEmail());
        if(exisiting==null)
        {
            repo.save(user);
            return "Register Successfully";
        }
        return "User Already Exisit";
    }
    public UserEntity login(UserEntity user)
    {
        UserEntity exisiting=repo.findByEmail(user.getEmail());
        if(exisiting!=null && exisiting.getPassword().equals(user.getPassword()))
        {
            return exisiting;
        }
        return null;
    }
}
