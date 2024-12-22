package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.UserProfile;
import com.zipcodewilmington.FamilyVault.Repository.UserProfileRepository;
import com.zipcodewilmington.FamilyVault.Service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserProfileImpl implements UserProfileService {

   @Autowired
    UserProfileRepository userProfileRepository;

    @Override
    public UserProfile getProfile(String userId) {
        Optional<UserProfile> userProfile =  userProfileRepository.findById(userId);
        return userProfile.orElse(null);
    }

    @Override
    public Optional<UserProfile> saveProfile(UserProfile profile) {
        return Optional.of(userProfileRepository.save(profile));
    }
}
