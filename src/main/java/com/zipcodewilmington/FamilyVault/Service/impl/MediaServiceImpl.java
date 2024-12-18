package com.zipcodewilmington.FamilyVault.Service.impl;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import com.zipcodewilmington.FamilyVault.Repository.MediaRepository;
import com.zipcodewilmington.FamilyVault.Service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MediaServiceImpl implements MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    @Override
    public Media getMedia(String mediaId){
        Optional<Media> media =  mediaRepository.findById(mediaId);
        return media.orElse(null);
    }

    @Override
    public Optional<Media> saveMedia(Media media){
        Optional<Media> mediaSaved = Optional.of(mediaRepository.save(media));
        return mediaSaved;
    }

}
