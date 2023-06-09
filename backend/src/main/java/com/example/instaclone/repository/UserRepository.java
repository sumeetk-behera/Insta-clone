package com.example.instaclone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.instaclone.enity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserId(String userId);

}
