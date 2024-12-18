package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface MediaService {
    Media getMedia(String mediaId);
    Optional<Media> saveMedia(Media media);
}
