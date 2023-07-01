
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
   let sql = "insert into resource(resourceid,ownerid,name,prime,secondary,description,cap,dist,cost,unit,last)  values("
  
    sql += quotes( resourceid ) + ","
    sql += asValue( ownerid )+ ','
    sql += quotes( name )+ ','
    sql += asValue( prime)+ ','
    sql += asValue( secondary)+ ','
    sql += quotes( description)+ ','
    sql += quotes( cap)+ ','
  
    sql += asValue( dist)+ ','
    sql += asValue( cost)+ ','
    sql += asValue(unit)+ ','
    sql += asValue(last) 
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

      const wrap = (d) => "\"%" + d + "%\""

//    select all... followed by and clauses
      let sql = "select * from resource where _id>=1 "

     if(keyword) sql += " and description like " + wrap(keyword)
     if(distance) sql += " and dist <= " + distance 
     if(primaryf) sql += " and prime= " + primaryf 

     //sql += " limit 5"
     console.log("*************")
     console.log( keyword)
     console.log( distance )
     console.log( sql )
     console.log("*************")

      
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
        
        console.log( "SQL:" + sql)
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
 
 app.get('/api/getresource', (req,res) =>{
  //const sql = "select name,displayname,email,password from user order by _id"
  const sql = "select * from resource order by _id"

      db.query(sql, (err,result) =>{
         console.log( result )
         res.send( result )

      })

 })
 app.get("/api/categoryid" , (req,res) => {

   const sql = "select label, value from categoryid order by label"
   db.query(sql, (err,result) => {
      console.log(" getting category table ")
      console.log( result )

      res.send( result )  
  })


})

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


app.get('/', (req,res) => {

  res.send("<b>Working!</b>")

})


app.get('/test/user2', (req,res) => {

  res.send("<b>test/user works</b>")

})

// get the resource database
app.get("/api/dbresource" , (req,res) => {

  const sql = "select * from resource order by _id asc"
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

  const sql = "select * from incident order by _id asc"
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


