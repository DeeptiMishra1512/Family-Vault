package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


@RestController
public class SavePostController {
    @Autowired
    private MediaRepository mediaRepository;



    @PostMapping("/UploadPost")
    public ResponseEntity<?> uploadPost(
            @RequestParam("description") String description,
            @RequestParam("userId") String userId,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "video", required = false) MultipartFile video) {

        Media media = new Media();
        PostTracker post = new PostTracker();

        media.setDescription(description);
        // Get the current date
        LocalDate currentDate = LocalDate.now();

        // Format the date
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formattedDate = currentDate.format(formatter);

        try {
            if (image != null && !image.isEmpty()) {
                String imagePath = "/Users/dmishra/DeeptiProjects/Family-Vault/src/main/resources/webApplication/Image/" + image.getOriginalFilename();
                String imagePathDB = "../Image/" + image.getOriginalFilename();
                image.transferTo(new File(imagePath));
                media.setFilePath(imagePathDB);
                media.setUserId(userId);
                media.setType("photo");
                media.setUploadDate(Date.valueOf(formattedDate));
            }

            if (video != null && !video.isEmpty()) {
                String videoPath = "/Users/dmishra/DeeptiProjects/Family-Vault/src/main/resources/webApplication/Videos/" + video.getOriginalFilename();
                String imagePathDB = "../Videos/" + image.getOriginalFilename();
                video.transferTo(new File(videoPath));
                media.setFilePath(videoPath);
                media.setUserId(userId);
                media.setType("Video");
                media.setUploadDate(Date.valueOf(formattedDate));
            }


            mediaRepository.save(media);

            return ResponseEntity.ok("Post saved successfully");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to upload post");
        }
    }

}
