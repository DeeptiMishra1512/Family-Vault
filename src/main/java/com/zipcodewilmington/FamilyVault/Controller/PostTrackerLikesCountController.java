package com.zipcodewilmington.FamilyVault.Controller;
import com.zipcodewilmington.FamilyVault.Entity.PostTrackerLikesCount;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerLikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class PostTrackerLikesCountController {

    @Autowired
    PostTrackerLikesService postTrackerLikesService;

    /** fetch and save all like count */

    @GetMapping("/getAllPostLikesByMediaId")
    public Integer getAllPostLikesByMediaId(@RequestParam Integer mediaId){
        return postTrackerLikesService.getAllMediaLikesByMediaId(mediaId);
    }

    @PostMapping("/savePostLikes")
    public PostTrackerLikesCount savePost(@RequestBody PostTrackerLikesCount postTrackerLikesCount){
        return postTrackerLikesService.saveMediaLikesCountByMedia(postTrackerLikesCount);
    }



}
