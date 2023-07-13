

import Axios from 'axios'
import {useState, useEffect} from 'react'

import * as CONSTANTS from '../pages/Constants.js'

const url_resourceid = CONSTANTS.url_resourceid

const TestResourceReport = (evt) => {
    const [resourcemenu , setResourceMenu] = useState()

    useEffect( () =>{ fetcher()} , [])

    function fetcher(){
        Axios.get(url_resourceid)
        .then(
                (response)=>{
                   setResourceMenu( response.data )
                }
        ).catch(
         (error)  => {
            alert("ERROR(retrieving Resource table (no server?): " + error )
       }
        )

    }


  return (
            <div>
              <h1>Test Resource Report</h1>
            </div>

  )

}


export {TestResourceReport}