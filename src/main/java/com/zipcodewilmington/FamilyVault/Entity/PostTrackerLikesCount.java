package com.zipcodewilmington.FamilyVault.Entity;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "posttracker_likes")
public class PostTrackerLikesCount {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "Post_Id")
    private int postId;
@Column(name = "Media_Id")
    private int mediaId;
@Column(name = "User_Id")
    private String userId;
@Column(name = "Likes")
    private int likes;
@Column(name = "activity_time")
    private Timestamp activityTime;


    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public int getMediaId() {
        return mediaId;
    }

    public void setMediaId(int mediaId) {
        this.mediaId = mediaId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public Timestamp getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(Timestamp activityTime) {
        this.activityTime = activityTime;
    }

}
