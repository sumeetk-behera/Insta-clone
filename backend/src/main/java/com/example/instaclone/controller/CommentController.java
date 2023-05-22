package com.example.instaclone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instaclone.enity.Comment;
import com.example.instaclone.service.CommentService;

@RestController
@RequestMapping("/comments")
public class CommentController {
	
	@Autowired
	CommentService commentService;
	
	@PostMapping("")
	private Comment submitComment(@RequestBody Comment comment) {
		return commentService.submitCommentToDB(comment);
	}
	
	@GetMapping("/{postId}")
	private List<Comment> getCommentsForPost(@PathVariable("postId") String postId){
		return commentService.getAllCommentsForDB(postId);
	}

}
