package com.example.socialmedia.SocialService;

import com.example.socialmedia.SocialEntity.CommentEntity;
import com.example.socialmedia.SocialRepo.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {


    @Autowired
    private CommentRepo commentRepository;

    public CommentEntity addComment(CommentEntity comment) {
        return commentRepository.save(comment);
    }

    public List<CommentEntity> getCommentsByPostId(Long postId) {
        return commentRepository.findByPostId(postId);
    }
}
