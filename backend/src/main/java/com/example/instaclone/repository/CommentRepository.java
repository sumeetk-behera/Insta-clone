package com.example.instaclone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.instaclone.enity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer>{

	List<Comment> findAllByPostId(String postId);
	

}
