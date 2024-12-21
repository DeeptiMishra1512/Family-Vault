package com.zipcodewilmington.FamilyVault.Entity;
import jakarta.persistence.*;

import java.sql.Date;



@Entity
@Table(name = "media")
public class Media {
/**
 * +-------------+--------------+------+-----+---------+-------+
 * | Field       | Type         | Null | Key | Default | Extra |
 * +-------------+--------------+------+-----+---------+-------+
 * | Media_Id    | varchar(200) | NO   | PRI | NULL    |       |
 * | User_Id     | varchar(255) | YES  |     | NULL    |       |
 * | Type        | varchar(100) | YES  |     | NULL    |       |
 * | File_Path   | varchar(500) | NO   |     | NULL    |       |
 * | Upload_date | date         | YES  |     | NULL    |       |
 * +-------------+--------------+------+-----+---------+-------+
 */

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "Media_Id")
private int mediaId;
@Column(name = "User_Id")
private String userId;
@Column(name = "Type")
private String type;
@Column(name = "File_Path")
private String filePath;
@Column(name = "Upload_date")
private Date uploadDate;
@Column (name = "description")
private String description;


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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
