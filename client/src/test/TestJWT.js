
import {React,useState, useEffect} from 'react'

import Axios from 'axios'
import * as CONSTANTS from '../pages/Constants.js'

const TestJWT = ( )=>  {

    const [ user, setUser] = useState(" ** user ** ")
    const [ password, setPass] = useState(" ** password ** ")
    const [ userList , setUserList] = useState([])


// Save the user and passwordb    
    const onUser = (evt)=>{  setUser( evt.target.value) }
    const onPassword = (evt)=>{  setPass( evt.target.value) }

        const LogInButton = (evt) =>{
          Axios.post(CONSTANTS.url_loginjwt,{
            user: user, 
            password: password
          } )
          .then(
             (response) => {  alert("Logged in" + response.status)     }
          ).catch(
             (error) => {  alert("Incorrect user/password " + error)   }
       
          )}
    
    return(
        <div>
          <center><h2>Test JWT </h2></center>
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

export {TestJWT}