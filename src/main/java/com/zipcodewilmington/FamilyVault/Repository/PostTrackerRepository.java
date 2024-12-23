package com.zipcodewilmington.FamilyVault.Repository;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Entity.VaultUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostTrackerRepository extends JpaRepository<PostTracker,Integer> {

    @Query(
            value = "SELECT * FROM PostTracker WHERE Media_Id = :mediaId order by post_id desc",
            nativeQuery = true)
    List<PostTracker> findAllPostTrackerByMediaId(@Param("mediaId") Integer mediaId);

}
