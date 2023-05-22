package com.example.instaclone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instaclone.enity.Post;
import com.example.instaclone.service.PostService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	
	@PostMapping("")
	private Post submitUserPost(@RequestBody Post post) {
		return postService.submitPostToDataBase(post);
	}
	
	@GetMapping("")
	private List<Post> getAllPost(){
		return postService.retrivePostFromDB();
	}

}
