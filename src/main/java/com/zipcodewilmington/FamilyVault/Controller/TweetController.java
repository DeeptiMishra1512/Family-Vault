package com.zipcodewilmington.FamilyVault.Controller;


import com.zipcodewilmington.FamilyVault.TweetTestPojo.Tweet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TweetController {

    @GetMapping("/getTweet")
    public Tweet getTweet(@RequestParam String movieId){
        List<String> dummyTweets = new ArrayList<>();
        dummyTweets.add("Hello , this is my first tweet");
        dummyTweets.add("Hello , there!!");
        dummyTweets.add("I hope this new year #2025 brings joy and prosperity!!");
        dummyTweets.add("#DieHard is super good movie...#DoneDone !!");
        dummyTweets.add("#NewYear2025 #Rocks!!!!");
        dummyTweets.add("#NewYear2025 #SuperRocks!!!!");
        dummyTweets.add("#Goodbye2024 !!!!");
        dummyTweets.add("#Goodbye2024 !!!!");

        Tweet tweet = new Tweet();

        tweet.setMovieId("1");
        tweet.setUserId("Deepti");
        tweet.setTweets(dummyTweets);

        return tweet;

    }

    @PostMapping("/saveTweet")
    public Tweet saveTweet(@RequestBody Tweet tweet){
    System.out.println("SaveTweet was called : " + tweet);
    return tweet;

    }

}
