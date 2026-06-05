package com.example.socialmedia.SocialService;

import com.example.socialmedia.SocialEntity.PostEntity;
import com.example.socialmedia.SocialRepo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    public PostRepo repo;

    public PostEntity addPost(PostEntity post)
    {
        return repo.save(post);
    }

    public List<PostEntity> getPost(int userId)
    {
        return repo.findByUserId(userId);
    }
    public List<PostEntity> getAllPosts()
    {
        return repo.findAll();
    }

    public PostEntity likePost(Long id) {
        PostEntity post = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        post.setLike(post.getLike()+1);

        return repo.save(post);
    }

    public PostEntity editPost(Long id, PostEntity updatedPost)
    {
        PostEntity post = repo.findById(id).orElseThrow();

        post.setTitle(updatedPost.getTitle());
        post.setDescription(updatedPost.getDescription());

        return repo.save(post);
    }

    public void deletePost(Long id)
    {
        repo.deleteById(id);
    }
}
