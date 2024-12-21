
use FamilyVault; /***Database in root***/

create table VaultUser(User_Id varchar(255) Not Null ,Username varchar(500)Not Null,Password varchar(100) Not Null,Email_Id varchar(800) Not Null, Primary Key(User_Id));
create table UserGroup(Group_Id varchar(255) Not Null,Name varchar(500),Description varchar(5000), Primary Key(Group_Id));
create table Media(Media_Id int Not Null AUTO_INCREMENT,User_Id varchar(255),Type varchar(100),File_Path varchar(500) Not Null,Upload_date Date,Description varchar(1500),Primary Key(Media_Id));
create table Contact(Contact_Id varchar(200) Not Null,User_Id varchar(255),Name varchar(500),Relationship varchar(500),ContactInfo varchar(500),Primary Key(Contact_Id));
create table UserGroupAssociation(UserGroupAssociation_Id varchar(255) Not Null,User_Id varchar(255),Group_Id varchar(255), Primary Key(UserGroupAssociation_Id));
create table UserProfile(Profile_Id varchar(255) Not Null,User_Id varchar(255),First_Name varchar(500),Last_Name varchar(500),Birthdate Date,Profile_Desc varchar(5000), Primary Key(Profile_Id));
Create table PostTracker(Post_Id varchar(100) Not Null,Media_Id varchar(255) Not Null,User_Id varchar(255),Likes Boolean,Comment varchar(2000),ActivityTime TimeStamp,Primary Key(Post_Id));


insert into VaultUser(User_Id,Username,password,Email_Id) values('deepti15','DeeptiMishra','Familyvaultrocks!','deepti86mishra@gmail.com'),
                                                                ('arjun28','arjunpatel','F@milyvaultrocks!','arjun@gmail.com'),
                                                                ('aarav','aaravarjun','F@mily!','aaravarjun@gmail.com');
+----------+--------------+-------------------+--------------------------+
| User_Id  | Username     | Password          | Email_Id                 |
+----------+--------------+-------------------+--------------------------+
| aarav    | aaravarjun   | F@mily!           | aaravarjun@gmail.com     |
| arjun28  | arjunpatel   | F@milyvaultrocks! | arjun@gmail.com          |
| deepti15 | DeeptiMishra | Familyvaultrocks! | deepti86mishra@gmail.com |
+----------+--------------+-------------------+--------------------------+


 insert into UserProfile values('PID001','deepti15','Deepti','Mishra','1986-12-15','I feel happy'),
                               ('PID002','arjun28','Arjun','Patel','1986-10-28','I feel happy'),
                               ('PID003','aarav','Aarav','Arjun','2020-03-05','I feel happy');
+------------+----------+------------+-----------+------------+--------------+-----------------+
| Profile_Id | User_Id  | First_Name | Last_Name | Birthdate  | Profile_Desc | Profile_Picture |
+------------+----------+------------+-----------+------------+--------------+-----------------+
| PID001     | deepti15 | Deepti     | Mishra    | 1986-12-15 | I feel happy | NULL            |
| PID002     | arjun28  | Arjun      | Patel     | 1986-10-28 | I feel happy | NULL            |
| PID003     | aarav    | Aarav      | Arjun     | 2020-03-05 | I feel happy | NULL            |
+------------+----------+------------+-----------+------------+--------------+-----------------+

  insert into UserGroup values('G0001','FantasticUs','Stay Happy');
  +----------+-------------+-------------+
  | Group_Id | GroupName   | Description |
  +----------+-------------+-------------+
  | G0001    | FantasticUs | Stay Happy  |
  +----------+-------------+-------------+


 INSERT INTO Media (User_Id, Type, File_Path, Upload_date, Description) VALUES ('deepti15', 'photo', '../logos/First Post.png', '2024-12-21', 'A beautiful Garden image');

