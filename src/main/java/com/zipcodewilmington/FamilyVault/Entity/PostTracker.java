package com.zipcodewilmington.FamilyVault.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;

@Entity
@Table(name = "PostTracker")
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
@Column(name = "Post_Id")
 private String postId;

@Column(name = "Media_Id")
 private String mediaId;
@Column(name = "User_Id")
 private String userId;
 @Column(name = "Likes")
 private int likesCount;
 @Column(name = "Comment")
 private String comment;
 @Column(name = "ActivityTime")
 private Timestamp activityTime;

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getMediaId() {
        return mediaId;
    }

    public void setMediaId(String mediaId) {
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
