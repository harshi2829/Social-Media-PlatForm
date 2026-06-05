package com.example.socialmedia.SocialRepo;

import com.example.socialmedia.SocialEntity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepo extends JpaRepository<PostEntity,Long> {

    List<PostEntity> findByUserId(int userId);
}
