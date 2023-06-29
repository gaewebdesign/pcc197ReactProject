
import Axios from 'axios'
import {useState, useEffect} from 'react'

import './Page.css'
import * as CONSTANTS from '../pages/Constants.js'

const url_resourceid = CONSTANTS.url_resourceid
const url_categoryid = CONSTANTS.url_categoryid
const url_costid = CONSTANTS.url_costid

// given epoch, convert to a stringed date month/year
const Convert =  (e) => {
    let epoch = 0 + e

    let t = new Date(0)
    t.setMilliseconds(epoch)


    let month = t.toLocaleString('default', { month: 'long' });
    let day = t.getUTCDate();
    let year = t.getUTCFullYear();

    console.log( month + " " + day + " " + year )

    return month + " " + day + " " + year 

} 
const ResourcePage = () => {

    const[ resource , setResourcePage] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_dbresource //"http://localhost:3001/api/dbresource"
    function fetcher(){

        Axios.get(url)
          .then(
               (response)=>{
                    console.log( response.data)
                    setResourcePage( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

    const url_users = CONSTANTS.url_getusers
    useEffect( () => {fetchUsers() }, [] )
    const [ users , setUsers] = useState()
    function fetchUsers(){
        Axios.get(url_users)
        .then(
             (response)=>{
                  console.log( response.data)
                  setUsers( response.data )
             }
        ).catch(

            (response) => { alert(response)}
        )


    }
 
       console.log(users)


       return(
            <div>
            <center/>
            <h2>Database</h2>
             <b>Resource</b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>resource #</td>
                <td>[date]</td>
                <td>owner id </td>
                <td>name</td>
                <td>[owner]</td>
                <td>prime</td>                
                <td>secondary</td>                
                <td>description</td>
                <td>cap</td>                
                <td>dist</td>
                <td>cost</td>
                <td>unit</td>
                <td>last</td>
                </tr>
               </thead>
            { resource?.map(
                
                (d) =>
                <tr>
                <td>{d.resourceid} </td>
                <td>{Convert(d.resourceid)} </td>
                <td>{d.ownerid} </td>
                <td>{d.name} </td>
                <td>---</td>
                <td>{d.prime} </td>
                <td>{d.secondary} </td>
                <td>{d.description} </td>                                
                <td>{d.cap} </td>                                
                <td>{d.dist} </td>                                
                <td>{d.cost} </td>                                
                <td>{d.unit} </td>                                
                <td>{d.last} </td>                                                

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

export {ResourcePage} 