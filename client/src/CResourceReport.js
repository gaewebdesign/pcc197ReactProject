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
            let resourceValue = "ERR"
             try{

               resourceValue = resourceid[idx-1].value                

             }catch{
               console.log("index err")
             }

           return(
               <span>
                   {resourceValue }
               </span>
           )

      }
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
            <td>Owner</td>
            <td>Count </td> 
            <td>Resource</td>               

            </tr>
           </thead>
        { resource?.map(
            
            (d) =>
               <tr>
                 <td>{d.ownerid} </td>
                 <td>{d.count } </td>
                 <td>{ResourceValue(d.prime)} </td>
               </tr>  

            ) 
            
        }           
        
        </table>
        <p/>
        <hr/>
        </div> 
   )
}

export {CResourceReport}


