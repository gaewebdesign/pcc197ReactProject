
import './App.css';

import * as CONSTANTS from './pages/Constants.js'

import React from 'react'
import Axios from 'axios'

import {BrowserRouter , Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

import {useState , useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import {CAddResource } from './components/CAddResource.js'
import {CAddEmergencyIncident} from './components/CAddEmergencyIncident.js'
import {CSearch} from './components/CSearch.js'
import {CResourceReport} from './components/CResourceReport.js'

// show Database contents
import {LoginPage} from './pages/LoginPage.js'
import {LoginPageJWT} from './pages/LoginPageJWT.js'
import {ResourcePage} from './pages/ResourcePage.js'
import {UserPage} from './pages/UserPage.js'

import {CurrentInfoPage} from './pages/CurrentInfoPage.js'

import {LoggerPage} from './pages/LoggerPage.js'

import {IncidentPage} from './pages/IncidentPage.js'

import {ResourceID,CategoryID, CostID} from './pages/Menu.js'

// Test Routines
import {TestTestBox} from './test/TestTextBox.js'
import {TestOptions} from './test/TestOptions.js'
import {TestFormInputComponent} from './test/TestFormInputComponent.js'
import {TestPopUpComponent} from './test/TestPopUpComponent.js'

//import {TestClearValue} from './test/TestClearValue.js'
import {TestUnitCostComponent} from './test/TestUnitCostComponent.js'
import {TestDefaultSelect}  from './test/TestDefaultSelect.js'
import {TestJWT}  from './test/TestJWT.js'
import {TestAxiosHook}  from './test/TestAxiosHook.js'

/*
https://blog.logrocket.com/react-router-v6-guide/
       npm install react-router-dom
*/
class Getinfo extends React.Component {
    constructor(){
         super()

    }
    componentDidMount(){
           console.log("componentDidMount")
            alert("GetInfo")
    }

    render(){
      return(
        <div>DDD</div>
      )

    }

}

const n = new Getinfo()

function App() {

  
  const [ user, SetUser]  = useState("user")
  const [ name, SetName]  = useState("Elon Muak")
  const [ loggedIn, setLoggedIn] = useState(false)
  const [logger , SetLogger] = useState({ })
  
  /*
  const [ owner, SetOwner]  = useState(" Zuck")
  const [ roleid , SetRoleID] = useState(999)
  const [ email, SetEmail] = useState(" **email**")  
  const [ phone, SetPhone] = useState(" 999 ")  
  */
  
  const ImLoggedIn = (info) => {
   // Set who's logged in
        alert("logged in:" + info.roleid + " " + info.user + " " + info.ownerid + " " + info.name)
          SetLogger( info )

         // local storage settings
          setLoggedIn (true )
          localStorage.setItem("loggedin", true)

          localStorage.setItem("info", JSON.stringify(info))
          console.log( JSON.parse(localStorage.getItem("info")))

          // Save the current person logged in
          Axios.post(CONSTANTS.url_logger,{
          ownerid: info.ownerid,
          epoch: new Date().getTime()

        })
        .then(
           (response) => {  console.log(response)   }
        ).catch(
           (error) => {  alert("ERROR: " + error)   }
     
        )
        // *******************
         Axios.get(CONSTANTS.url_currentinfo , {})
           .then( response  => { 
            console.log("CURRENT USER " + CONSTANTS.url_current)
//            console.log(response)
            console.log("CURRENT USER " + CONSTANTS.url_current)

                  
          })
           .catch(
            (error => { alert("ERR: " + error)})
           )
           
        // ******************** /
   }


   const AmILoggedIn = () => {

    return localStorage.getItem("loggedin")


   }

  const ExitButton = (evt) => {
       
       localStorage.removeItem("loggedin")
       window.location.reload()


}

const CreateIncident = (props) => {
  return(
      <div>
        <h2>CreateIncident</h2>
      </div>

  )


}

const ReadMePage = (props) => {

/*

  roleid: {props.logger.roleid}<br/>
            user: {props.logger.user}<br/>
            name:  {props.logger.name} <br/>
            email:  {props.logger.email} <br/>
            phone:  {props.logger.phone} <br/>
            address:  {props.logger.address} <br/>
            city:  {props.logger.city} <br/>
            zip:  {props.logger.zip} <br/>
*/  
  return(
            <div>
            <h1>Read Me</h1>
             <b>FIX</b><br/>
             fix anywhere a drop-down menu is used (in the component?)<br/>
             this occurs becase onChange() doesnt get executed<br/>
             selection menu, although there can be default selection, <br/>
             the return value is undefined unless useState has a default value

             <hr/>
             <b>pages/Constants.js</b> file contains <br/>
             debug= true (or false) to toggle debug output<br/>
             endpoint urls , default is port #3001<br/>

             <p/>
             <b>Test(toggled with debug=false or true)</b> <br/>
             Database panel contains the database information <br/>
             Test panel contains routines to test individual components <br/>
             <p/>
             <b>Setup</b><br/>
             server/pasadena.sql to initialize database pasadena <br/>
             mysql -uroot -pPassword &lt; pasadena.sql <br/>

             <p/>
             NOTES for final report
             in user table column 'user' is UNIQUE, used to identify searches
             columns that require at least one character entry are NOT NULL 


            </div>


      )


}

const Database = () => {
     if(CONSTANTS.DEBUG == true){
         return(
              <div>
              <li><Link to="/dbresource"> Resources </Link></li>
              <li><Link to="/dbuser"> User </Link></li>
              <li><Link to="/dblogger"> Logger </Link></li>

              <li><Link to="/currentinfo"> Current Info </Link></li>

              <li><Link to="/dbincident"> Incident </Link></li>  
              <li><Link to="/dbcategoryid"> CategoryID </Link></li>
              <li><Link to="/dbresourceid"> ResourceID </Link></li>
              <li><Link to="/dbcostid"> CostID </Link></li>
              </div>
         )

     }

     return(
        <div></div>

     )

}
const TestRoutines = () =>{
     if(CONSTANTS.DEBUG == true){
         return(
                  <div>
                    <b>Test Routines</b>
                    <li><Link to="/test1"> Test Create User (e2e) </Link></li>
                    <li><Link to="/test2"> Test Options (e2e)  </Link></li>
                    <li><Link to="/test3"> Test Form Component (insert into onUser) </Link></li>
                    <li><Link to="/test4"> Test PopUp Component(e2e) </Link></li>
                    <li><Link to="/test5"> Test Unit Cost Component </Link></li>
                    <li><Link to="/test6"> Test Default Menu Select </Link></li>
                    <li><Link to="/test7"> Test JWT </Link></li>
                    <li><Link to="/test8"> Test Axios Hook </Link></li>
                  </div>                  
     
         )

     }

     return(
          <div>
          <b>Test Routines</b>
          </div>

     )

}


const NavigationPage = (props)=> {

       return(
             <div>
             <center>
             
             <ul class="no-bullets">

             <li><Link to="/test">  Read Me</Link> </li>
             <li><Link to="/caddresource">  AddResource</Link> </li>
             <li><Link to="/caddemergency">  Add Emergency Incident</Link> </li>
             <li><Link to="/csearch">  Search</Link> </li>
             <li><Link to="/cresourcereport">  Resource Report</Link> </li>


             <button type="button" 
                   class="btn btn-primary"
                   onClick = {ExitButton}
                  >Exit
             </button>
                
             <hr/>
                <div class="container-sm">
                  <div class = "row">
                  <div class="col-sm-6 "> 
                   <b>Database Tables</b>
                       <Database/>
                   </div>
                   <div class="col-sm-6">
                      <TestRoutines/>
                  </div>                  

                  </div>
                </div>
                <hr/>
             </ul>
             </center>
             </div>

       )
    

}

const LoggedInStrip = (props) => {

  return(
    <div>
        <div class="container-sm LoggedInStrip ">
          <div class="row">
              <div class="col-sm-4 ">Logged In: {props.name} </div>
              <div class="col-sm-8"></div>
          </div>
        </div>
    </div> 
  )
}
  const CIMTStrip = (props) => {
    /*
       CIMT Users: phone number
       Resource Provides: US Postal Address
       System Admin: email
    */

    // TODO allow for additional roles
    let info = <div>Unknown Role</div>
    if(props.logger.roleid==1){
      info= <div>{props.logger.name}<br/>{props.logger.phone}<br/>CIMT User<br/>*{props.logger.ownerid}*</div>
    }else if(props.logger.roleid==2){
      info= <div>{props.logger.name}<br/>{props.logger.address}<br/>
      {props.logger.city}<br/>{props.logger.state}&nbsp;{props.logger.zip}<br/>Resource Provider<br/>*{props.logger.ownerid}*</div>
    }else if(props.logger.roleid==3){
      info= <div>{props.logger.name}<br/>{props.logger.email}<br/>Admin<br/>*{props.logger.ownerid}*</div>           
    }
      
    return(
      <div>
          <div class="container-sm CIMTStrip">
            <div class="row">
            <div class="col-sm-4 TextBox"> <h1>CIMT</h1></div>
            <div class="col-sm-4 TextBox"> </div>
            <div class="col-sm-4"><b>{info}</b></div>
            </div>
          </div>
      </div> 
    )
  }

  const HomePage = (props) => {

       if( AmILoggedIn() ){
          return(
              <div>
                <LoggedInStrip logger={logger} />
                <CIMTStrip logger={logger}/>


              <BrowserRouter>
              <NavigationPage/>
              <Routes>
              <Route path="/test" element={<ReadMePage logger={logger}/>} />

              <Route path="/caddresource"  element={<CAddResource logger={logger}/>} />
              <Route path="/caddemergency"  element={<CAddEmergencyIncident logger={logger}/>} />
              <Route path="/csearch"  element={<CSearch logger={logger}/>} />
              <Route path="/cresourcereport"  element={<CResourceReport logger={logger}/>} />
               
               
              <Route path="/dbresource"  element={<ResourcePage/>} />
              <Route path="/dbuser"  element={<UserPage/>} />   

              <Route path="/currentinfo"  element={<CurrentInfoPage/>} />   
              
              <Route path="/dblogger"  element={<LoggerPage/>} />   

              <Route path="/dbincident"  element={<IncidentPage/>} />                            
              <Route path="/dbcategoryid"  element={<CategoryID/>} />                            
              <Route path="/dbresourceid"  element={<ResourceID/>} />                            
              <Route path="/dbcostid"  element={<CostID/>} />                            
              
              <Route path="/test1"  element={<TestTestBox/>} />
              <Route path="/test2"  element={<TestOptions/>} />
              <Route path="/test3"  element={<TestFormInputComponent/>} />
              <Route path="/test4"  element={<TestPopUpComponent/>} />
              <Route path="/test5"  element={<TestUnitCostComponent />} />
              <Route path="/test6"  element={<TestDefaultSelect />} />              
              <Route path="/test7"  element={<TestJWT />} />
              <Route path="/test8"  element={<TestAxiosHook />} />

              </Routes>
              </BrowserRouter>

              </div>

          )}else{
             return(
                <div>
                 <LoginPageJWT func = {ImLoggedIn}/>
                </div>
             )
          }


    }

    return (
    <div className="App">
           <h1>Pasadena City College </h1>
           
           <HomePage logged = {loggedIn} user={user} name={name}/>

    </div>
  );
}

export default App;

