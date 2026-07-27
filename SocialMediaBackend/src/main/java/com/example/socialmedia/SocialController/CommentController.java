package com.example.socialmedia.SocialController;

import com.example.socialmedia.SocialEntity.CommentEntity;
import com.example.socialmedia.SocialService.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "*")
public class CommentController {



        @Autowired
        private CommentService commentService;

        @PostMapping("/add")
        public CommentEntity addComment(@RequestBody CommentEntity comment) {
            return commentService.addComment(comment);
        }

        @GetMapping("/{postId}")
        public List<CommentEntity> getComments(@PathVariable Long postId) {
            return commentService.getCommentsByPostId(postId);
        }
}
