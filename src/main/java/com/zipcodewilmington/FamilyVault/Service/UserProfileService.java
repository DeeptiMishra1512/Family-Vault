package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.UserProfile;
import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserProfileService {

    UserProfile getProfile(String User_Id);
    Optional<UserProfile> saveProfile(UserProfile profile);

}
