
import {React,useState, useEffect} from 'react'
import {useAxiosHook} from '../hooks/useAxiosHook.js'
//import {useAxiosHook2} from '../hooks/useAxiosHook2.js'

import * as CONSTANTS from '../pages/Constants.js'


const TestAxiosHook = () =>{

const[ unitList, setUnitList] = useState()
const[res , isError, isLoading] = useAxiosHook(
     {
        url: CONSTANTS.url_units,
        method: 'get',
        body: { },
        headers: { } 
      }
 )

 useEffect(
       () =>{if(res & res.data) setUnitList(res.data) },
      [res]

 )
 console.log("*** useAxiosHook2 ***")
 isLoading ? console.log("loading") : console.log(unitList)
       console.log("*** useAxiosHook2 ***")

 }

 export {TestAxiosHook}