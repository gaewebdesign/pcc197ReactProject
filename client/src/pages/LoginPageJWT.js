import {React,useState, useEffect} from 'react'

import Axios from 'axios'
import * as CONSTANTS from '../pages/Constants.js'

const UserList = () => {
   const [userList , setUserList] = useState()
   function  fetcher(){
              Axios.get(CONSTANTS.url_getusers)
              .then(
                      (response)=>{
                         setUserList( response.data )
                      }
              ).catch(
                  (error)  => {
                       alert("ERROR(likely no server): " + error )
                  }
              )
        
          } 
      
          // Load the list of users (once)
          useEffect( () => {fetcher()} , [ ] )
        



   if( CONSTANTS.DEBUG==false){
      return (
         <span></span>
      )
   }


   return(
         <div>
             <center>  User List</center>
             <table class="DBTableLight">
                     <thead>
                     <tr>
                     <td>Role</td>
                     <td>OwnerID</td>                            
                     <td>User</td>                            
                     <td>Display Name</td>
                     <td>Email</td>
                     <td>Password</td>
                     <td>Address</td>

                     </tr>
                     </thead>

                     { userList?.map(
                         (d) => 
                             <tr>
                             <td>{d.roleid}</td>
                             <td>{d.ownerid}</td>
                             <td>{d.user}</td>
                             <td>{d.name}</td>                                    
                             <td>{d.email}</td>
                             <td>{d.password}</td>
                             <td>{d.address} &nbsp;
                                 {d.city} &nbsp;
                                 {d.state} &nbsp;
                                 {d.zip}
                             </td>

                              </tr>
                         )

                 }

             </table>
         
         </div>

   )



}
const LoginPageJWT = (props )=>  {
   const [user , setUser] = useState( )
   const [password ,setPass]  = useState()

 // Save the user and passwordb    
 const onUser = (evt)=>{  setUser( evt.target.value) }
 const onPassword = (evt)=>{  setPass( evt.target.value) }

 const LogInButton = (evt) =>{
    Axios.post(CONSTANTS.url_loginjwt,{
      user: user, 
      password: password
    } )
    .then(
       (response) => { 
           // Handle Authentication on the server side
           // the server does a select based on user/password
           // and either returns 200 and the data or 500/error
           // only one row returned due to table constraints
           // unique user 
           const info = response.data[0]
           console.log("*** info from server")
           console.log( info )
           console.log("*** info from server")

           // Heading to App.js (ImLoggedIn  call back)
           // where the user (ownerid,epoch) saved in db
           props.func(info)

       }
    ).catch(
       (error) => {  alert("Incorrect user/password " + error)   }
 
    )}

    return(
        <div>
          
          <div class="form-group">
            <div class="container-sm">
                      <div class="row">
                      <div class="col-sm-3"> </div>
                      <div class="col-sm-2">
                               <label>User</label>
                                </div>
                       <div class="col-sm-4">
                                 <input
                                  type="text"
                                  id="usr"
                                  onChange= {onUser}
                      ></input>
                      </div>
                      <div class="col-sm-3"> </div>
                      </div>

            </div>
            </div>

            <div class="form-group">
            <div class="container-sm">
                      <div class="row">
                      <div class="col-sm-3"> </div>
                      <div class="col-sm-2">
                               <label>Password</label>
                                </div>
                       <div class="col-sm-4">
                                 <input
                                  type="password"
                                  id="passwordr"
                                  onChange= {onPassword}
                      ></input>
                      </div>
                      <div class="col-sm-3"></div>
                      </div>
            </div>

            </div>
            {user}  ({password}) <br/>
            <div class="form-group">
            <div class="container-sm">
                      <div class="row">
                      <div class="col-sm-9"> </div>

                      <div class="col-sm-3">
                      <button
                      type="button"
                      class="btn btn-primary"
                      onClick= {LogInButton }
                    ><b>Log in </b>
                </button>
                      
                      </div>
                      </div>
            </div>
            
            </div>

               <UserList/>

           </div>


  )

}

export {LoginPageJWT}

