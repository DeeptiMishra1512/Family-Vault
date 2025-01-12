package com.zipcodewilmington.FamilyVault.TweetTestPojo;

import java.util.List;

public class TweetResponse {

    String movieId;
    List<Tweet> tweets;

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public List<Tweet> getTweets() {
        return tweets;
    }

    public void setTweets(List<Tweet> tweets) {
        this.tweets = tweets;
    }

    @Override
    public String toString() {
        return "TweetResponse{" +
                "movieId='" + movieId + '\'' +
                ", tweets=" + tweets +
                '}';
    }
}
