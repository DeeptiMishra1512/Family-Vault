package com.zipcodewilmington.FamilyVault.Repository;

import com.zipcodewilmington.FamilyVault.Entity.PostTrackerComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostTrackerRepository extends JpaRepository<PostTrackerComment,Integer> {

    @Query(
            value = "SELECT * FROM PostTracker_comment WHERE Media_Id = :mediaId order by post_id desc",
            nativeQuery = true)
    List<PostTrackerComment> findAllPostTrackerByMediaId(@Param("mediaId") Integer mediaId);

}
