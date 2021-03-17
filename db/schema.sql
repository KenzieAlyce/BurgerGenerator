drop database if exists burgersdb;

create database if not exists burgersdb;

use burgersdb;

create table burgers (
id int not null auto_increment,

burger_name varchar(55) default null,

devoured boolean default false, 

primary key (id)
);