
use FamilyVault;

create table VaultUser(User_Id varchar(255) Not Null ,Username varchar(500)Not Null,Password varchar(100) Not Null,Email_Id varchar(800) Not Null, Primary Key(User_Id));
create table UserGroup(Group_Id varchar(255),Name varchar(500),Description varchar(5000));
create table Media(Media_Id varchar(200),User_Id varchar(255),Type varchar(100),File_Path varchar(500),Upload_date Date);
create table Contact(Contact_Id varchar(200),User_Id varchar(255),Name varchar(500),Relationship varchar(500),ContactInfo varchar(500));
create table UserGroupAssociation(UserGroupAssociation_Id varchar(255),User_Id varchar(255),Group_Id varchar(255));
create table UserProfile(Profile_Id varchar(255),User_Id varchar(255),First_Name varchar(500),Last_Name varchar(500),Birthdate Date,Profile_Desc varchar(5000));
Create table ActivityTracker(Media_Id varchar(255),LikesCount int,Comment varchar(2000));