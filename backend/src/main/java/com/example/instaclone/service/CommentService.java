package com.example.instaclone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.instaclone.enity.Comment;
import com.example.instaclone.repository.CommentRepository;

@Service
public class CommentService {
	
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UserService userService;
	
	public Comment submitCommentToDB(Comment comment) {
		return commentRepository.save(comment);
	}
	
	public List<Comment> getAllCommentsForDB(String postId){
		
		List<Comment> commentList=commentRepository.findAllByPostId(postId);
		
		for(int i=0;i<commentList.size();i++) {
			Comment commentItem=commentList.get(i);
			commentItem.setUserName(userService.displayUserMetaData(commentItem.getUserId()).getUserName());
		}
		
		return commentList;
		
	}

}
