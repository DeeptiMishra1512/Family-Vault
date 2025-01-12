package com.zipcodewilmington.FamilyVault.TweetTestPojo;

import java.util.List;

public class Tweet {

    String userId;
    String tweet;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTweet() {
        return tweet;
    }

    public void setTweet(String tweets) {
        this.tweet = tweets;
    }

    @Override
    public String toString() {
        return "Tweet{" +
                "userId='" + userId + '\'' +
                ", tweets='" + tweet + '\'' +
                '}';
    }
}
