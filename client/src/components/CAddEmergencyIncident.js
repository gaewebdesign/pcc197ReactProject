import {React,useState, useEffect} from 'react'

 
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./AddResource.css"
import "./Component.css"
import {CFormInput} from "./CFormInput.js"
import {CPopUp} from './CPopUp.js'
import {CUnitCost} from './CUnitCost.js'

import Axios  from 'axios';
 
import * as CONSTANTS from '../pages/Constants.js'
import {epoch,epochtodate,random} from '../library/library.js'

const url_resourceid = CONSTANTS.url_resourceid
const url_categoryid = CONSTANTS.url_categoryid
const url_costid = CONSTANTS.url_costid



const Distance = [
   {label: 1 , value:"mile"}
]
const CAddEmergencyIncident =  (props) =>
{

    let myID = epoch()

    const ownerid = props.logger.ownerid // 999 // props.logger.name // "89999"
    // used just for display purpose
    // the owner can be identified by ownerid or name
    const owner = props.logger.name


    const [name, setResourceName] = useState('default')
    const [date, setDate] = useState( '1/1/1900')
    const [categoryid, setCategoryID] = useState( 99 )
    const [description, setDescription] = useState(" not done")

    const [lastcategoryindex, setLastCategoryIndex] = useState([])

    //  GET information from each Component
    const pullDate = (data)=>{  setDate(data) }  
    const pullDescription = (data)=>{  setDescription(data) }
    const pullSelectedCategory = (data) => { setCategoryID(data) }

//  get category label,value for pop-up menu
    const url_categoryid = CONSTANTS.url_categoryid
    
//  post to database
    const url_addincident= CONSTANTS.url_addincident
       
    // Load the last category index table (C1,C2,C3,C4)
    useEffect( ()=>{ fetcher() } ,[ ])
    function fetcher(){

       Axios.get(CONSTANTS.url_lastcategoryindex)
         .then(
              (response)=>{
                   setLastCategoryIndex( response.data )
                   console.log(" *** lastcategoryindex *** ")
//                 array of 1 row

                    console.log(" *** response.data  *** ")
                    console.log( response.data)
                    console.log(" *** response.data  *** ")

                    console.log(lastcategoryindex[0])
                   console.log(" *** lastcategoryindex *** ")
                   
                }
         ).catch(

             (response) => { alert(response)}
         )          
 
     } 


    // ***********************************************************
    const ReloadButton = (evt)=> {

           window.location.reload()

     }

    const SubmitButton=(evt) => {
    
        const email=""
        const pass="" 
        //  NOTE: the keys are the same as the database 
        // the server side has to match (req.body.owner)
        // do the resource id here, so it will be unique
        let incidentid =  "C#-"+  random(1,23)
        /*  TODO:  produce incidentid
            C1-#,C2-#,C3-#,C4-#
            and incremental #
        */

         console.log( "lastcategoryindex ")            
         console.log( lastcategoryindex)
         console.log( "lastcategoryindex ")            

         incidentid = "C" + categoryid +"-" 
         if(categoryid == 1) {
            incidentid += lastcategoryindex[0].cat1            
        }else if( categoryid == 2){
            incidentid += lastcategoryindex[0].cat2            
        }else if( categoryid == 3){
            incidentid += lastcategoryindex[0].cat3            
        }else if( categoryid == 4){
            incidentid += lastcategoryindex[0].cat4            
        }else{
            incidentid += "?"
        }

        console.log( url_addincident)
        Axios.post(url_addincident,{
          ownerid: ownerid,
          categoryid: categoryid,
          incidentid: incidentid,
          idate: date,
          description: description,

        } )
        .then(
            (response) => {  alert("Data entered: " + response.status)     }
        ).catch(
            (error) => {  alert("Data error, check data field: " + error)   }
     
        )

        // Increment the last value for index C1,C2,C3,C4
        Axios.post( CONSTANTS.url_lastcategoryincrement,{
            index: categoryid
        })
        .then(
            console.log("good")
        ).catch(
            (error) => {  alert("Data " + CONSTANTS.url_lastcategoryindex + error)   }

        )
             




     
    }

    return(
     <div>

       <p/>
       
       <div class="container-sm Function">

        <div class="row">
         <div class="col-sm-3 ">
          <p><b>Add Emergency Incident</b> </p>
        </div>
        <div class="col-sm-9 ">
        <button type="button" class="btn btn-dark pull-right"
            onClick = {ReloadButton}        
        >+</button>

        </div>
      </div>
      </div>
       
      
       <CPopUp name="-Category" url={url_categoryid} 
       func = {pullSelectedCategory}
       />

       <CFormInput name="-Date" id="date" placeholder="6/11/2023" func={pullDate}/>       
       <CFormInput name="-Description" id="desc" placeholder="-Desc-" func={pullDescription}/>


       <p/>
       <hr/>

       <div class="container-sm">
       <div class="row">
       <div class= "col-sm-9"></div>

       <div class= "col-sm-3">
       <button type="button" 
           class="btn btn-primary"
           onClick = {SubmitButton}
        >Save to DB</button>
       </div>
 
       </div>
       </div>
     
       </div>
       
    )

}


export {CAddEmergencyIncident}