// Generae random resource 

/* 1-5 User

dates: 2010-2023
primary  1-6 items

*/
function convert(epoch ){

     let month=["Jan","Feb","March","April","May","June","July","August",
      "Sept","Oct","Nov","Dec"]
     t = new Date(0)
     t.setMilliseconds(epoch)

     let  day = t.getUTCDate();
     month = month[t.getMonth()]
     let year = t.getFullYear();

     return epoch
//     return( t.getMonth() + ":" + month + " " + day + " " + year )
}

const  RANGE = (max) => { return Math.floor( Math.random() * max) + 1}

function epoch(){
      let min = new Date('1-1-2010').getTime()
      let max = Date.now()
      let e =  Math.random() * (max - min) + min
      return  Math.floor(e)


}
function start(){

     let min = new Date('1-1-2010').getTime()
     let max = Date.now()

     console.log("estart: " + min)
     console.log("end:    " + max)
 
     let epoch,d
     for( i=0 ; i< 10 ; i++){
        epoch = Math.random() * (max - min) + min
        d = convert( epoch)
        console.log( d )

      }

}


// start()

function sql(){

}

function resourcepage(dpoch,ownerid,xname,primary,seconday,description,capabilities,distance,cost,perunit,last){



}

e=epoch()
ownerid=1
xname= "Accident"
primary = 1
secondary = 2
description = "DESC:"
capabilities = "CAP:"
distance = 1
cost=5
perunit = 1
last = 0

const quotes = (q) => { return( "'"  + q + "'" ) }

let Accident = [
           "Acc: Car",
           "Acc: Industrial",
           "Acc: Scooter",
           "Acc: Bicycle",
           "Acc: Chemical",
           "Acc: Physics Lab",                      
           "Acc: Biological",           
           "Acc: Football",           
           "Acc: Break-in",
           "Acc: Theft",           
           "Acc: Computer"           

]

let Capabilities = [
      "Pasadena Police",
      "Campus",
      "Security",
      "Feds",
      "Chemical",
      "Mayor",                      
      "CID",           
      "A&E",           
      "CCPCC",
      "DOS"           

]


let Description = [
      "Morning",
      "on Campus",
      "off Campus",
      "Undergradute",
      "Graduate"

]

// these are the specific owner IDs put into the database
let OwnerID = [
   1001,1002,1003,2002,2003,2005,3003,3004,3005

]


// grab random from array
function Item( theArray){
//          console.log( theArray.length )

          let e =  Math.floor(Math.random() * theArray.length)
          
          return  theArray[e]

}

//console.log( Item ( Accident ))

function resourcepage(epoch,ownerid,xname,primary,secondary,description,capabilities,distance,cost,unit,last){
      function epoch(){
            let min = new Date('1-1-2010').getTime()
            let max = Date.now()
            let e =  Math.random() * (max - min) + min
            return  Math.floor(e)
      
      
      }
      function row(ownerid,xname,primary,secondary,description,capabilities,distance,cost,unit,last){ 
      let e = epoch()
      let sql = "("       
      sql +=  quotes( e ) + ","   
      sql +=  quotes( ownerid ) + ","   
      sql +=  quotes( xname ) + ","   
      sql +=  quotes( primary) + ","   
      sql +=  quotes( secondary) + ","   
      sql +=  quotes( description )   + ","
      
      sql +=  quotes( capabilities )   + ","
      sql +=  quotes( distance )   + ","
      sql +=  quotes( cost )   + ","
      sql +=  quotes( unit )   + ","
      sql +=  quotes( last )  
      
      sql += ")"

      return sql      
}

     sql = "insert into `resource` \n"
     sql += "(resourceid ,ownerid,name,prime,secondary,description, cap,dist,cost,unit,last) \n" 
     sql += "values \n"
     
     for (let i = 0; i <= 15; i++) {
        for( let idx=0 ; idx<OwnerID.length ; idx++){
            ownerid = OwnerID[idx]
            xname = Item(Accident)
            primary = RANGE(6)
            secondary = RANGE(6)
            capabilities = Item(Capabilities)
            description = Item(Description)
            distance = RANGE(5)
            cost = RANGE(11)
            unit = RANGE(4)         
            last = RANGE(11)         

            sql += row(ownerid,xname,primary,secondary,description,capabilities,distance,cost,unit,last) + ",\n"
       }

      }
      sql += row(ownerid,xname,primary,secondary,description,capabilities,distance,cost,unit,last) 

      console.log( sql )

}

//Item(Accident)
resourcepage(e,ownerid,xname,primary,secondary,description,capabilities,distance,cost,perunit,last)