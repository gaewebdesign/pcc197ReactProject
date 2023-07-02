
import {React,useState, useEffect, useMemo} from 'react'
import Axios from 'axios'


import * as CONSTANTS from '../pages/Constants.js'
// https://blog.openreplay.com/integrating-axios-with-react-hooks/

const useAxiosHook = (url,payload) => {

   const [ dataList , setDataList] = useState(null)
   const [error, setError] = useState(false)
   const [loaded , setLoaded] = useState(false)
  
   useEffect ( () => {
            Axios
            .get(url)
            .then(
                  (response) => {
                        console.log("inside *********")
                        console.log(response.data)
                        setDataList(response.data)
                        console.log("inside *********")
                  }
            )
            .catch (
                  (error) => {setError(error.message)}
            )
            .finally (
                  () => setLoaded(true )
            )
   } ,  []

   )
      return [dataList,error,loaded]
}

const TestAxiosHook = () =>{
   
    
    const [ data , isError, loaded] = useAxiosHook(
    CONSTANTS.url_units,
      {  }
 )
  
  const stringifiedData = useMemo(
      () =>{
          return JSON.stringify(data || {})
       }, [data]

  )
    if (loaded){
      console.log("--- isloaded ------")
      console.log(loaded)
      console.log("--- data ------")
      console.log(data)
       console.log("--- err  -------")
       console.log(isError)
       console.log("---------")
        return(
           <div>
            Data loaded
            {
                  data?.map(

                    (option)=> {
                       <b>{option.value}</b>


                    }



                  )
            
            
            }

            </div>

        )
    }

 }

 export {TestAxiosHook}