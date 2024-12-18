package com.zipcodewilmington.FamilyVault.Repository;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository extends JpaRepository<Media, String> {

}
