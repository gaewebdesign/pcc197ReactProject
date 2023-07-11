
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

     const [ selected ,setSelected]  = useState(1)   // by default 1st option selected
     const [ selected2 ,setSelected2]  = useState(0)

     useEffect( ()=>{ fetcher() } ,[ ])
     props.func(selected)
     props.func2(selected2)

     // Create the same menu with the first option selected
     const menu_sel = []
     menu?.map(
        (option) => {

            if(option.label==1) {
               menu_sel.push({sel:true , label:option.level ,value:option.value})
            }else{
               menu_sel.push({sel:false , label:option.label ,value:option.value})

            }

        }


     )
     function fetcher(){

        Axios.get(props.url)
          .then(
               (response)=>{

                    setMenu( response.data )
                    setSelected(response.data.length)

               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      // when the Primary menu is selected, also set up the Secondary menu
      // omit whatever is selected in the Primary Menu
      const handleChange = (evt)=> {
          let temp=[]  
          // primary menu selected value
          setSelected ( evt.target.value )
          /*
            copy the Primary into the secondary menu (empty by default)
            but omit the Primary menu selection
          */
          menu?.map(
               (option) => { if(option.label != evt.target.value)  temp.push( option)  }
          )
          setMenu2(temp)
          // if the user never selects from the Secondary menu
          // then useState(0) is the default
          // handleChange2 handles when Secondary menu is selected
   
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
                // 1st option is selected by default
                menu_sel.map(
                    (option) => {
                           return (
                              <option selected={option.sel} value={option.label}>{option.value}</option>
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