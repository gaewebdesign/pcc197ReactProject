
import Axios from 'axios'
import {useState, useEffect} from 'react'

import * as CONSTANTS from '../pages/Constants.js'

import './Page.css'
import {epoch,epochtodate,random} from '../library/library.js'

const IncidentPage = () => {

    const[ dbTable , setDBTable] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_getincidents
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
             <b>Incident</b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>owner id</td>
                <td>category id</td>
                <td>incident id</td>            
                <td>date</td>                
                <td>description</td>                
                </tr>
               </thead>
            { dbTable?.map(
                
                (d) =>
                <tr>
                <td>{d.ownerid} </td>
                <td>{d.categoryid} </td>
                <td>{d.incidentid} </td>
                <td>{epochtodate(d.idate)}</td>                                
                <td>{d.description} </td>                                
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

export { IncidentPage} 