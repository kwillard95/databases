CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  -- id INT AUTO_INCREMENT
  -- PRIMARY KEY(id),
  username CHAR(20)
);

-- CREATE TABLE rooms (
--   id INT AUTO_INCREMENT
--   PRIMARY KEY(id),
--   roomname CHAR(20)
-- );
-- CREATE TABLE friends (
--   FOREIGN KEY(user1) REFERENCES users(id),
--   FOREIGN KEY(user2) REFERENCES users(id)
-- );

-- CREATE TABLE messages (
--   id INT AUTO_INCREMENT
--   PRIMARY KEY(id),
--   FOREIGN KEY(user) REFERENCES users(id),
--   FOREIGN KEY (room) REFERENCES rooms(id),
--   content CHAR(100)
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

