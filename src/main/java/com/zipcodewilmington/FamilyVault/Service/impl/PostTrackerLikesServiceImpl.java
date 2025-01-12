package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.PostTrackerComment;
import com.zipcodewilmington.FamilyVault.Entity.PostTrackerLikesCount;
import com.zipcodewilmington.FamilyVault.Repository.PostTrackerLikeRepository;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerLikesService;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostTrackerLikesServiceImpl implements PostTrackerLikesService {

    @Autowired
    PostTrackerLikeRepository posttrackerlikesrepo;


    @Override
    public Integer getAllMediaLikesByMediaId(Integer mediaId) {
        return posttrackerlikesrepo.findAllPostLikesCountByMediaId(mediaId);
    }

    @Override
    public PostTrackerLikesCount saveMediaLikesCountByMedia(PostTrackerLikesCount postTrackerLikesCount) {
        return posttrackerlikesrepo.save(postTrackerLikesCount);
    }
}
