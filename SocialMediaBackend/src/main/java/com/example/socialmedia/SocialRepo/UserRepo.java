package com.example.socialmedia.SocialRepo;

import com.example.socialmedia.SocialEntity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity,Long> {

    UserEntity findByEmail(String email);
}
