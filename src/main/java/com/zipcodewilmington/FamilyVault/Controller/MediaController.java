package com.zipcodewilmington.FamilyVault.Controller;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MediaController {

    @Autowired
    private MediaService mediaService;

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


}
