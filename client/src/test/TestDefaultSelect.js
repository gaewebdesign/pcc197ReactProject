
import {React,useState, useEffect} from 'react'
import Axios from 'axios'
import * as CONSTANTS from '../pages/Constants.js'

/*
     MAKE the last menu item, the default
     if nothing is changed by the user
*/

// Default option without selection
const m = [

    {label: 1 , value: "MLB: Baseball"},
    {label: 2 , value: "NFL: Football"},
    {label: 3 , value: "NBA: Basketball"},
    {label: 4 , value: "PGA: Golf"},
]

const TestDefaultSelect = () => {
    const [ menu, setMenu] = useState([])
    const [ selected ,setSelected]  = useState(0)

    useEffect( ()=>{ fetcher() } ,[ ])
    const url = CONSTANTS.url_costid
    function fetcher(){

       Axios.get( url )
         .then(
              (response)=>{
                   setMenu( response.data )
                   setSelected( response.data.length)
              }
         ).catch(

             (response) => { alert(response)}
         )          
 
     } 



    const GetSelections = (evt) => {

        let r = "label:" + evt.target.label
        r += "value:" + evt.target.value
        alert( selected )

    }
    const handleMenuChange = (evt)=>{

        setSelected ( evt.target.value )


    }

    return(
        <div>
    <select
    onChange = {handleMenuChange}
    >
     {
         menu.map(
               (option) => {
                    return (
                     <option selected value={option.label}>{option.value}</option>
                )
               }
         )
     }
    </select>
    <p/>
    <button
    type="button"
    class="btn btn-primary"
    onClick= {GetSelections }
    ><b>GetSelections</b>
   </button>

     </div>
   )



}


export {TestDefaultSelect}