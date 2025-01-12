package com.zipcodewilmington.FamilyVault.TweetController;


import com.zipcodewilmington.FamilyVault.TweetTestPojo.Tweet;
import com.zipcodewilmington.FamilyVault.TweetTestPojo.TweetResponse;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TweetController {

    @GetMapping("/getTweet")
    public TweetResponse getTweet(@RequestParam(required = false) String movieId){
       // List<Tweet> dummyTweets = new ArrayList<>();
        System.out.println("movieId: " + movieId);
        TweetResponse tweetResponse;


        if (movieId.isEmpty()) {
            tweetResponse = new TweetResponse();
            tweetResponse.setTweets(fetchAllTweets());
        } else {
            tweetResponse = new TweetResponse();
            tweetResponse.setMovieId(movieId);
            tweetResponse.setTweets(fetchTweetsByMovieId());
        }

        return tweetResponse;

    }


    private List<Tweet> fetchTweetsByMovieId(){
        List<Tweet> tweetList = new ArrayList<>();
        Tweet tweet = new Tweet();
        tweet.setUserId("Deepti");
        tweet.setTweet("Hello , I am watching Mufasa!!");
        tweetList.add(tweet);
        Tweet tweet1 = new Tweet();
        tweet1.setUserId("Kay");
        tweet1.setTweet("Hello , this is Kay!! I am watching Mufasa.");
        tweetList.add(tweet1);

        Tweet tweet2 = new Tweet();
        tweet2.setUserId("Aarav");
        tweet2.setTweet("Hello , this is Aarav!! I would love to watch Mufasa.");
        tweetList.add(tweet2);

        return tweetList;
    }



    private List<Tweet> fetchAllTweets(){
        List<Tweet> allTweets = new ArrayList<>();

        Tweet tweet = new Tweet();
        tweet.setUserId("Dimpy");
        tweet.setTweet("Today is a beautiful day #loveeveryday");
        allTweets.add(tweet);
        Tweet tweet1 = new Tweet();
        tweet1.setUserId("Chipmunk");
        tweet1.setTweet("I love eating peanuts  @Squirrel!!");
        allTweets.add(tweet1);

        return allTweets;
    }

    @PostMapping("/saveTweet")
    public Tweet saveTweet(@RequestBody Tweet tweet, @RequestParam(required = false) String movieId){
    System.out.println("SaveTweet was called : " + tweet);
    return tweet;

    }


    @GetMapping("/getHashtagSuggestions")
    public List<String> getHashtagSuggestions(@RequestParam String term) {
        List<String> hashTagList = new ArrayList<>();
        hashTagList.add("Summer2025");
        hashTagList.add("HelloYear2025");
        hashTagList.add("Year2025");
        hashTagList.add("DieHard");
        hashTagList.add("NewYear2025");
        hashTagList.add("Rocks");
        hashTagList.add("SuperRocks");
        hashTagList.add("Goodbye2024");
        hashTagList.add("Goodbye2023");
        hashTagList.add("Tyler");

        List<String> matchHashtagList = hashTagList.stream()
                .filter(s -> s.toLowerCase().startsWith(term.toLowerCase()))
                .toList();

        return matchHashtagList;

    }


}
