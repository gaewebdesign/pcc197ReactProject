
const express= require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")
const app = express()

/*
const db = mysql.createPool(
  {
    host: "localhost",
    user: "root",
    password: "tomato1349",
    database: "crud"

  }
)
*/

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "tomato1349",
    database: "pasadena"

  }
)

app.use(cors())
app.use(express.json() )
app.use( bodyParser.urlencoded({ extended: true }))

quotes  = (_v) => { return '"' + _v + '"'}
asValue = (_v) => { return  _v }

app.post("/api/logger", (req,res)=>{
     const ownerid= req.body.ownerid
     const user = req.body.user
     const name = req.body.name
     const epoch= req.body.epoch
     let sql = "insert into logger(ownerid,user,name,epoch) values("
     sql += quotes( ownerid) + ","
     sql += quotes( user) + ","
     sql += quotes( name) + ","
     sql += quotes( epoch) + ")"

     console.log( sql)
     // insert ownerid of current logger
     db.query( sql ,[ownerid,epoch], (err,result) =>
     {
          if(err){
           console.log("ERR:" + err)
           res.status(400)
           res.send("SQL failed  ")
 
         }else{
           res.status(200)
           res.send("SUCCESS")
           console.log("SUCCESS: sql inserted: ") 
           console.log( result )
 
          }
    })

})

// return the current user ownerid
// older api for test to the current user : ownerid
app.get('/api/current', (req,res) =>{
  //const sql = "select name,displayname,email,password from user order by _id"
  const sql = "select ownerid from logger order by _id desc limit 1"
      console.log( sql )
      db.query(sql, (err,result) =>{
         console.log( result )
         res.send( result )

      })

 })

 
 
app.get("/api/currentinfo" ,(req,res)=>{
      let ownerid=9999     // should be reset
      let sql = "select ownerid from logger order by _id desc limit 1"
       console.log( sql)
    // Execute the mysql command 
     db.query( sql , (err,result) =>
    {
         if(err){          
          console.log("ERR:" + err)
          res.status(400)
          res.send("SQL failed ")
        }else if( result.length==0){
           // Prevent a server crash if logger table empty
           res.status(400)
           console.log("logger table is empty")
           res.send("logger table empty")
        }
        else{
          console.log("SUCCESS: current ownerid: ") 
          console.log( result)
          console.log( result[0].ownerid)
          ownerid = result[0].ownerid
             let sql2 = "select * from user where ownerid= " + ownerid
             console.log( sql2)
             db.query( sql2, (err,result)=>{
                if(err){
                      res.status(400)
                      res.send("err")
                }else{
                     res.status(200)
                     res.send( result)

                }


             })
             

         }
     })


})


app.post("/api/insertuser", (req,res) => {

    const ownerid = req.body.ownerid
    const roleid = req.body.roleid
    const user = req.body.user
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password


    console.log("POST: " + name + " " + " " + email + " " + password)
    // CREATE THE mysql command
    // TOOO fix...
    let ownerid2= 999
    let sql = "insert into user(ownerid,roleid,user,name,email,password) values("
    sql += quotes( ownerid) + ","
    sql += quotes( roleid) + ","
    sql += quotes( user) + ","
    sql += quotes( name) + ","
    sql += quotes( email )+ ','
    sql += quotes( password )+ ')'
    console.log( sql )
    
    // Execute the mysql command 
    db.query( sql ,[name,password], (err,result) =>
    {
         if(err){
          console.log("ERR:" + err)
          res.status(400)
          res.send("SQL failed -- likely duplicate ownerid or user ")

        }else{
          console.log("SUCCESS: sql inserted: ") 
          console.log( result )

         }
     })

     res.send("got " + name + " " + email + password)
     
    
 })

 /* ****************************************************************
    These are the 4 main APIs in a row
    1 add resource  (POST)
    2 add incident  (POST)
    3 search        (GET)
    4 summary       (GET)

*/

