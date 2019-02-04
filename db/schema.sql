CREATE DATABASE friends_db;

USE friends_db;

create table friends(
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(255) not null, 
    photo varchar(255) not null, 
    score_1 int not null,
    score_2 int not null,
    score_3 int not null,
    score_4 int not null,
    score_5 int not null,
    score_6 int not null,
    score_7 int not null,
    score_8 int not null,
    score_9 int not null,
    score_10 int not null,
    PRIMARY KEY (ID)
);