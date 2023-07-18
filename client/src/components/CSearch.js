import {React,useState, useEffect} from 'react'

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
/*
import "./AddResource.css"
import "./Component.css"
*/
import {CFormInput} from "./CFormInput.js"
import {CPopUp} from './CPopUp.js'
import {CPopUpAppend} from './CPopUpAppend.js'

import { CDatePicker } from './CDatePicker.js';

import Axios  from 'axios';
 
import * as CONSTANTS from '../pages/Constants.js'

import {epochtodate} from '../library/library.js'

import "../pages/Page.css"

const url_search = CONSTANTS.url_search
const url_resourceid = CONSTANTS.url_resourceid



//useEffect( () => ( fetcher() } , [ ] )

const CSearch =  (props) =>
{

//    const ownerid = 999 // props.logger.name // "89999"
    // used just for display purpose
    // the owner can be identified by ownerid or name
//    const owner = props.logger.name

    const [keyword, setKeyword] = useState( '-9')
    const [primaryfunctionid, setPrimaryFunctionID] = useState( -1 )
    const [distance, setDistance] = useState( 99 )

    const [epochDate ,    setEpochDate ] = useState(946709935 )

//  GET information from each Component
    const pullKeyword = (data)=>{  setKeyword(data) }  
    const pullPrimaryFunctionID = (data)=>{  setPrimaryFunctionID(data) }
   // const pullIncidentID = (data)=>{  setPrimaryFunction(data) }
    const pullDistance = (data)=>{  setDistance(data) }
    
    const pullEpochDate = (data)=>{  setEpochDate(data) }


    const [searchResults , setSearchResults] = useState ([])        
    

    const [unitList, setUnitList] = useState([] )
    useEffect(()=>{ fetch_units() }, [ ] )
    function fetch_units(){
        Axios.get(CONSTANTS.url_units )
          .then(
               (response)=>{
                    setUnitList( response.data )
               }
          ).catch(
              (response) => { alert(response)}
          )          
      }

      // Get the unit name from the costid
      const toUnits = (_label) => {
                try{
                    const finder = unitList.find(({ label }) => label == _label);
                    console.log("units" + finder.value)
                    return finder.value
                 }catch{
                console.log("WARNING: CSearch.js try...catch to prevent a possible crash")
               }
        }
    // **********************************************************
    // Get all the users from the database
    const [ userList , setUserList] = useState([])
    useEffect(()=>{ fetch_users() }, [ ] )
    
    function fetch_users(){
        Axios.get(CONSTANTS.url_getusers )
          .then(
               (response)=>{
                    setUserList( response.data )
               }
          ).catch(
              (response) => { alert(response)}
          )          
      }  

      // Get the name from the ownerid
      const OwnerIdName = (_ownerid) => {
            try{
                const finder = userList.find(({ ownerid }) => ownerid == _ownerid);
                console.log("OwnerIdname " + finder.name)
                return finder.name
             }catch{
            console.log("WARNING: CSearch.js try...catch to prevent a possible crash")
           }
    }

    OwnerIdName(1003)
    // ***********************************************************
    const ReloadButton = (evt)=> {

        window.location.reload()

     }

     const Results = () => {
        return(
            <div>
            <center/>
            <h2>Database</h2>
             <b>Resource</b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>Resource ID</td>
                <td>[Date]</td>
                <td>Resource Name</td>
                <td>Owner</td>
                <td>Primary ID</td>
                <td>Description</td>
                <td>Capabilities</td>
                <td>Cost/Unit</td>
                <td>Distance</td>
                </tr>
               </thead>
            { searchResults?.map(
                
                (d) =>
                <tr>
                <td>{d.resourceid} </td>
                <td>{epochtodate(d.resourceid)} </td>
                <td>{d.name} </td>
                <td>{OwnerIdName(d.ownerid)} </td>
                <td>{d.prime}</td>
                <td>{d.description}</td>
                <td>{d.cap}</td>
                <td>{d.cost} /                                
                {toUnits(d.unit)} </td>                                
                <td>{d.dist}</td>
                </tr>  
                
                ) 
                
            }           

            
            </table>
            </div> 

       )
 
        }
    
    /* COMPONENT  ****************************************************
       first usage as component
       USED BELOW AS <CSubmit/>
    */
    const CSubmit = (props)=>{
     
         return(
                <div class="container-sm">
                    <div class="row">
                    <div class= "col-sm-6"></div>


                    <div class= "col-sm-3">  
                    <button type="button" 
                    class="btn btn-secondary"
                    onClick = {props.CancelButton}
                     >{props.cancel}</button>

                    </div>
 
                        <div class= "col-sm-3">
                        <button type="button" 
                            class="btn btn-primary"
                            onClick = {props.Searcher}
                             >{props.search}</button>
                        </div>
  
                    </div>
                </div>
        )   

    }
    // COMPONENT  ****************************************************

    const CancelButton = (evt) => {
        window.history.back()
    }


    const Searcher=(evt) => {
    
        console.log( url_search)

        // primaryfunctionid is pulled from the component
        let search = "(" + keyword + "),(menu:" + primaryfunctionid + "),(dist)"  + distance
       // alert("search:" + search )
        
        Axios.post(url_search,{
          
          keyword: keyword,
          primaryf: primaryfunctionid,
//        incident: incident,
          epoch: epochDate,
          distance: distance

        } )
        .then(
           (response) => {  
//          alert("Data entered: " + response.status)
            console.log( response.data)
            setSearchResults( response.data )
        }
        ).catch(
           (error) => {  alert("Data error, check data field: " + error)   }
     
        )
     
    }

    return(
     <div>

       <p/>
       <span class="BlueNote">

       Searching for : keyword:{keyword} primary function:{ primaryfunctionid } distance: &lt; { distance}
       </span>

       <div class="container-sm Function">

        <div class="row">
         <div class="col-sm-3 ">
          <p><b>Search Resources</b> </p>
        </div>
        <div class="col-sm-9 ">
        <button type="button" class="btn btn-dark pull-right"
            onClick = {ReloadButton}        
        >+</button>

        </div>
      </div>
      </div>
       
      <CFormInput name="-Keyword" id="keyword"  func={pullKeyword}/>       
      <CPopUpAppend name="-Primary Function" url={url_resourceid}  func = {pullPrimaryFunctionID} />
{/*
      <CFormInput name="-Incident" func={pullIncidentID}/>
*/}
      <CDatePicker name = "-After date " func={pullEpochDate}/>
      <CFormInput name="-Distance from PCC" func={pullDistance}/>

       <p/>
       <hr/>
       <CSubmit cancel="Cancel" search="Search" Searcher={Searcher} CancelButton={CancelButton}/>
     
       <hr/>
       <Results />

       </div>

       
    )

}


export {CSearch}