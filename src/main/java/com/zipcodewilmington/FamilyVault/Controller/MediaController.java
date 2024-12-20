package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @GetMapping("/getMedia")
    public Media getMedia(@RequestParam String mediaId){
        return mediaService.getMedia(mediaId);
    }


    @PostMapping("/saveMedia")
    public Optional<Media> saveMedia(@RequestBody Media media){
        return mediaService.saveMedia(media);
    }


}
