package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.PostTrackerComment;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface PostTrackerService {

    PostTrackerComment getPostTracker(Integer postId);

    /**Changed parameter as Media_Id to get Likes and Comments for each Media and not post  */
    List<PostTrackerComment> getAllPostTrackerByMediaId(Integer mediaId);
    PostTrackerComment savePostTracker(PostTrackerComment postTrackerComment);

}
