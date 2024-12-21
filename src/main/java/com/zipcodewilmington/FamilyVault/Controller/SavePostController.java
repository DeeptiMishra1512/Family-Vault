package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Entity.PostTracker;
import com.zipcodewilmington.FamilyVault.Repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class SavePostController {
    @Autowired
    private MediaRepository mediaRepository;

    @PostMapping
    public ResponseEntity<?> uploadPost(
            @RequestParam("description") String description,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "video", required = false) MultipartFile video) {

        Media media = new Media();
        PostTracker post = new PostTracker();

        media.setDescription(description);

        try {
            if (image != null && !image.isEmpty()) {
                String imagePath = "uploads/images/" + image.getOriginalFilename();
                image.transferTo(new File(imagePath));
                media.setFilePath(imagePath);
            }

            if (video != null && !video.isEmpty()) {
                String videoPath = "uploads/videos/" + video.getOriginalFilename();
                video.transferTo(new File(videoPath));
                media.setFilePath(videoPath);
            }

            mediaRepository.save(media);

            return ResponseEntity.ok("Post saved successfully");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to upload post");
        }
    }

}
