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
import {CDatePicker} from './CDatePicker.js'

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
    const [date, setDate] = useState( )
    const [category, setCategory] = useState()
    const [categoryid, setCategoryID] = useState()
    const [lastcat, setLastCat] = useState([ ] )
    const [description, setDescription] = useState(" not done")


    //  GET information from each Component
    const pullDate = (data)=>{  setDate(data) }  
    const pullDescription = (data)=>{  setDescription(data) }
    const pullSelectedCategory = (data) => { setCategoryID(data) }

//  get category label,value for pop-up menu
    const url_categoryid = CONSTANTS.url_categoryid
    
//  post to database
    const url_addincident= CONSTANTS.url_addincident
       
    // Load the last category index table (C1,C2,C3,C4)
    // this is to get the last value
    useEffect( ()=>{ fetcher() } ,[ ])
    function fetcher(){
       
       let url = CONSTANTS.url_categoryid
       Axios.get(url)
         .then(
              (response)=>{
                   setCategory( response.data )
                   console.log("## pulling entire category table  *** ")
                   console.log(category)
                   console.log( response.data)
                   console.log("** pulling entire categoryid table *** ")
                   
                }
         ).catch(

             (response) => { alert(response)}
         )          
 
     } 


    // ***********************************************************
    const ReloadButton = (evt)=> {

           window.location.reload()

     }

     const CancelButton = (evt) => {
        window.history.back()
   }
    const SubmitButton=(evt) => {
    
        //  NOTE: the keys are the same as the database 
        // the server side has to match (req.body.owner)
        let incidentid ="C"
        let last = 0
        category?.map(
            (option) => {
                if(option.label== categoryid) {
                    last=option.last
                    console.log(" found the label"+ option.label)
                }

                console.log(option.label + " -> " + categoryid)
            }
        )
        incidentid = "C"+categoryid + "-" + last

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

        console.log("*** *** ")
        console.log(CONSTANTS.url_lastcat_increment)
        console.log("category_id: " + categoryid)
        console.log("*** *** ")

        // Increment the last value for index C1,C2,C3,C4
        Axios.post(CONSTANTS.url_lastcat_increment ,{
            label: categoryid
        })
        .then(
            console.log("good")
        ).catch(
            (error) => {  alert("Data " + CONSTANTS.url_lastcat_increment + error)   }
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

       <CDatePicker name="-Date" id="date"  func={pullDate}/>       

       <CFormInput name="-Description" id="desc" placeholder="-Desc-" func={pullDescription}/>


       <p/>
       <hr/>

       <div class="container-sm">
       <div class="row">
       <div class= "col-sm-6"></div>
       
       <div class= "col-sm-3">
   
       <button type="button" 
           class="btn btn-secondary"
           onClick = {CancelButton}
        >Cancel</button>       


       </div>


       <div class= "col-sm-3">
       <button type="button" 
           class="btn btn-primary"
           onClick = {SubmitButton}
        >Save</button>
       </div>
 
       </div>
       </div>
     
       </div>
       
    )

}


export {CAddEmergencyIncident}