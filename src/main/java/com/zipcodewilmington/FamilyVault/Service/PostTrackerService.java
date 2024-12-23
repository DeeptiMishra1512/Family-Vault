package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostTrackerService {

    PostTracker getPostTracker(Integer postId);

    /**Changed parameter as Media_Id to get Likes and Comments for each Media and not post  */
    List<PostTracker> getAllPostTrackerByMediaId(Integer mediaId);
    PostTracker savePostTracker(PostTracker postTracker);
}
