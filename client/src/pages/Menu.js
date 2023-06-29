

import {useEffect , useState} from 'react'
import Axios from 'axios'
import * as CONSTANTS from './Constants.js'

/*
*/




const ResourceID = () => {
    const[ resourceid , setResourceID] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_resourceid
    function fetcher(){

        Axios.get(url)
          .then(
               (response)=>{
                    console.log( response.data)
                    setResourceID( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      } 



      return(
        <div>
        <center/>
        <h2>Database</h2>
         <b>CategoryID</b>
        <table class="DBTable Center">
           <thead>
            <tr>
            <td>label</td>
            <td>value</td>
            </tr>
           </thead>
        { resourceid?.map(
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

const CategoryID =() =>{
    const[ categoryid , setCategoryID] = useState([])

    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_categoryid
    function fetcher(){

        Axios.get(url)
          .then(
               (response)=>{
                    console.log( response.data)
                    setCategoryID( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      return(
        <div>
        <center/>
        <h2>Database</h2>
         <b>CategoryID</b>
        <table class="DBTable Center">
           <thead>
            <tr>
            <td>label</td>
            <td>value</td>
            </tr>
           </thead>
        { categoryid?.map(
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

const CostID = () => {

    const[ costid , setCostID] = useState([])
    useEffect( () => { fetcher()} , [])

    const url = CONSTANTS.url_costid
    function fetcher(){

        Axios.get(url)
          .then(
               (response)=>{
                    console.log( response.data)
                    setCostID( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      } 



      return(
        <div>
        <center/>
        <h2>Database</h2>
         <b>CostID</b>
        <table class="DBTable Center">
           <thead>
            <tr>
            <td>label</td>
            <td>value</td>
            </tr>
           </thead>
        { costid?.map(
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

export {ResourceID, CategoryID, CostID}