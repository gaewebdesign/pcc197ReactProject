
import Axios from 'axios'
import {useState, useEffect} from 'react'

import './Page.css'

const UserPage = () => {

    const[ dbTable , setDBTable] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = "http://localhost:3001/api/dbuser"
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
             <b>User</b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>ownerid</td>
                <td>roleid</td>
                <td>user</td>
                <td>name</td>
                <td>email</td>
                <td>password</td>                
                <td>phone</td>                
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
                <td>{d.email} </td>
                <td>{d.password} </td>                                
                <td>{d.phone} </td>                               
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

export {UserPage} 