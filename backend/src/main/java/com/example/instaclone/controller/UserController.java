package com.example.instaclone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instaclone.enity.User;
import com.example.instaclone.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("")
	public User submitUser(@RequestBody User user) {
		return userService.submitMetaDataOfUser(user);

	}

	@GetMapping("/{userId}")
	public User getUserDetails(@PathVariable String userId) {
		return userService.displayUserMetaData(userId);

	}

}
