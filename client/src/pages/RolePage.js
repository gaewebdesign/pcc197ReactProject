
import Axios from 'axios'
import {useState, useEffect} from 'react'

import './Page.css'
import * as CONSTANTS from '../pages/Constants.js'

const RolePage = () => {

    const[ role , setRoles] = useState([])
    useEffect( () => { fetcher()} , [])

    function fetcher(){

        Axios.get( CONSTANTS.url_roleid )
          .then(
               (response)=>{
                    console.log( response.data)
                    setRoles( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      return(
            <div>
            <center/>
            <h2>Database</h2>
             <b>Roles</b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>label #</td>
                <td>value</td>
                </tr>
               </thead>
            { role?.map(
            
                (d) =>
                <tr>
                <td>{d.label} </td>
                <td>{d.value} </td>
                </tr>  
                ) 
                
            }           

            </table>
            </div> 

       )


}


export {RolePage} 