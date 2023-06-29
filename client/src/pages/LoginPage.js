import Axios from 'axios'
import {useState , useEffect} from 'react'

import * as CONSTANTS from './Constants.js'
import './Page.css'

const LoginPage = (props)=> {

    const [ user, setUser] = useState(" ** user ** ")
    const [ password, setPass] = useState(" ** password ** ")
    const [ userList , setUserList] = useState([])

// Save the user and passwordb    
    const onUser = (evt)=>{  setUser( evt.target.value) }
    const onPassword = (evt)=>{  setPass( evt.target.value) }

// if Used.. these get set NOT from entering data... so may not be used    
/*
    const [ email, setEmail] = useState(" (email)")
    const [ displayName, setDisplayName] = useState(" (display Name) ")
    const onDisplayName = (evt)=>{  setDisplayName( evt.target.value) }
    const onEmail = (evt)=>{  setEmail( evt.target.value)  }
*/

    function  fetcher(){
//      Axios.get("http://localhost:3001/api/getusers")
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
   
    const LogInButton = ( evt)=> {
             
         try{

                const search = userList.find( (d) => {return  (d.user == user) && (d.password==password) } )

                 if(search){
//                        alert("FOUND: ( " +  search.user + " ** " + search.name  + " **" + search.password + ")" )   
                        const info = {
                            roleid: search.roleid,
                            ownerid: search.ownerid,
                            user: search.user ,
                            password: search.password,
                            name: search.name,
                            email: search.email,
                            phone: search.phone,
                            address: search.address,
                            city: search.city,
                            state: search.state,
                            zip: search.zip
                        }
                        props.func( info )   
                    }else{
                          alert("INCORRECT user/password combination " )
                 }
                }catch{
                         alert("CRASHING! Inside LoginPage")
                }

    }

    const EnterValues = ()=>{
            if( CONSTANTS.DEBUG==false){
                    return(
                        <div>
                        </div>

            )}else{
                return(

                    <div>
                    <center>
                    {user} &nbsp;{password}
                    </center>
                    </div>
    
                )
            }


    }
    const UserList = () => {
          if( CONSTANTS.DEBUG==false){
             return (
                <span></span>
             )
          }


          return(
                <div>
                    <center>  User List( use Constants.js file to turn off debug statements)</center>
                    <table class="DBTable ">
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
    return(
          <div>
            <center><h2>Pasadena City College CERT </h2></center>
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


                <EnterValues/>

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
          
             <UserList/>

             </div>


    )

}


export {LoginPage}