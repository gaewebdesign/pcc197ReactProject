import {React,useState, useEffect} from 'react'

import Axios from 'axios'
import * as CONSTANTS from '../pages/Constants.js'

const LoginPageJWT = ( )=>  {
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
           alert("Logged in: " + response.status)   
           // only  one row returned due to table constraints
           const info = response.data[0]
           console.log( info )
           localStorage.setItem("loggedin", true)

           // this is exactly the database user.. each column 
           localStorage.setItem("ownerid", info.ownerid)
           localStorage.setItem("roleid", info.roleid)
           localStorage.setItem("user", info.user)
           localStorage.setItem("name", info.name)
           localStorage.setItem("password", info.password)              
           localStorage.setItem("emai", info.email)              

           localStorage.setItem("phone", info.phone)              
           localStorage.setItem("address", info.address)              
           localStorage.setItem("city", info.city)              
           localStorage.setItem("state", info.state)             
           localStorage.setItem("zip", info.zip)               

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
                                  type="text"
                                  id="passwordr"
                                  onChange= {onPassword}
                      ></input>
                      </div>
                      <div class="col-sm-3"></div>
                      </div>
            </div>

            </div>

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


           </div>


  )

}

export {LoginPageJWT}

