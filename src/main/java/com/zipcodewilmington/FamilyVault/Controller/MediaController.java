package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Service.MediaService;
import com.zipcodewilmington.FamilyVault.Service.impl.S3MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;



@RestController
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @Autowired
    private S3MediaService S3StreamingService;  //S3 Service class

    @GetMapping("/getMedia")
    public Media getMedia(@RequestParam Integer mediaId){
        return mediaService.getMedia(mediaId);
    }

    @GetMapping("/getAllMediaByUserId")
    public List<Media> getAllMedia(@RequestParam String userId){

        return mediaService.findAllMedia(userId);
    }

    @PostMapping("/saveMedia")
    public Optional<Media> saveMedia(@RequestBody Media media){
        return mediaService.saveMedia(media);
    }


//Added End Point to access S3 bucket and display media
  @GetMapping("/S3streamMedia")
     public ResponseEntity<byte[]> streamMedia(@RequestParam String key) {
        return S3StreamingService.getMediaFile(key)
            .map(objectBytes -> {
                String mimeType = detectMimeTypeFromKey(key);
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + key + "\"")
                        .contentType(MediaType.parseMediaType(mimeType))
                        .body(objectBytes.asByteArray());
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
     }

    private String detectMimeTypeFromKey(String key) {
        try {
            String mimeType = Files.probeContentType(Paths.get(key));
            return (mimeType != null) ? mimeType : MediaType.APPLICATION_OCTET_STREAM_VALUE;
        } catch (Exception e) {
            return MediaType.APPLICATION_OCTET_STREAM_VALUE; // fallback for unknown types
        }
    }


    //Save media file (upload to S3 + save metadata in DB)
    @PostMapping("/S3saveMedia")
    public ResponseEntity<Media> saveMedia(
            @RequestParam("file") MultipartFile file,
            @RequestParam("userId") String userId,
            @RequestParam("description") String description
    ) {
        try {
            // Step 1: Prepare file + S3 key
            String originalFilename = Objects.requireNonNull(file.getOriginalFilename());
            String s3Key = "Images/" + originalFilename;

            File tempFile = Files.createTempFile("upload-", originalFilename).toFile();
            file.transferTo(tempFile);

            // Step 2: Upload to S3
            boolean uploaded = S3StreamingService.uploadMediaFile(tempFile, s3Key);
            tempFile.delete(); // cleanup

            if (!uploaded) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }

            // Step 3: Save metadata to DB
            String mimeType = detectMimeTypeFromKey(s3Key);
            Media media = new Media();
            media.setUserId(userId);
            media.setFilePath(s3Key);
            media.setUploadDate(new java.sql.Date(System.currentTimeMillis()));
            media.setType(mimeType);
            media.setDescription(description);

            Media saved = mediaService.saveMedia(media).orElseThrow();
            return new ResponseEntity<>(saved, HttpStatus.CREATED);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
