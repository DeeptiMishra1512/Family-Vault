package com.zipcodewilmington.FamilyVault;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FamilyVault {

    public static void main(String[] args) {
        System.out.println("Welcome To Family Vault!");
        SpringApplication.run(FamilyVault.class, args);

    }
}