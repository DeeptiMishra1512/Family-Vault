package com.zipcodewilmington.FamilyVault.Repository;

import com.zipcodewilmington.FamilyVault.Entity.UserProfile;
import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile,String> {


}
