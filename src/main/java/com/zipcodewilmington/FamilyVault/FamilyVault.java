package com.zipcodewilmington.FamilyVault;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class FamilyVault {

    public static void main(String[] args) {
        SpringApplication.run(FamilyVault.class, args);
    }
}