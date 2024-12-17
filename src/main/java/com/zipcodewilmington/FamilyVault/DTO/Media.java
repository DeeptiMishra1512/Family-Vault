package com.zipcodewilmington.FamilyVault.DTO;

import java.sql.Date;

public class Media {
/**
 * +-------------+--------------+------+-----+---------+-------+
 * | Field       | Type         | Null | Key | Default | Extra |
 * +-------------+--------------+------+-----+---------+-------+
 * | Media_Id    | varchar(200) | NO   | PRI | NULL    |       |
 * | User_Id     | varchar(255) | YES  | MUL | NULL    |       |
 * | Type        | varchar(100) | YES  |     | NULL    |       |
 * | File_Path   | varchar(500) | NO   |     | NULL    |       |
 * | Upload_date | date         | YES  |     | NULL    |       |
 * +-------------+--------------+------+-----+---------+-------+
 */

private String mediaId;
private String userId;
private String type;
private String filePath;
private Date uploadDate;


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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }


}
