package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.PostTrackerComment;
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
public PostTrackerComment getPostTracker(Integer postId){
    Optional<PostTrackerComment> post =  postTrackerRepository.findById(postId);
    return post.orElse(null);
}

    @Override
    public List<PostTrackerComment> getAllPostTrackerByMediaId(Integer mediaId) {

    return postTrackerRepository.findAllPostTrackerByMediaId(mediaId);
    }

    @Override
public PostTrackerComment savePostTracker(PostTrackerComment postTrackerComment){
    return postTrackerRepository.save(postTrackerComment);

}



}
