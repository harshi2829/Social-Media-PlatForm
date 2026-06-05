package com.example.socialmedia.SocialService;

import com.example.socialmedia.SocialEntity.ProfileEntity;
import com.example.socialmedia.SocialRepo.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepo repo;

    public  ProfileEntity addProfile(ProfileEntity pro)
    {
        return repo.save(pro);
    }
    public ProfileEntity getProfile(int userId)
    {
        return repo.findByUserId(userId);
    }
}
