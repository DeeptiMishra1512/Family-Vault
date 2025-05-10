package com.zipcodewilmington.FamilyVault.Model;

import com.zipcodewilmington.FamilyVault.Entity.Media;

import java.util.List;

public class UserPost {

    //Make list of post of Media type
    //Use user ID to fetch the list of posts.

    private String userId;
    private List<Media> mediaList;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<Media> getMediaList() {
        return mediaList;
    }

    public void setMediaList(List<Media> mediaList) {
        this.mediaList = mediaList;
    }
}
