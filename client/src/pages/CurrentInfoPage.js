
import Axios from 'axios'
import {useState, useEffect} from 'react'

import * as CONSTANTS from '../pages/Constants.js'
//import {epoch,epochtodate,random} from '../library/library.js'

import './Page.css'

const CurrentInfoPage = () => {

    const[ dbTable , setDBTable] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_currentinfo
    function fetcher(){

        Axios.get(url)
          .then(
               (response)=>{
                    console.log( response.data)
                    setDBTable( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

       return(
            <div>
            <center/>
            <h2>Database</h2>
             <b>CurrentInfo <br/>
             <span class="BlueNote">
             This requires 2 mysql commands<br/>
             1)to get the current user logged in <br/>
             select ownerid from logger order by _id desc limit 1  <br/>
             2) use above to get the current user info <br/>
             select * from user where ownerid= " + ownerid
             </span>
             <p/>
               
               </b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>ownerid</td>
                <td>roleid</td>
                <td>user</td>
                <td>name</td>
                <td>password</td>
                <td>email</td>
                <td>phone</td>
                <td>address</td>
                <td>city</td>
                <td>state</td>
                <td>zip</td>
                </tr>
               </thead>
            { dbTable?.map(
                (d) =>
                <tr>
                <td>{d.ownerid} </td>
                <td>{d.roleid} </td>
                <td>{d.user} </td>
                <td>{d.name} </td>
                <td>{d.password} </td>
                <td>{d.email} </td>

                <td>{d.phone} </td>
                <td>{d.address} </td>
                <td>{d.city} </td>
                <td>{d.state} </td>
                <td>{d.zip} </td>
                </tr>  
                ) 
                
            }           
            
            </table>
            </div> 

       )


}
/*
                menu.map(
                      (option) => {
                           return (
                            <option value={option.label}>{option.value}</option>
                       )
                      }
                )
*/

export {CurrentInfoPage} 