package com.zipcodewilmington.FamilyVault.Entity;
import jakarta.persistence.*;


@Entity
@Table(name = "vault_user")
public class VaultUser {

    /***
     * +----------+--------------+-------------------+--------------------------+
     * | User_Id  | Username     | Password          | Email_Id                 |
     * +----------+--------------+-------------------+--------------------------+
     * | aarav    | aaravarjun   | F@mily!           | aaravarjun@gmail.com     |
     * | arjun28  | arjunpatel   | F@milyvaultrocks! | arjun@gmail.com          |
     * | deepti15 | DeeptiMishra | Familyvaultrocks! | deepti86mishra@gmail.com |
     * +----------+--------------+-------------------+--------------------------+
     */

    @Id
    @Column(name = "User_Id")
   private String userId;
    @Column(name = "Username")
   private String userName;
    @Column(name = "Password")
   private String password;
    @Column(name = "Email_Id")
   private String emailId;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
}
