package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import com.zipcodewilmington.FamilyVault.Repository.VaultUserRepository;
import com.zipcodewilmington.FamilyVault.Service.VaultUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VaultUserImpl implements VaultUserService {

    @Autowired
    private VaultUserRepository vaultUserRepository;


    @Override
    public VaultUser getUser(String userId) {

        Optional<VaultUser> user =  vaultUserRepository.findById(userId);
        return user.orElse(null);
    }

    @Override
    public Optional<VaultUser> saveUser(VaultUser user) {
        return Optional.of(vaultUserRepository.save(user));
    }
}
