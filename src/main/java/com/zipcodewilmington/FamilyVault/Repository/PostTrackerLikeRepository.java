package com.zipcodewilmington.FamilyVault.Repository;
import com.zipcodewilmington.FamilyVault.Entity.PostTrackerLikesCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PostTrackerLikeRepository extends JpaRepository<PostTrackerLikesCount, Integer> {

    @Query(
            value = "SELECT count(*) FROM posttracker_likes WHERE Media_Id = :mediaId",
            nativeQuery = true)


    Integer findAllPostLikesCountByMediaId(@Param("mediaId") Integer mediaId);

}
