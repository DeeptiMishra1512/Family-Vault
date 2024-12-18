package com.zipcodewilmington.FamilyVault.DTO;

import java.sql.Timestamp;
import java.util.List;

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

 private String postId;
 private String mediaId;
 private String userId;
 private List<VaultUser> likesCount;
 private List<VaultUser> comment;
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

    public List<VaultUser> getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(List<VaultUser> likesCount) {
        this.likesCount = likesCount;
    }

    public List<VaultUser> getComment() {
        return comment;
    }

    public void setComment(List<VaultUser> comment) {
        this.comment = comment;
    }

    public Timestamp getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(Timestamp activityTime) {
        this.activityTime = activityTime;
    }
}
