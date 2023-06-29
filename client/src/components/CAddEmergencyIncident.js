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

const url_resourceid = CONSTANTS.url_resourceid
const url_categoryid = CONSTANTS.url_categoryid
const url_costid = CONSTANTS.url_costid



const Distance = [
   {label: 1 , value:"mile"}
]
const CAddEmergencyIncident =  (props) =>
{

    // TODO owner is the ID of the person logged in
 
    let myID = "R-" +  Math.floor(+new Date() / 1000)
    myID = Math.floor(new Date()/1000)

    const ownerid = 999 // props.logger.name // "89999"
    // used just for display purpose
    // the owner can be identified by ownerid or name
    const owner = props.logger.name

    const [name, setResourceName] = useState('default')
    const [date, setDate] = useState( '1/1/1900')
    const [categoryid, setCategoryID] = useState( 99 )
    const [description, setDescription] = useState(" not done")

//  GET information from each Component
    const pullDate = (data)=>{  setDate(data) }  
    const pullDescription = (data)=>{  setDescription(data) }
    const pullSelectedCategory = (data) => { setCategoryID(data) }

//  get category label,value for pop-up menu
    const url_categoryid = CONSTANTS.url_categoryid
    
//  post to database
    const url_addincident= CONSTANTS.url_addincident
        
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
        let actual =   Math.floor(+new Date() / 1000)
        actual =  new Date().getTime()

        console.log( url_addincident)
        Axios.post(url_addincident,{
          ownerid: ownerid,
          categoryid: categoryid,
          incidentid: actual,
          idate: date,
          description: description,

        } )
        .then(
           (response) => {  alert("Data entered: " + response.status)     }
        ).catch(
           (error) => {  alert("Data error, check data field: " + error)   }
     
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