app.post('/api/addresource' , (req,res )=>{
  /*
     Take post information 
  */
  //let resourceid = "R-" + Math.floor(+new Date() / 1000)
  let resourceid = req.body.resourceid
  let ownerid =    req.body.ownerid
  let name =    req.body.name
  
  let prime = req.body.prime
  let secondary = req.body.secondary
  let description =  req.body.description 
  let cap =   req.body.cap
  let dist =  req.body.dist
  let cost = req.body.cost
  let unit = req.body.unit
  let last = req.body.last
  
    // CREATE THE mysql command
   let sql = "insert into resource(resourceid,ownerid,name,prime,secondary,description,cap,dist,cost,unit)  values("
  
    sql += quotes( resourceid ) + ","
    sql += asValue( ownerid )+ ','
    sql += quotes( name )+ ','
    sql += asValue( prime)+ ','
    sql += asValue( secondary)+ ','
    sql += quotes( description)+ ','
    sql += quotes( cap)+ ','
  
    sql += asValue( dist)+ ','
    sql += asValue( cost)+ ','
    sql += asValue(unit)
    sql += ')'
  
  
    console.log(sql)
  // finally send the SQL command
  // https://www.npmjs.com/package/mysql
  db.query( sql ,(err, result, field)=>{
      if(err){
          console.log("ERR: " + err)
          res.status(400)
          res.send( "SQL: failed " )
      }else{
        console.log("SUCCESS: ")
        console.log( result )
        res.status(200)
        res.send( result )
      }
  
     })
  
  
  })
  


 app.post('/api/addincident' ,(req,res) => {
  const ownerid = req.body.ownerid
  const categoryid = req.body.categoryid
  const incidentid = req.body.incidentid
  const idate = req.body.idate
  const description = req.body.description
  
  let ownerid2= 999
  let sql = "insert into incident(ownerid,categoryid,incidentid,idate,description) values("
  sql += quotes( ownerid) + ","
  sql += quotes( categoryid) + ","
  sql += quotes( incidentid) + ","
  sql += quotes( idate) + ","
  sql += quotes( description) + ")"
  console.log( sql )

    // Execute the mysql command 
    db.query( sql ,(err, result, field)=>{
      if(err){
          console.log("ERR: " + err)
          res.status(400)
          res.send( "SQL: failed " )
      }else{
        console.log("SUCCESS: ")
        console.log( result )
        res.status(200)
        res.send( result )
      }
  
     })
 }

 )


 app.post('/api/search', (req,res)=> {
   /*
     there are 3 fields  in the search
     keyword:           use enters some text (TEXT)
     Primary function:  drop down (INT)
     Distance:          use enters (INT)
     
     (ignore... no longer a field)
     Incident:          drop down (INT)

   */
/*
      const ownerid = req.body.ownerid
      const categoryid = req.body.categoryid
      const incidentid = req.body.incidentid
      const distance  = req.body.distance
      select * from resource where description like  "%des%";

*/
      const keyword = req.body.keyword
      const distance = req.body.distance
      const primaryf = req.body.primaryf
      const epoch = req.body.epoch

      const wrap = (d) => "\"%" + d + "%\""

//    select all... followed by and clauses
      let sql = "select * from resource where resourceid>" + epoch

     if(keyword) {
      sql += "and "
      sql += "( description like " + wrap(keyword)
      sql += " or cap like " + wrap(keyword)
      sql += " or name like " + wrap(keyword)
      sql += ")"

    }     
     if(distance) sql += " and dist <= " + distance 
     if(primaryf>0) sql += " and prime= " + primaryf 

    // if(epoch>946709935) sql += " and resourceid> " + epoch 
     
     sql += " order by resourceid desc "
     

 //    sql += " limit 5"
     console.log("*************")
     console.log( keyword)
     console.log( distance )
     console.log( sql )
     console.log("*************")

      
      db.query( sql ,(err, result)=>{
          if(err){
              console.log("ERR: " + err)
              res.status(400)
              res.send( "SQL: failed " )
          }else{
              console.log("SUCCESS: ")
              console.log( result )
              res.status(200)
              res.send( result )
          }
  
     })
 })


 app.post('/api/resourcereport', (req,res)=> {
      
         let ownerid = req.body.ownerid
         if( ownerid == undefined) {
          console.log("WARNING: *********************")
          console.log("WARNING: ownerid is undefined")
          console.log("WARNING: ownerid is undefined")
          console.log("WARNING: *********************")
          ownerid=4
         }

         console.log( "OWNEROD:" + ownerid)
//         ownerid=1

        let sql = "select r.ownerid , r.prime, c.value "
        sql += "from resource  "
        sql += "join resourceid c "
        sql += "on r.prime = c.label "
        sql += "order by r.ownerid "

        // first try
        sql = " select r.ownerid , r.prime, c.value from resource  r join resourceid c on r.prime = c.label order by r.ownerid"
       
        // ver 2 return all
        // TODO add to query to return the actual column names -- 
        sql = "select r.ownerid,r.prime, COUNT(r.prime) as count from resource  r join resourceid c on r.prime = c.label group by r.ownerid ,r.prime order by r.ownerid"
        
        // ver 3 return using ownerid
        sql = "select r.ownerid,r.prime, COUNT(r.prime) as count from resource  r join resourceid c on r.prime = c.label where ownerid = " + ownerid + " group by r.ownerid ,r.prime order by r.prime"
        
        console.log( "**********************************")
        console.log( "SQL:" + sql)
        console.log( "**********************************")

        db.query( sql ,(err, result, field)=>{
                
            if(err){
                console.log("ERR: " + err)
                res.status(400)
                res.send( "SQL: failed " )
            }else{
                console.log("SUCCESS: ")
                console.log( result )
                res.status(200)
                res.send( result )
                console.log(result)
            }
    
       })
   })
  


