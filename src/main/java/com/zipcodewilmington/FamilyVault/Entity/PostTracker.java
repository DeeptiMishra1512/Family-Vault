package com.zipcodewilmington.FamilyVault.Entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "posttracker")
public class PostTracker {

/**
 Field        | Type          | Null | Key | Default | Extra |
+--------------+---------------+------+-----+---------+-------+
| Post_Id      | varchar(100)  | NO   | PRI | NULL    |       |
| Media_Id     | varchar(255)  | NO   | MUL | NULL    |       |
| User_Id      | varchar(255)  | YES  | MUL | NULL    |       |
| Likes        | tinyint(1)    | YES  |     | NULL    |       |
| Comment      | varchar(2000) | YES  |     | NULL    |       |
| ActivityTime | timestamp     | YES  |     | NULL    |       |
+--------------+---------------+------+-----+---------+-------+

 */

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "Post_Id")
 private int postId;
@Column(name = "Media_Id")
 private int mediaId;
@Column(name = "User_Id")
 private String userId;
 @Column(name = "Likes")
 private int likesCount;
 @Column(name = "Comment")
 private String comment;
 @Column(name = "activity_time")
 private Timestamp activityTime;

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public Integer getMediaId() {
        return mediaId;
    }

    public void setMediaId(Integer mediaId) {
        this.mediaId = mediaId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(int likesCount) {
        this.likesCount = likesCount;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Timestamp getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(Timestamp activityTime) {
        this.activityTime = activityTime;
    }
}
