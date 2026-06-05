package com.example.socialmedia.SocialController;

import com.example.socialmedia.SocialEntity.PostEntity;
import com.example.socialmedia.SocialService.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

    @Autowired
    public PostService service;

    @PostMapping("/addPost")
    public PostEntity addPost(@RequestBody PostEntity post)
    {
        return service.addPost(post);
    }

    @GetMapping("/getPost/{userId}")
    public List<PostEntity> getPost(@PathVariable int userId) {
        return service.getPost(userId);
    }
    @GetMapping("/allPosts")
    public List<PostEntity> getAllPosts()
    {
        return service.getAllPosts();
    }
    @PutMapping("/likePost/{id}")
    public PostEntity likePost(@PathVariable Long id) {
        return service.likePost(id);
    }

    @PutMapping("/editPost/{id}")
    public PostEntity editPost(
            @PathVariable Long id,
            @RequestBody PostEntity post)
    {
        return service.editPost(id, post);
    }

    @DeleteMapping("/deletePost/{id}")
    public String deletePost(@PathVariable Long id)
    {
        service.deletePost(id);
        return "Post Deleted Successfully";
    }


}