// NOT USED
 function sqlCommand( _v){
  console.log( _v)

  db.query( _v ,(err,result)=>{
    if(err){
        console.log( err)
    }else{
        console.log( result )

    }

   })

}



 app.get('/api/getusers', (req,res) =>{
  //const sql = "select name,displayname,email,password from user order by _id"
  const sql = "select * from user order by _id"

      db.query(sql, (err,result) =>{
         console.log( result )
         res.send( result )

      })

 })

 //get everyone who's logged in
 app.get('/api/getloggers', (req,res)=>{
  const sql = "select * from logger order by _id"

  db.query(sql, (err,result) =>{
     console.log( result )
     res.send( result )

  })

 })
 
 app.get('/api/getresource', (req,res) =>{
  //const sql = "select name,displayname,email,password from user order by _id"
  const sql = "select * from resource order by _id"

      db.query(sql, (err,result) =>{
         console.log( result )
         res.send( result )

      })

 })

 app.get("/api/categoryid" , (req,res) => {

   const sql = "select * from categoryid order by _id"
   db.query(sql, (err,result) => {
      console.log(" getting category table ")
      console.log( result )
      res.status(200)
      res.send( result )  
  })


})

app.get("/api/lastcat" , (req,res) => {

  const sql = "select label,last from categoryid order by label"
  db.query(sql, (err,result) => {
     console.log(" getting  label,last table ")
     console.log( result )
     res.status(200)
     res.send( result )  
 })


})

/*
// the last values of C1, C2 , C3 ,C4
// should be only one row 
app.get("/api/getlastcategoryindex" , (req,res) => {

  const sql = "select * from lastcategoryindex limit 1"
  db.query(sql, (err,result) => {
     console.log(" getting lastcategory index")
     console.log( result )

     res.send( result )  
 })


})
*/
/* increment the last category (C#-n).. where 
  # is the category label and n is the last one used
   lastcat table is {label,value}
   where label(INT) represent # in  C#
   value(INT) is the latest used
*/
// POST http://localhost:3001/api/lastcat_increment
app.post("/api/lastcat_increment", (req,res)=>{
    let  label = req.body.label

    let sql = "update categoryid set last=last+1 where label =" + label

    db.query(sql, (err,result) => {
      if(err){
       res.status(500)
        res.send("err")
     }else{
         res.status(200)
         res.send(result)
 
     }
   })
    


})
// this follows above get 
// app.post("/api/lastcategoryincrement",(req,res) => {
//  "http://localhost:3001/api/lastcategoryincrement"
/*
app.post("/api/lastcategoryincrement",(req,res) => {  

  let index = req.body.index
  let sql=""
  if(index == 1 )      sql = "update lastcategoryindex set cat1 = cat1+1"
  else if( index == 2) sql = "update lastcategoryindex set cat2 = cat2+1"
  else if( index == 3) sql = "update lastcategoryindex set cat3 = cat3+1"
  else if( index == 4) sql = "update lastcategoryindex set cat4 = cat4+1"

  console.log(sql)


  db.query(sql, (err,result) => {
     if(err){
      res.status(500)
       res.send("err")
    }else{
        res.status(200)
        res.send(result)

    }
  })

})
*/
app.get("/api/resourceid" , (req,res) => {

  const sql = "select label, value from resourceid  order by label"
  db.query(sql, (err,result) => {
     console.log(" getting resource table ")
     console.log( result )

     res.send( result )  
 })


})

app.get("/api/costid" , (req,res) => {

  const sql = "select label, value from costperunitid  order by label"
  db.query(sql, (err,result) => {
     console.log(" cost table ")
     console.log( result )

     res.send( result )  
 })


})

