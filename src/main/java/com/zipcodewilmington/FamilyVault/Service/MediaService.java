package com.zipcodewilmington.FamilyVault.Service;

import com.zipcodewilmington.FamilyVault.Entity.Media;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface MediaService {
    Media getMedia(String mediaId);
    List<Media> findAllMedia(String userId);
    Optional<Media> saveMedia(Media media);

}
