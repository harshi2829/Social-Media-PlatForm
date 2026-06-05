package com.example.socialmedia.SocialRepo;

import com.example.socialmedia.SocialEntity.ProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepo extends JpaRepository<ProfileEntity,Long> {

    ProfileEntity findByUserId(int userId);

}
