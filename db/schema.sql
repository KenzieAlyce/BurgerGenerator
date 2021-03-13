drop database if exists burgers;

create database if not exists burgers;

use burgers;

create table burgers (
id int not null auto_increment,

burgers varchar(55) default null,

devoured boolean default false, 

primary key (id)
);