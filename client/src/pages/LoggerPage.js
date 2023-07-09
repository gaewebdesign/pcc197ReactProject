
import Axios from 'axios'
import {useState, useEffect} from 'react'

import * as CONSTANTS from '../pages/Constants.js'
import {epoch,epochtodate,epochtoDateTime,random} from '../library/library.js'


import './Page.css'

const LoggerPage = () => {

    const[ dbTable , setDBTable] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_getloggers
//    const url = "http://localhost:3001/api/dbuser"
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
             <b>Logger</b>
            <table class="DBTable Center">
               <thead>
                <tr>
                <td>ownerid</td>
                <td>epoch</td>
                <td>[ date ] </td>
                </tr>
               </thead>
            { dbTable?.map(
                
                (d) =>
                <tr>
                <td>{d.ownerid} </td>
                <td>{d.epoch} </td>
                <td>{epochtodate(d.epoch)} </td>
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

export {LoggerPage} 