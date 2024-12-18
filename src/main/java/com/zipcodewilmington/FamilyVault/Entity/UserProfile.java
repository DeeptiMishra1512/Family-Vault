package com.zipcodewilmington.FamilyVault.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;


@Entity
@Table(name = "UserProfile" )
public class UserProfile {
    /***
     * +------------+----------+------------+-----------+------------+--------------+-----------------+
     * | Profile_Id | User_Id  | First_Name | Last_Name | Birthdate  | Profile_Desc | Profile_Picture |
     * +------------+----------+------------+-----------+------------+--------------+-----------------+
     * | PID001     | deepti15 | Deepti     | Mishra    | 1986-12-15 | I feel happy | NULL            |
     * | PID002     | arjun28  | Arjun      | Patel     | 1986-10-28 | I feel happy | NULL            |
     * | PID003     | aarav    | Aarav      | Arjun     | 2020-03-05 | I feel happy | NULL            |
     * +------------+----------+------------+-----------+------------+--------------+-----------------+
     */

    @Id
    @Column(name = "Profile_Id")
    private String profileId;
    @Column(name = "User_Id")
    private String userId;
    @Column(name = "First_Name")
    private String firstName;
    @Column(name = "Last_Name")
    private String lastName;
    @Column(name = "Birthdate")
    private Date birthDate;
    @Column(name = "Profile_Desc")
    private String profileDesc;
    @Column(name = "Profile_Picture")
    private String profilePic;


    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getProfileDesc() {
        return profileDesc;
    }

    public void setProfileDesc(String profileDesc) {
        this.profileDesc = profileDesc;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }
}
