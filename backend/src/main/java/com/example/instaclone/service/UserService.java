package com.example.instaclone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.instaclone.enity.User;
import com.example.instaclone.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
	public User submitMetaDataOfUser(User user) {
		return userRepo.save(user);
	}
	
	public User displayUserMetaData(String userId) {
		return userRepo.findByUserId(userId);
	}

}
