import {React,useState, useEffect} from 'react'

 
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


import Axios  from 'axios';
 
import * as CONSTANTS from '../pages/Constants.js'

const url_search = CONSTANTS.url_search
const url_resourceid = CONSTANTS.url_resourceid



//useEffect( () => ( fetcher() } , [ ] )

const CSearch =  (props) =>
{

    const ownerid = 999 // props.logger.name // "89999"
    // used just for display purpose
    // the owner can be identified by ownerid or name
    const owner = props.logger.name

    const [keyword, setKeyword] = useState( '9keyword')
    const [primaryfunctionid, setPrimaryFunctionID] = useState( 9 )
    const [incident, setIncident] = useState( 9)
    const [distance, setDistance] = useState( 9 )

//  GET information from each Component
    const pullKeyword = (data)=>{  setKeyword(data) }  
    const pullPrimaryFunctionID = (data)=>{  setPrimaryFunctionID(data) }
   // const pullIncidentID = (data)=>{  setPrimaryFunction(data) }
    const pullDistance = (data)=>{  setDistance(data) }
    
    const [searchResults , setSearchResults] = useState ([])        
    
    // TODO: REALLY need a custom hook here!
    // **********************************************************
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

            // Get the name from the ownerid
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
                <td>Resource Name</td>
                <td>Owner</td>
                <td>Cost/Unit</td>
                </tr>
               </thead>
            { searchResults?.map(
                
                (d) =>
                <tr>
                <td>{d.resourceid} </td>
                <td>{d.name} </td>
                <td>{OwnerIdName(d.ownerid)} </td>
                <td>{d.cost} /                                
                {toUnits(d.unit)} </td>                                
                </tr>  
                ) 
                
            }           

            
            </table>
            </div> 

       )
 
        }
    
    // COMPONENT  ****************************************************
    // USED BELOW AS <CSubmit/>
    const CSubmit = (props)=>{
     
         return(
                <div class="container-sm">
                    <div class="row">
                        <div class= "col-sm-9"></div>
 
                        <div class= "col-sm-3">
                        <button type="button" 
                            class="btn btn-primary"
                            onClick = {props.onClick}
                             >{props.text}</button>
                        </div>
  
                    </div>
                </div>
        )   

    }
    // COMPONENT  ****************************************************
    const SubmitButton=(evt) => {
    
        console.log( url_search)
        const search = "(" + keyword + ")," + pullPrimaryFunctionID + "," + incident + ", " + distance
//      alert("search:" + search )
        
        Axios.post(url_search,{
          
          keyword: keyword,
          primaryf: primaryfunctionid,
          incident: incident,
          distance: distance
        } )
        .then(
           (response) => {  
            alert("Data entered: " + response.status)
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
      <CPopUp name="-Primary Function" url={url_resourceid}  func = {pullPrimaryFunctionID} />
{/*
      <CFormInput name="-Incident" func={pullIncidentID}/>
*/}
      <CFormInput name="-Distance" func={pullDistance}/>

       <p/>
       <hr/>
       <CSubmit text="Search" onClick={SubmitButton}/>
     
       <hr/>
       <Results />

       </div>

       
    )

}


export {CSearch}