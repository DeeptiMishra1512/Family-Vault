package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Repository.PostTrackerRepository;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostTrackerImpl implements PostTrackerService {

    @Autowired
    PostTrackerRepository postTrackerRepository;

@Override
public PostTracker getPostTracker(Integer postId){
    Optional<PostTracker> post =  postTrackerRepository.findById(postId);
    return post.orElse(null);

}

    @Override
    public List<PostTracker> getAllPostTrackerByMediaId(Integer mediaId) {

    return postTrackerRepository.findAllPostTrackerByMediaId(mediaId);
    }

    @Override
public PostTracker savePostTracker(PostTracker postTracker){
    return postTrackerRepository.save(postTracker);

}



}
