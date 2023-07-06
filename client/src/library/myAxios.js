import Axios from 'axios'

import {useEffect, useState} from 'react'
//  https://stackoverflow.com/questions/66214632/how-to-get-value-from-a-fulfilled-promise-in-react

/*
returns Promise
async function myAxiosGet(url){
     const res = await Axios(url)
     return await res.data
 }
*/

/*
async function myAxiosGet(url){
    const res = await Axios(url)
    return await res.data
}
*/
function AxiosPost(url,contains){
  Axios.post(url,contains)
  .then(
      (response) => {  alert("Data entered: " + response.status)     }
   ).catch(
      (error) => {  alert("Data error, check data field: " + error)   }
 
   )

}
const myAxiosGet= async (url)=>{
    try{
      const response =  await Axios.get(url)
      return  { response  }
    
    }catch(error){
        return {error}
    }


}
 const useMyAxios = (url) => {
    //    const [data , setData] = useState([{label:0 , value:"KIM"}])
          const [data , setData] = useState([ {label:1, value:"KLIMT"}])
          const [loading , setLoading] = useState()
          const [error , setError] = useState()
    
          const getPosts = async() => {
    
            const r = Axios.get(url)
            .then(
              (response)=>{
                   console.log( response.data )
                   setData( response.data)
                   setLoading( false)
    
    
              }
    
            )
            .catch(
              (error) => {
                  setError( error)
              }
    
            )
            .finally(
            )
    
          }
            useEffect( () => { getPosts() },  [url] )
            
            return {data,loading,error}
    
        }
    
export {AxiosPost}