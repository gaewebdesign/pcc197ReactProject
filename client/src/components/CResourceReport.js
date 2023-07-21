import {React,useState, useEffect} from 'react'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//import "./AddResource.css"
//import "./Component.css"

import Axios  from 'axios';
 
import * as CONSTANTS from '../pages/Constants.js'

// props contains all the user information
const CResourceReport = (props) =>{

    const[ resource , setResourceReport] = useState([])
    const[ resourceid, setResourceID] = useState([])

    useEffect( () => { fetcher()} , [])
    useEffect( () => {fetchResourceID()} , { } )

    const url = CONSTANTS.url_resourcereport
    const url_resourceid = CONSTANTS.url_resourceid
/*
    the props contains all the logged User information
    Just need to extract the ownerid value

*/
  const theOwnerID = props.logger.ownerid  
  if( theOwnerID == undefined){
       console.log(" ********************************************")
       console.log("WARNING!: the ownerid is UNDEFINED")
       console.log("WARNING!: this shouldnt cause an error, except")
       console.log("WARNING!: no data willbe returned from the SQL command")
       console.log("WARNING!: and the table results will be empty")
       console.log(" *******************************************")

  }

  function fetcher(){
        
        Axios.post(url,{
            ownerid: theOwnerID   // this is all the server needs to return information
        })
          .then(
               (response)=>{
                    console.log( response.data)

                    setResourceReport( response.data )
               }
          ).catch(
              (response) => { alert(response)}
          )          
  
      } 

      // return[ resourceID
      function fetchResourceID(){
        
        Axios.get(url_resourceid)
          .then(
               (response)=>{
                    console.log( response.data)

                    setResourceID( response.data )
               }
          ).catch(
              (response) => { alert(response)}
          )          
  
      }      


      const ResourceValue=(idx)=>{
             let finder
             let rValue = "ERR"
             try{

              console.log( "*** resourceid *** ")
              console.log( resourceid)
              console.log( "*** resourceid *** ")

               finder= resourceid.find( ({label}) => label == idx )
              if(finder){
                   console.log("*** found " + finder.value + "found ****")
              }

             }catch{
               console.log("index err")
             }

           return(
               <span>
                   {finder.value }
               </span>
           )

      }

      // create menu with count=0
      // then fill the actual count values
      // theOwnerID is hard-coded for this test case
      // menu.push({ ownerid:ownerid, prime:d.label , count:0   })
      let menu = []
                 resourceid?.map(
             (d) => {
                   menu.push( {ownerid:theOwnerID ,prime: d.label , count:0} )
             }             )


//    map through the resources and if theres a match, add the count
      resource?.map(
           (d) => {
                console.log( d.ownerid , d.prime , d.count)
                 try{
                       menu.find( v => v.prime == d.prime  ).count=d.count     
                     }catch(err){
                       console.log( "no prime")
      
                     }
      
                  }
      
          )

      let xtotal=0
      return(
        <div>
        <center/>
        
        <div class="container-sm" >

        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-6"> <h2>Resource Report</h2></div>
        <div class="col-sm-1"> </div>
        <div class="col-sm-2"><h2><b>i</b></h2></div>    
        <div class="col-sm-1"><h2></h2></div>
        </div>
        </div>

         <table class="DBTable Center">
           <thead>
            <tr>
            <td>Primary Function #</td>
            <td>Primary Function </td> 
            <td>Total Resources</td>               

            </tr>
           </thead>
        { menu?.map(
            
            (d) => (
               <tr>
                 <td>{d.prime} </td>
                 <td>{ResourceValue(d.prime)} </td>
                 <td>{d.count } </td>
                 </tr>  

              )
             
            ) 
            
        }           

        
        {
           menu?.map(
                (d) => {
                    xtotal += d.count

                }

             )
          
        }
        <tr>.                 .</tr>
        <tr>
        <td>      </td>
        <td>  Total    </td>
        <td> {xtotal}     </td>

        </tr>
        
        </table>        
        
        
        
        <p/>
        <hr/>
        </div> 
   )
}

export {CResourceReport}