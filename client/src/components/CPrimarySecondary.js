
import Axios from 'axios'
import {useState, useEffect} from 'react'
import * as CONSTANTS from '../pages/Constants.js'

const empty = [
     {label: 1 , value: " - - - - "},
     {label: 2 , value: " -  - - - "}

]

const CPrimarySecondary = (props) => {

     const [ menu, setMenu] = useState(empty)
     const [ menu2, setMenu2 ] = useState(empty)

     const [ selected ,setSelected]  = useState(0)
     const [ selected2 ,setSelected2]  = useState(0)

     useEffect( ()=>{ fetcher() } ,[ ])
     props.func(selected)
     props.func2(selected2)

     
     const url = CONSTANTS.url_resourceid
     function fetcher(){

        Axios.get(url)
          .then(
               (response)=>{

                    setMenu( response.data )

               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      
      const handleChange = (evt)=> {
          let temp=[]  
          setSelected ( evt.target.value )
          menu?.map(

               (option) => { if(option.label != evt.target.value)  temp.push( option)  }
       
           )
          setMenu2(temp)
   
     }

     const handleChange2 = (evt) => {
          setSelected2( evt.target.value)


     }
  return (
        <div>
         <center/>
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 "><b>{props.name}</b></div>
        <div class="col-sm-8">
        <select
           onChange = {handleChange}
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

        </div>
        </div>
        </div> 

 {/* Secondary Menu*/}
 <div class="container-sm Function">
 <div class="row">
 <div class="col-sm-4" > <b>{props.name2}</b></div>
 <div class="col-sm-8">
 <select
    onChange = {handleChange2}
 >
 {
         menu2.map(
               (option) => {
                    return (
                     <option selected value={option.label}>{option.value}</option>
                )
               }
         )
 }
 </select>

 </div>
 </div>
 </div> 






        </div>




  )


}


export {CPrimarySecondary}