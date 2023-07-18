
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
import {RolePage} from './pages/RolePage.js'
import {CurrentInfoPage} from './pages/CurrentInfoPage.js'

import {LoggerPage} from './pages/LoggerPage.js'

import {IncidentPage} from './pages/IncidentPage.js'
//import {LastCat} from './pages/LastCat.js'

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
import {TestResourceReport}  from './test/TestResourceReport.js'

/*
https://blog.logrocket.com/react-router-v6-guide/
       npm install react-router-dom
*/
function App() {

  
  const [ user, SetUser]  = useState("user")
  const [ name, SetName]  = useState("Elon Muak")
  const [ loggedIn, setLoggedIn] = useState(false)
  const [logger , setLogger] = useState({ })

  const [toggleView, SetToggleView] = useState(true)
  
  useEffect(()=>{ getLocalStorage() }, [ ] )


  function getLocalStorage(){

    let logger = localStorage.getItem('logger')
          let loggedin = localStorage.getItem('loggedin')

          let roleid = localStorage.getItem("roleid" )
          let user = localStorage.getItem("user" )
          let ownerid = localStorage.getItem("ownerid")
          let name = localStorage.getItem("name")

 
          let password = localStorage.getItem("password" )
          let email = localStorage.getItem("email" )
          let phone = localStorage.getItem("phone" )
          let address = localStorage.getItem("address" )
          let city = localStorage.getItem("city" )
          let state = localStorage.getItem("state" )
          let zip = localStorage.getItem("zip" )

          let loggerInfo = {roleid: roleid, user:user, ownerid:ownerid,
            name: name, password:password, email:email,
            phone:phone, address: address, city:city, state:state, zip:zip
           }

          setLogger( loggerInfo)
          setLoggedIn(loggedin)

          console.log("loggedInfo: ****************************** ")
          console.log(  loggerInfo)
          console.log("loggedInfo: ****************************** ")


  } 


  const ImLoggedIn = (info) => {
   // Set who's logged in

         let html = "logged in: \n"
         html += "roleid: " + info.roleid + "user: " + info.user + " ownerid: " + info.ownerid + " " + info.name + "\n"
         html += info.password + " " + info.email + " " + info.phone + "\n"
         html += info.address + " " + info.city + " " + info.state + " " + info.zip 
         alert(html )

         setLoggedIn (true )
         setLogger( info )

         localStorage.setItem("loggedin", true )

         localStorage.setItem("roleid", info.roleid)
         localStorage.setItem("user", info.user)
         localStorage.setItem("ownerid", info.ownerid)
         localStorage.setItem("name", info.name )

         localStorage.setItem("password", info.password )
         localStorage.setItem("email", info.email )
         localStorage.setItem("phone", info.phone )
         localStorage.setItem("address", info.address )
         localStorage.setItem("city", info.city )

         localStorage.setItem("state", info.state )
         localStorage.setItem("zip", info.zip )

         // TODO: doesnt work as expected ...
         localStorage.setItem("logger", info )
         localStorage.setItem("info", JSON.stringify(info))

          // Save the current person logged in
          Axios.post(CONSTANTS.url_logger,{
          ownerid: info.ownerid,
          user: info.user,
          name: info.name,
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


  return(
            <div>
            <h1>Read Me</h1>
             <b>FIX</b><br/>
             Axios hook doesnt work 
             <br/>
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
     if(toggleView== true ){
         return(
              <div>
              <li><Link to="/dbresource"> Resources </Link></li>
              <li><Link to="/dbuser"> User </Link></li>
              <li><Link to="/dbrole"> Roles </Link></li>

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
     if( toggleView==true ){
         return(
                  <div>
                    <li><Link to="/readme"> Readme </Link></li>  
                    <li><Link to="/test1"> Test Create User (e2e) </Link></li>
                    <li><Link to="/test2"> Test Options (e2e)  </Link></li>
                    <li><Link to="/test3"> Test Form Component (insert into onUser) </Link></li>
                    <li><Link to="/test4"> Test PopUp Component(e2e) </Link></li>
                    <li><Link to="/test5"> Test Unit Cost Component </Link></li>
                    <li><Link to="/test6"> Test Default Menu Select </Link></li>
                    <li><Link to="/test7"> Test JWT </Link></li>
                    <li><Link to="/test8"> Test Resource Report </Link></li>
                    <li><Link to="/test9"> Test Axios Hook </Link></li>
                  </div>                  
     
         )

     }

     

}


const NavigationPage = (props)=> {
       const onToggle = (evt) => {

           SetToggleView( !toggleView )

       }
       return(
             <div>
             <center>
             
             <ul class="no-bullets">

             <li><Link to="/readme">  Read Me</Link> </li>
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
                  <div class="col-sm-5 "> 
                   <b>Database Tables</b>
                       <Database/>
                   </div>
                   <div class="col-sm-2">
                      <button
                        class="btn btn-secondary btn-sm"
                        onClick={onToggle}
                        >
                        Toggle
                      </button>

                   </div>
                   <div class="col-sm-5">
                   <b>Test Routines</b>
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
              <div class="col-sm-7 ">Logged In: {props.logger.name} </div>
              <div class="col-sm-5"></div>
          </div>
        </div>
    </div> 
  )
}
  const CIMTStrip = (props) => {
    /*
       CIMT Users: phone number
       Resource Provider: US Postal Address
       System Admin: email
    */
    const [roles, setRoles] = useState()

    useEffect( () => {fetcher() }, [])

    function fetcher(){

      Axios.get(CONSTANTS.url_roleid)
        .then(
             (response)=>{
                  console.log( response.data)
                  setRoles( response.data )
             }
        ).catch(

            (response) => { alert(response)}
        )          

    }

    let roleid = props.logger.roleid
    let name = props.logger.name
    let phone = props.logger.phone
    let email = props.logger.email
    let address = props.logger.address
    let city = props.logger.city
    let state = props.logger.state
    let zip = props.logger.zip
    

    let roleValue
    try{
        let r = roles.find( v => v.label == roleid )
        roleValue= r.value
    }catch{
        console.log("** ERR in getting role.value ***")
    }
    console.log( " *** roleID ****")

    let info=" "
    if(name)      info = <span>{name}<br/></span>
    if(roleid==3 && email!=null)   info = <span>{info}<br/>{email}<br/> </span>
    if(roleid==2 && address!=null)   info = <span>{info}<br/>{address} </span>
    if(roleid==2 && city!=null)      info = <span>{info}<br/>{city} </span>
    if(roleid==2 && state!=null)      info = <span>{info}&nbsp;{state} </span>
    if(roleid==2 && zip!=null)      info = <span>{info}&nbsp;{zip} <br/> </span>
    if(roleid==1 && phone!=null)      info = <span>{info}&nbsp;{phone}<br/> </span>
    
    
    info = <span>{info}&nbsp;{roleValue} </span>

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
              <Route path="/readme" element={<ReadMePage logger={logger}/>} />

              <Route path="/caddresource"  element={<CAddResource logger={logger}/>} />
              <Route path="/caddemergency"  element={<CAddEmergencyIncident logger={logger}/>} />
              <Route path="/csearch"  element={<CSearch logger={logger}/>} />
              <Route path="/cresourcereport"  element={<CResourceReport logger={logger}/>} />
               
               
              <Route path="/dbresource"  element={<ResourcePage/>} />
              <Route path="/dbuser"  element={<UserPage/>} />   
              <Route path="/dbrole"  element={<RolePage/>} />   

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
              <Route path="/test8"  element={<TestResourceReport />} />
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

