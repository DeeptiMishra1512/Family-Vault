package com.zipcodewilmington.FamilyVault.Repository;
import com.zipcodewilmington.FamilyVault.Entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MediaRepository extends JpaRepository<Media, Integer> {

    @Query(
            value = "SELECT * FROM MEDIA WHERE User_Id = :userId order by Media_Id desc",
            nativeQuery = true)
            List<Media> findAllMedia(@Param("userId") String userId);


}
