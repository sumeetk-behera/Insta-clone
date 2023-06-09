package com.example.instaclone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.instaclone.enity.Status;
import com.example.instaclone.repository.StatusRepository;

@Service
public class StatusService {

	@Autowired
	StatusRepository statusRepo;

	@Autowired
	UserService userService;

	public Status submitDataIntoDB(Status status) {
		return statusRepo.save(status);
	}

	public List<Status> retrieveStatus() {

		List<Status> statusList = statusRepo.findAll();

		for (int i = 0; i < statusList.size(); i++) {
			Status statusItem = statusList.get(i);
			statusItem.setUserName(userService.displayUserMetaData(statusItem.getUserId()).getUserName());
		}

		return statusList;

	}
}
