package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Repository.PostTrackerRepository;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostTrackerImpl implements PostTrackerService {

    @Autowired
    PostTrackerRepository postTrackerRepository;

@Override
public PostTracker getPost(String postId){
    Optional<PostTracker> post =  postTrackerRepository.findById(postId);
    return post.orElse(null);

}

@Override
public PostTracker savePost(PostTracker postTracker){
    return postTrackerRepository.save(postTracker);

}



}
