
INSERT INTO `user` 
VALUES
(NULL,9001,1,'tom','Tom Brady','tommy','xman@go.pasadena.edu',  "818-431-2312", NULL,NULL,NULL,NULL),
(NULL,9002,2,'roger','Roger Okamoto','roger','rokamoto@go.pasadena.edu',  "818-431-2312", NULL,NULL,NULL,NULL),
(NULL,9003,3,'cecilia','Cecilia Won','cecilia','cici@gmail.com',  "818-431-2312", NULL,NULL,NULL,NULL)
;


INSERT INTO `resourceid` 
VALUES
(NULL,10,"Oceanography"),
(NULL,12,'NASA Aeronautics'),
(NULL,33,'Aquatics')
;

INSERT INTO `categoryid` 
VALUES
(NULL,11,"hurricane , stay home",   1),
(NULL,13,'earthquake , shelter in place',1),
(NULL,23,'tornado , shelter in place',1)
;


insert into costperunitid (_id,label,value)
VALUES 
(NULL,11,"per hour( taxi)" ),
(NULL,12,"per hour( bus)"),
(NULL,33,"per hour( BART)"),
(NULL,43,"per hour( PTC)")
;

