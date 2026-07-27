package com.example.socialmedia.SocialEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CommentEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        public Long Id;

        private Long postId;
        private int userId;
        private String username;
        private String content;

        public Long getId() { return Id; }
        public void setId(Long id) { Id = id; }

        public Long getPostId() { return postId; }
        public void setPostId(Long postId) { this.postId = postId; }

        public int getUserId() { return userId; }
        public void setUserId(int userId) { this.userId = userId; }

        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }

        public String getContent() { return content; }
        public void setContent(String content) { this.content = content; }
    }

