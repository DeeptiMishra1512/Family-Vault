package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.PostTrackerComment;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostTrackerController {
    @Autowired
    private PostTrackerService postTrackerService;

    @GetMapping("/getPostTracker")
    public PostTrackerComment getPost(@RequestParam Integer postId){
        return postTrackerService.getPostTracker(postId);

    }

    @GetMapping("/getAllPostTrackerByMediaId")
    public List<PostTrackerComment> getAllPostTrackerByMediaId(@RequestParam Integer mediaId){
        return postTrackerService.getAllPostTrackerByMediaId(mediaId);

    }

    @PostMapping("/savePostTracker")
    public PostTrackerComment savePost(@RequestBody PostTrackerComment postTrackerComment){
        return postTrackerService.savePostTracker(postTrackerComment);
    }




}
