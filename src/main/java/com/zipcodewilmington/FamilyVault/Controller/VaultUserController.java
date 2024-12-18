package com.zipcodewilmington.FamilyVault.Controller;
import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import com.zipcodewilmington.FamilyVault.Service.VaultUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class VaultUserController {
    @Autowired
    private VaultUserService vaultUserService;

    @GetMapping("/getUser")
    public VaultUser getUser(@RequestParam String userId){
        return vaultUserService.getUser(userId);
    }


    @PostMapping("/saveUser")
    public Optional<VaultUser> saveUser(@RequestBody VaultUser user){
        return vaultUserService.saveUser(user);
    }


}
