
import Axios from 'axios'
import {useState, useEffect} from 'react'

const m = [
     {label: 1 , value: "Menu item 1 "},
     {label: 2 , value: "Menu item 2"}

]

const CPopUp = (props) => {

     const [ menu, setMenu] = useState(m)
     const [ selected ,setSelected]  = useState(0)

/*     
     "http://localhost:3001/test/resource"     
     "http://localhost:3001/test/category"     

 */
     useEffect( ()=>{ fetcher() } ,[ ])
     props.func(selected)

     function fetcher(){

        Axios.get(props.url)
          .then(
               (response)=>{
                    setMenu( response.data )
               }
          ).catch(
 
              (response) => { alert(response)}
          )          
  
      }  

      const handleChange = (evt)=> {
        
          setSelected ( evt.target.value )
          console.log( evt.target.value)
   
     }
  return (
        <div>
    
        <div class="container-sm Function">
        <div class="row">
        <div class="col-sm-4 TextBox"> {props.name} </div>
        <div class="col-sm-8">
        <select
           onChange = {handleChange}
        >
        {
                menu.map(
                      (option) => {
                           return (
                            <option value={option.label}>{option.value}</option>
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


export {CPopUp}