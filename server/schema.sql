DROP DATABASE IF EXISTS Chat;
CREATE DATABASE Chat;

USE Chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  PRIMARY KEY(id),
  username CHAR(20)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT,
  PRIMARY KEY(id),
  roomname CHAR(20)
);
CREATE TABLE friends (
  user1 INT,
  FOREIGN KEY(user1) REFERENCES users(id),
  user2 INT,
  FOREIGN KEY(user2) REFERENCES users(id)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  PRIMARY KEY(id),
  user INT,
  FOREIGN KEY(user) REFERENCES users(id),
  room INT,
  FOREIGN KEY (room) REFERENCES rooms(id),
  content CHAR(100)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

