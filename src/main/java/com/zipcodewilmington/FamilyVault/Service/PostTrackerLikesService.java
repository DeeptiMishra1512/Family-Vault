package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.PostTrackerComment;
import com.zipcodewilmington.FamilyVault.Entity.PostTrackerLikesCount;
import com.zipcodewilmington.FamilyVault.Repository.PostTrackerLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostTrackerLikesService {



    Integer getAllMediaLikesByMediaId(Integer mediaId);
    PostTrackerLikesCount saveMediaLikesCountByMedia(PostTrackerLikesCount postTrackerLikesCount);


}
