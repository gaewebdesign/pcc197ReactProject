
INSERT INTO `user` 
VALUES
(NULL,9001,1,'tom','Tom Brady','tommy','xman@go.pasadena.edu',  "818-431-2312", NULL,NULL,NULL,NULL),
(NULL,9002,2,'roger','Roger Okamoto','roger','rokamoto@go.pasadena.edu',  "818-431-2312", NULL,NULL,NULL,NULL),
(NULL,9003,3,'cecilia','Cecilia Won','cecilia','cici@gmail.com',  "818-431-2312", NULL,NULL,NULL,NULL)
;

INSERT into `role`
VALUES
(NULL,1002003,"Physics Professor"),
(NULL,1003194,"CS194-Spring  Professoe"),
(NULL,1003197,"CS197-Summer Professo"),
(NULL,1004001,"CS1A Professor"),
(NULL,1004100,"CS100 Professor"),
(NULL,1009901,"Cardio 1a Professor")
;

INSERT INTO `resourceid` 
VALUES
(NULL,212,"Oceanography"),
(NULL,162,"NASA Aeronautics"),
(NULL,33,"Resources 33"),
(NULL,43,'Giants'),
(NULL,53,'Dodgers'),
(NULL,123,'NY Yankees'),
(NULL,125,'Tampa Bay Buccaneers'),
(NULL,333,'Texas Rangers'),
(NULL,54133,'Baltimore Orioes')
;

INSERT INTO `categoryid` 
VALUES
(NULL,11,"hurricane - stay home",   1),
(NULL,13,'earthquake - shelter in place',1),
(NULL,23,'tornado - shelter in place',1),
(NULL,423,'flood - shelter in place',1),
(NULL,426,'tsunami - goto high ground',1),
(NULL,911,'terrorist attact - lock down airports',1),
(NULL,1211,'Martian Invasion - lock down',1),
(NULL,13911,'Borg Invasion -  Panetery defense alerted',1),

;


insert into costperunitid (_id,label,value)
VALUES 
(NULL,101,"per hour( taxi)" ),
(NULL,102,"per hour( bus)"),
(NULL,133,"per hour( BART)"),
(NULL,143,"per hour( PTC)"),
(NULL,342,"per inning ( PCC)"),
(NULL,892,"per game ( MLB)"),
(NULL,922,"per quarter ( NFL)")
;

