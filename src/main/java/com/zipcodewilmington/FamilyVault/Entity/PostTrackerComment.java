package com.zipcodewilmington.FamilyVault.Entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "posttracker_comment")
public class PostTrackerComment {

/**
    mysql> desc posttracker_comment;
+---------------+---------------+------+-----+---------+----------------+
        | Field         | Type          | Null | Key | Default | Extra          |
            +---------------+---------------+------+-----+---------+----------------+
            | Post_Id       | int           | NO   | PRI | NULL    | auto_increment |
            | Media_Id      | int           | NO   |     | NULL    |                |
            | User_Id       | varchar(255)  | YES  |     | NULL    |                |
            | Comment       | varchar(2000) | YES  |     | NULL    |                |
            | activity_time | timestamp     | YES  |     | NULL    |                |
            +---------------+---------------+------+-----+---------+----------------+
            5 rows in set (0.03 sec)
*/


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "Post_Id")
 private int postId;
@Column(name = "Media_Id")
 private int mediaId;
@Column(name = "User_Id")
 private String userId;
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
