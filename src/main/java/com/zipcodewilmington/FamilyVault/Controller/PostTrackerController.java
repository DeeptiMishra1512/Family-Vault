package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostTrackerController {
    @Autowired
    private PostTrackerService postTrackerService;

    @GetMapping("/getPost")
    public Media getMedia(@RequestParam String postId){
        return postTrackerService.getPost(postId);
    }


    @PostMapping("/savePost")
    public PostTracker savePost(@RequestBody PostTracker postTracker){
        return postTrackerService.savePost(postTracker);
    }




}
