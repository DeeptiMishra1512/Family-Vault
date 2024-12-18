package com.zipcodewilmington.FamilyVault.Entity;


public class Contact {

/***
 * +--------------+--------------+------+-----+---------+-------+
 * | Field        | Type         | Null | Key | Default | Extra |
 * +--------------+--------------+------+-----+---------+-------+
 * | Contact_Id   | varchar(200) | NO   | PRI | NULL    |       |
 * | User_Id      | varchar(255) | YES  | MUL | NULL    |       |
 * | Name         | varchar(500) | YES  |     | NULL    |       |
 * | Relationship | varchar(500) | YES  |     | NULL    |       |
 * | ContactInfo  | varchar(500) | YES  |     | NULL    |       |
 * +--------------+--------------+------+-----+---------+-------+
 */

private String contactId;
private String userId;
private String name;
private String relationship;
private String contactInfo;


    public String getContactId() {
        return contactId;
    }

    public void setContactId(String contactId) {
        this.contactId = contactId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }


}
