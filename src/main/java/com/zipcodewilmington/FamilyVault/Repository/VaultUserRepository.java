package com.zipcodewilmington.FamilyVault.Repository;

import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VaultUserRepository extends JpaRepository<VaultUser,String> {


}
