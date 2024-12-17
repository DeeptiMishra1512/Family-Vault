
use FamilyVault; /***Database in root***/

create table VaultUser(User_Id varchar(255) Not Null ,Username varchar(500)Not Null,Password varchar(100) Not Null,Email_Id varchar(800) Not Null, Primary Key(User_Id));
create table UserGroup(Group_Id varchar(255) Not Null,Name varchar(500),Description varchar(5000), Primary Key(Group_Id));
create table Media(Media_Id varchar(200) Not Null,User_Id varchar(255),Type varchar(100),File_Path varchar(500) Not Null,Upload_date Date,Primary Key(Media_Id),Foreign Key(User_Id) References VaultUser(User_Id));
create table Contact(Contact_Id varchar(200) Not Null,User_Id varchar(255),Name varchar(500),Relationship varchar(500),ContactInfo varchar(500),Primary Key(Contact_Id),Foreign Key(User_Id) References VaultUser(User_Id));
create table UserGroupAssociation(UserGroupAssociation_Id varchar(255) Not Null,User_Id varchar(255),Group_Id varchar(255), Primary Key(UserGroupAssociation_Id),Foreign Key(User_Id) References VaultUser(User_Id), Foreign Key(Group_Id) References Usergroup(Group_Id));
create table UserProfile(Profile_Id varchar(255) Not Null,User_Id varchar(255),First_Name varchar(500),Last_Name varchar(500),Birthdate Date,Profile_Desc varchar(5000), Primary Key(Profile_Id), Foreign Key(User_Id) References VaultUser(User_Id));
Create table ActivityTracker(Activity_Id varchar(100) Not Null,Media_Id varchar(255) Not Null,User_Id varchar(255),Likes Boolean,Comment varchar(2000),ActivityTime TimeStamp,Primary Key(Activity_Id),Foreign Key(User_Id) References VaultUser(User_Id),Foreign Key(Media_Id) References Media(Media_Id) );