package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import org.springframework.stereotype.Service;

@Service
public interface PostTrackerService {

    PostTracker getPost(String postId);
    PostTracker savePost(PostTracker postTracker);
}
