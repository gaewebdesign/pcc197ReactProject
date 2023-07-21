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

import {CPrimarySecondary} from './CPrimarySecondary.js'

import Axios  from 'axios';
 
import * as CONSTANTS from '../pages/Constants.js'

const url_resourceid = CONSTANTS.url_resourceid
const url_categoryid = CONSTANTS.url_categoryid
const url_costid = CONSTANTS.url_costid



const Distance = [
   {label: 1 , value:"mile"}
]
const CAddResource =  (props) =>
{

    // TODO owner is the ID of the person logged in

 
    let myID = "R-" +  Math.floor(+new Date() / 1000)
    myID = Math.floor(new Date()/1000)


    // used just for display purpose
    // the owner can be identified by ownerid or name
    const owner = props.logger.name

    const [ resourceid] = useState(myID)
    const [resource, setResource] = useState()
    //const [ownerid , setOwnerID] = useState(8888)
    const [name, setResourceName] = useState('default')
    
    const [prime, setPrime] = useState( 99999 )
    const [secondary, setSecondary] = useState(99999)

    const [description, setDescription] = useState(" not done")
    const [capabilities, setCapabilities] = useState(" not done")
    const [distance, setDistance ] = useState(99999)
    const [cost, setCost ] = useState(99.99)
    const [unit, setUnit ] = useState(99999)
    const [last, setLast ] = useState(99999)

    const [costMenuItem , setCostMenuItem ] = useState(9999)
    const [costText ,    setCostText ] = useState( "9999" )


//  GET information from each Component
    const pullName = (data)=>{  setResourceName(data) }  
    const pullDescription = (data)=>{  setDescription(data) }
    const pullCapabilities = (data)=>{  setCapabilities(data) }
    const pullDistance = (data)=>{  setDistance(data) }
    

    const pullSelectedPrimaryMenu = (data) => { setPrime(data) }
    const pullSelectedSecondaryMenu = (data) => { setSecondary(data) }

    const pullMenuItem = (data)=> { setCostMenuItem(data) }
    const pullCostText = (data)=> { setCostText(data) }
//  const pullCost = (data)=>{  setCost(data) }


    // End points
    
    const url_resourceid= CONSTANTS.url_resourceid 
    const url = CONSTANTS.url_addresource    
    const url_cost = CONSTANTS.url_costid 

    // ***********************************************************
    const ReloadButton = (evt)=> {

           window.location.reload()


     }

    const CancelButton = () => {

//        alert("cancel")
        window.location.replace(window.location.href);

//        window.location.ref = window.location.ref
//        window.history.back()

    }
    const SubmitButton=(evt) => {
    
        const email=""
        const pass="" 
        //  NOTE: the keys are the same as the database columns( owner,prime, etc.)    
        // the server side has to match (req.body.owner)
        // do the resource id here, and it will be unique
        let actual =   Math.floor(+new Date() / 1000)
        actual =  new Date().getTime()

        // setting ownerid --this comes in through props from App.js
        // do it here to make more obvious (rather than using useState)
        // is set to 9999 in setState()
        // so if owner is 9999 then something went wrong
//        setOwnerID(props.logger.ownerid )
        const ownerid = props.logger.ownerid

//
        Axios.post(url,{
          resourceid: actual, // set here ... is not the same shownin UI
          ownerid: ownerid,
          name: name,
          prime: prime,
          secondary: secondary,
          description: description,
          cap : capabilities,
          dist: distance ,
          cost: costText , 
          unit: costMenuItem 
        
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
          <p>New Resource Information </p>
        </div>
        <div class="col-sm-9 ">
        <button type="button" class="btn btn-dark pull-right"
            onClick = {ReloadButton}        
        >+</button>

        </div>
      </div>
      </div>
       
       <div class="container-sm Function">

        <div class="row">
         <div class="col-sm-3 ">
          <b>ID: {resourceid}<br/> (is of this form) </b>
          </div>
        <div class="col-sm-8"></div>
      </div>
      </div>


     <div class="container-sm Function">
                 <div class="row">
                 <div class="col-sm-4 TextBox"> Owner </div>
                 <div class="col-sm-8"><b>{owner}</b></div>
                 </div>
       </div>
       
       
       <CFormInput name="-Resource Name" id="resc" placeholder="-Resource -" func={pullName}/>
       {/* feed in url  dont use CPopUp (original version) 
           make the Axios call from witin the component
      */}
        <CPrimarySecondary 
         url = {CONSTANTS.url_resourceid }
         name="-Primary Function" name2="Secondary Function"
         func = {pullSelectedPrimaryMenu }
         func2 = {pullSelectedSecondaryMenu}
         />


 <CFormInput name="-Description" id="desc" placeholder="-Desc-" func={pullDescription}/>
       <CFormInput name="-Capabilities" id="cap" placeholder="-Cap-" func={pullCapabilities}/>
       <CFormInput name="-Distance" id="dist" placeholder="2" func={pullDistance}/>


       <CUnitCost name="-UnitCost" url={url_cost}  returnCostText={pullCostText}  returnMenuOption = {pullMenuItem }  />

  
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


export {CAddResource}