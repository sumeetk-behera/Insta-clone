package com.example.instaclone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.instaclone.enity.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

}
