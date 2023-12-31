// Save to data base
/*
   client side, in the React directory (client), install
   axios
--------
   server side install express,nodemon,mysql
   modify package.json, add the script
   "devStart" : "nodemon index.js"
   create index.js (start with depot index.js)
   npm run devStart
--------

*/

import Axios from 'axios'
import {useState, useEffect} from 'react'

import * as CONSTANTS from '../pages/Constants.js'
import '../pages/Page.css'

const ClearButton = (evt) =>{

      alert('not implemented')

}
   

const TestTestBox = () => {

   const [ user, setUser] = useState(" (user) ")
   const [ name, setName] = useState(" (name) ")
   const [ roleid, setRoleID] = useState(1)
   const [ pass, setPass] = useState(" (password)")
   const [ email, setEmail] = useState(" (email)")
   const [ address, setAddress] = useState(" (address)")
   const [ phone, setPhone] = useState(" (phone)" )
   const [ city, setCity] = useState(" (city)")
   const [ state, setState] = useState(" (state)")
   const [ zip, setZip] = useState(" (zip)")


   const[  dbUsers , setDBUsers] = useState([])
   const[  roleMenu , setRoleMenu] = useState([])

   const onUser = (evt)=>{ setUser( evt.target.value) }
   const onRole = (evt)=>{ setRoleID( evt.target.value) }
   const onName = (evt)=>{ setName( evt.target.value)}
   const onPassword = (evt)=>{ setPass( evt.target.value) }
   const onEmail = (evt)=>{ setEmail( evt.target.value) }
   const onPhone = (evt)=>{ setPhone( evt.target.value) }
   const onAddress = (evt)=>{ setAddress( evt.target.value) }
   const onCity = (evt)=>{ setCity( evt.target.value) }
   const onState = (evt)=>{ setState( evt.target.value) }
   const onZip = (evt)=>{ setZip( evt.target.value) }

   function  fetcher(){
      Axios.get(CONSTANTS.url_getusers)
      .then(
              (response)=>{
                 setDBUsers( response.data )
              }
      ).catch(
          (error)  => {
               alert("ERROR(likely no server): " + error )
          }
      )

  } 
   useEffect(
        () => { fetcher()} ,[]

   )

   function  fetcher2(){
      Axios.get(CONSTANTS.url_roleid)
      .then(
              (response)=>{
                 setRoleMenu( response.data )
              }
      ).catch(
          (error)  => {
               alert("ERROR(likely no server): " + error )
          }
      )

  } 

  useEffect(
   () => { fetcher2()} ,[]

)
  
  const onChangeRoleID= (evt)=>{

         setRoleID (evt.target.value)
         console.log( evt.target.value)

   }

   const UserList = () =>{

      return dbUsers?.map(item => (
          <div>                                                                                                                                                          
             <span><b>user:{item.user}</b> [{item.ownerid}] &nbsp;role:{item.roleid} &nbsp; {item.name}  {item.email} {item.password}</span>                                                                                               
          </div>
     ));

}


   const ownerid =  Math.floor(Math.random()*1000+9000) 
   const InsertButton = (evt) => {

      Axios.post(CONSTANTS.url_insertuser,{
        ownerid: ownerid,
        roleid:roleid,
        user:user,
        name: name, 
        email: email ,
        password: pass,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip:zip    
    
    } )
      .then(
         (response) => {  
          alert("GOOD: " + user + " (" + name + ")")
          }

       ).catch(
         (err) => {  alert("Error from server: " + err ) }
   
      )
   
   }
   
  return (

            <div>
             <b> TextBox to db ( user table ) </b><br/>

             <div class="form-group">
             <label >User:</label>
             <input 
                 type="text"
                 id="usr"
                 onChange = {onUser}
             ></input>
             </div>

             <div class="form-group">
             <label >Role: </label>
             <select
               onChange={onChangeRoleID}
             >
             {
               roleMenu.map(
                     (option) => {
                       let value = "#" + option.label + " " + option.value
                      return (
                       <option selected value={option.label}>{value}</option>
                      )
                     }
               )
       }


             </select>
  
             </div>

                 <div class="form-group">
                 <label >Name:</label>
                 <input 
                     type="text"
                     onChange = {onName}
                 ></input>
                 </div>
             
                 <div class="form-group">
                 <label> Email:</label>
                 <input 
                     type="email"
                     onChange = {onEmail}
                 ></input>
                 </div>

                 <div class="form-group">
                 <label >Password:</label>
                 <input 
                     type="password"
                     onChange = {onPassword}
                 ></input>
                 </div>

                 <div class="form-group">
                 <label >Phone</label>
                 <input 
                     type="text"
                     onChange = {onPhone}
                 ></input>
                 </div>



                 <div class="form-group">
                 <label >Address</label>
                 <input 
                     type="text"
                     onChange = {onAddress}
                 ></input>
                 </div>

                 <div class="form-group">
                 <label >City</label>
                 <input 
                     type="text"
                     onChange = {onCity}
                 ></input>
                 </div>

                 <div class="form-group">
                 <label >State</label>
                 <input 
                     type="text"
                     onChange = {onState}
                 ></input>
                 </div>

                 <div class="form-group">
                 <label >Zip</label>
                 <input 
                     type="text"
                     onChange = {onZip}
                 ></input>
                 </div>

                 <hr/>
                 <button
                       type="button"
                       class="btn btn-primary"
                       onClick= {InsertButton }
                     ><b>Insert to DB </b>
                 </button>
                 &nbsp;
                 <button
                 type="button"
                 class="btn btn-primary"
                 onClick= {ClearButton }
               ><b>Clear</b>
                 </button>
                 <br/>
                 <p/>
                 {ownerid}<br/>
                 {user} &nbsp; {name} &nbsp; {email} &nbsp; {pass} <br/>
                 {address} &nbsp; {city} &nbsp; {state} &nbsp; {zip} <br/>
                 {phone}

                 <p/>
                 <b>This is from user table </b>
                 <span>
                   <UserList/>
                 </span>
            </div>



  )

}


export {TestTestBox}