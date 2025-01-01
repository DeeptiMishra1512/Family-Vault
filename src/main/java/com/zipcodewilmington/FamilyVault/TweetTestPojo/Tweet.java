package com.zipcodewilmington.FamilyVault.TweetTestPojo;

import java.util.List;

public class Tweet {

    String userId;
    String movieId;
    List<String> tweets;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public List<String> getTweets() {
        return tweets;
    }

    public void setTweets(List<String> tweets) {
        this.tweets = tweets;
    }

    @Override
    public String toString() {
        return "Tweet{" +
                "userId='" + userId + '\'' +
                ", movieId='" + movieId + '\'' +
                ", tweets=" + tweets +
                '}';
    }
}
