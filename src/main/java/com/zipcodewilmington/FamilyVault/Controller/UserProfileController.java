package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.UserProfile;
import com.zipcodewilmington.FamilyVault.Service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping("/GetUserProfile")
    public UserProfile getUserProfileByUserId(@RequestParam String userId){
           return userProfileService.getProfile(userId);
    }

    @PostMapping("/saveUserProfile")
    public Optional<UserProfile> saveUserProfile(@RequestBody UserProfile userProfile){
        return userProfileService.saveProfile(userProfile);
    }


}
