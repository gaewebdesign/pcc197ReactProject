
CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pasadena` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `pasadena`;

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `role`;

DROP TABLE IF EXISTS `resourceid`;
DROP TABLE IF EXISTS `categoryid` ;
DROP TABLE IF EXISTS `costperunitid`;


CREATE TABLE `user` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `ownerid` int NOT NULL UNIQUE,
  `roleid` int NOT NULL,
  `user` varchar(50) UNIQUE NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`_id`)
  ) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;


alter table `user` AUTO_INCREMENT=1;

CREATE TABLE `role` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `label` INT NOT NULL,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=276 DEFAULT CHARSET=latin1;
alter table `user` AUTO_INCREMENT=1;


INSERT INTO `user` 
VALUES
(NULL,1001,1,'tim','Tim The XMan','timmy','xman@go.pasadena.edu',  "818-431-2312", NULL,NULL,NULL,NULL),
(NULL,1002,1,'teresa','Teresa Lee','teresa','xman@go.pasadena.edu',  "818-431-2312", NULL,NULL,NULL,NULL),
(NULL,1003,1,'alison@gmail.com','Alison Kusaba','alison','alilove@gmail.com',  "818-431-2312", NULL,NULL,NULL,NULL)
;


INSERT INTO `user` 
VALUES
(NULL,2002,2,'steve','Steve Go','admin','steve@go.pasadena.edu', "818-323-1312","91 Colorado Blvd","Pasadena","CA","92123"),
(NULL,2003,2,'phyllis','Phyllis Nakamoto','pass','phyllis@go.pasadena.edu', "714-212-3232","1091 Colorado Blvd","Pasadena","CA","92123"),
(NULL,2005,2,'ladygaga','Lady Gaga','pass','ladygaga@go.pasadena.edu', "312-231-1312","1091 Colorado Blvd","Pasadena","CA","92123")
;

INSERT INTO `user`
VALUES
(NULL,3003,3,'chemistry','Dr Latimer','pass_911','xman@go.pasadena.edu', NULL,NULL,NULL,NULL,NULL),
(NULL,3004,3,'physics','Dr Richard Feyman','feyn','feyman@hpd.caltech.edu', NULL,NULL,NULL,NULL,NULL),
(NULL,3005,3,'library','Stella L. Lee, PhD','stella','stella.lee.library.com', NULL,NULL,NULL,NULL,NULL)
;

INSERT INTO `role`
VALUES
(NULL , 1 , "CIMT Users"),
(NULL , 2 , "Resource Providers"),
(NULL , 3 , "System Administrator");


DROP TABLE IF EXISTS `resourceid`;
CREATE TABLE `resourceid` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

alter table `resourceid` AUTO_INCREMENT=1;

INSERT INTO `resourceid` 
VALUES (NULL,'1','-Transportation'),
(NULL,'2','-Communications'),
(NULL,'3','-Engineering'),
(NULL,'4','-Search and Rescue'),
(NULL,'5','-Education'),
(NULL,'6','-Energy');


CREATE TABLE `categoryid` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  `last` INT DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;


alter table `categoryid` AUTO_INCREMENT=1;

INSERT INTO `categoryid` 
VALUES 
(NULL,'1','-must evac, secure lockdown',1),
(NULL,'2','-may evac, secure lockdown',1),
(NULL,'3','-no evac, limited lockdown',1),
(NULL,'4','-no evac, no lockdown',1);

DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `resourceid` varchar(50) UNIQUE NOT NULL,
  `ownerid` INT DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `prime` INT DEFAULT NULL,
  `secondary` INT DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `cap` varchar(50) DEFAULT NULL,
  `dist` INT DEFAULT NULL,
  `cost` DECIMAL(20,5) DEFAULT NULL,
  `unit` INT DEFAULT NULL,
  `last` INT DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

alter table `resource` AUTO_INCREMENT=1;

insert into `resource`
(resourceid,ownerid,name,prime,secondary,description,cap,dist,cost,unit)
VALUES
("1687732320322",1,"Accident March 1",1,3,"D: Coloraro Blvd","C: Police",10,1, 25),
("1687732316322",1,"Accident March 2",2,1,"D: Allen Ave","C: Police",10,1, 25),
("1687732026322",1,"Accident March 3",3,1,"D: Sierra ","C: Police",10,2, 25),

("1687732420332",1,"Theft March 1",1,3,"D: Coloraro Blvd","C: Police",10,1, 25),
("1687732516342",1,"Theft March 2",2,1,"D: Allen Ave","C: Police",10,1, 25),
("1687732626352",1,"Theft March 3",3,1,"D: Sierra ","C: Police",10,2, 25),

("1687731020332",1,"Lost March 1",1,3,"D: 15 College Ave","C: Police",10,1, 25),
("1687732517342",1,"Lost March 2",2,1,"D: 16 Yosemite","C: Police",10,1, 25),
("1687732628352",1,"Lost March 3",3,1,"D: 28 Main St ","C: Police",10,2, 25),

("1687732449222",2,"Lost March 11",1,3,"D: 15 College Ave","C: Police",10,1, 25),
("1687732597342",2,"Lost March 12",2,1,"D: 16 Yosemite","C: Police",10,1, 25),
("1687732698352",2,"Lost March 13",3,1,"D: 28 Main St ","C: Police",10,2, 25),

("1687732490132",3,"Lost March 11",1,3,"D: 15 College Ave","C: Police",10,1, 25),
("1687732599342",3,"Lost March 12",2,1,"D: 16 Yosemite","C: Police",10,1, 25),
("1687732608352",3,"Lost March 13",3,1,"D: 28 Main St ","C: Police",10,2, 25),

("1687732482132",4,"Lost April 11",1,3,"D: 15 College Ave","C: Police",10,1, 25),
("1687732598942",4,"Lost May 12",2,1,"D: 16 Yosemite","C: Police",10,1, 25),
("1687732617352",4,"Lost June 13",3,1,"D: 28 Main St ","C: Police",10,2, 25),
("1687732607342",4,"Lost July 13",3,1,"D: 28 Main St ","C: Police",10,2, 25),

("1687732471132",5,"Theft March 11",7,3,"D: 15 College Ave","C: Police",10,1, 25),
("1687732508942",5,"Theft March 12",6,1,"D: 16 Yosemite","C: Police",10,1, 25),
("1687732617372",5,"Theft March 13",5,1,"D: 28 Main St ","C: Police",10,2, 25),
("1687732607382",5,"Theft March 13",4,1,"D: 28 Main St ","C: Police",10,2, 25)


;





DROP TABLE IF EXISTS `incident`;
CREATE TABLE `incident` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `ownerid` INT DEFAULT NULL,
  `categoryid` INT DEFAULT NULL,
  `incidentid` varchar(50) DEFAULT NULL,
  `idate` varchar(50) DEFAULT NULL,
  `description` varchar(50)  DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

alter table `incident` AUTO_INCREMENT=1;

insert into `incident`
(ownerid,categoryid,incidentid,idate,description)
VALUES
(1001,1,"PCC","6/1/2003","boiler room accident"),
(2002,2,"Chipoltis","8/10/2006","throw burrito" ),
(3003,3,"Gym","7/1/2022","weights accident")
;


CREATE TABLE `costperunitid` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `value` varchar(50) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=276 DEFAULT CHARSET=latin1;

alter table `costperunitid` AUTO_INCREMENT=1;


insert into costperunitid (_id,label,value)
VALUES 
(NULL,'1',"per mile( Uber)" ),
(NULL,'2',"per mile( Lyft)"),
(NULL,'3',"per mile( Chariot)"),
(NULL,'4',"per mile( Police Emergency)")
;