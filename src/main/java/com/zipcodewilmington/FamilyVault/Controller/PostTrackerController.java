package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Service.PostTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostTrackerController {
    @Autowired
    private PostTrackerService postTrackerService;

    @GetMapping("/getPostTracker")
    public PostTracker getPost(@RequestParam Integer postId){
        return postTrackerService.getPostTracker(postId);

    }

    @GetMapping("/getAllPostTrackerByMediaId")
    public List<PostTracker> getAllPostTrackerByMediaId(@RequestParam Integer mediaId){
        return postTrackerService.getAllPostTrackerByMediaId(mediaId);

    }

    @PostMapping("/savePostTracker")
    public PostTracker savePost(@RequestBody PostTracker postTracker){
        return postTrackerService.savePostTracker(postTracker);
    }




}