app.post("/api/loginjwt",(req,res) => {

  let user = req.body.user
  let password = req.body.password
  
  let sql = "select * from user "
   sql += "where user =" + quotes(user)
   sql += " and password= " + quotes(password)
    
  db.query(sql, (err,result) => {
     
     if(err){
      res.status(500).json("err")
      
     }else{
         console.log("LEN:"+ result.length)
         if( result.length >0){
          console.log("LOGGED IN")
          console.log( result)
          console.log("LOGGED IN")
          res.status(200).json(result)
        }else{
          console.log("NOT LOGGED IN")
          res.status(400).json(result)

        }

     }

    
  })


})

 



app.get('/', (req,res) => {

  res.send("<b>Working!</b>")

})


app.get('/test/user2', (req,res) => {

  res.send("<b>test/user works</b>")

})

// get the resource database
app.get("/api/dbresource" , (req,res) => {

  const sql = "select * from resource order by _id desc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )  
     }

   })


})


app.get("/api/dbuser" , (req,res) => {

  const sql = "select * from user order by _id asc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )  
     }

   })


})


app.get("/api/getincidents" , (req,res) => {

  const sql = "select * from incident order by _id desc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )  
     }

   })


})

// database table categoryid retrieve contents 
app.get("/api/dbcategoryid" , (req,res) => {

  const sql = "select * from categoryid order by _id asc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )
          console.log("no last?")  
          console.log( result )
     }

   })


})

// database table  resourceid retrieve contents 
app.get("/api/dbresourceid" , (req,res) => {

  const sql = "select * from resourceid order by _id asc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )  
     }

   })


})

// database table categoryid retrieve contents 
app.get("/api/dbcostid" , (req,res) => {

  const sql = "select * from costid order by _id asc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )  
     }

   })


})

// database table roleid retrieve contents 
app.get("/api/dbroleid" , (req,res) => {

  const sql = "select * from role order by _id asc"
  db.query(sql, (err,result) => {
     if(err){
         res.status=400
         res.send("ERR")
     }else{
           res.status=200
          res.send( result )  
     }

   })


})



app.post("api/insert" , (req,res)=>{


     const fname = req.body.fname
     const lname = req.body.lname
     const email = req.body.email
     const password = req.body.password
     console.log("/api/insert works")
//     res.send("/api/insert works:" + fname )
//     console.log("api/insert:" + fname + " " + lname + " " + email + " " + password )
      const sqlInsert= "insert into member(fname,lname,email,password) values('?','?','?','?')"

      db.query( sqlInsert, [fname,lname,email,password] , (err,result)=>{

             console.log( err)

     })

})



// Create (CRUD)
app.post("/api/create" , (req,res)=>{

    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const password = req.body.password
    
    let sql = "insert into member(fname,lname,email,password) values("
    sql += quotes( fname) + ','
    sql += quotes( lname)+ ','
    sql += quotes( email) + ','
    sql += quotes( password) + ')'

    
    db.query( sql ,[fname,lname,email,password], (err,result) =>
    {
          console.log("sql inserted: ") 
          console.log( sql )
          

          console.log('inserted: ' + fname + "  " + lname + "  " + email + "  "+ password) 

     })
    
    res.send("/api/post works"  + req.body.fname )

})

//  Read   (CRUD)
app.get("/api/read" , (req,res) => {

    const sql = "select * from member order by lname asc"
    db.query(sql, (err,result) => {

        console.log( result )
        res.send( result )  
    })


})


// Update (CRUD)
app.post("/api/update" , (req,res)=>{
 
  const fname = req.body.fname
  const lname = req.body.lname
  const email = req.body.email
  const password = req.body.password


  let sql = 'update member set '
  sql += "fname = " + quotes(fname) + ","
  sql += "lname=" + quotes(lname) + ","
  sql += "email=" + quotes(email) + ","
  sql += "password=" +  quotes(password) + " "
  sql += "where email= " + quotes(email)

  console.log( sql )
  
   db.query( sql , (err,result) => {
         
       console.log( sql )
       console.log( result )    

  })


})


// Deletr (CRUD)
app.post("/api/delete" , (req,res)=>{
 
  const email = req.body.email
  sql = "delete from member where email = " + quotes(email)
  console.log( sql)

  db.query( sql , (err,result) => {
         
       console.log( sql )
       console.log( result )    

  })

    res.send("/api/delete works"  + email )

})

app.listen(3001, () =>{

    console.log("running on port #3001")

})


