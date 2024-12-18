package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface VaultUserService {
        VaultUser getUser(String userId);
        Optional<VaultUser> saveUser(VaultUser user);
    }


